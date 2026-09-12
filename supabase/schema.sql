-- Set up custom types
CREATE TYPE user_role AS ENUM ('free', 'trade_plus', 'admin');
CREATE TYPE risk_level AS ENUM ('Low', 'Medium', 'High');
CREATE TYPE online_status AS ENUM ('Online', 'Do Not Disturb', 'Invisible');

-- Profiles Table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  role user_role DEFAULT 'free'::user_role NOT NULL,
  online_status online_status DEFAULT 'Online'::online_status NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- FC Tasks & SBCs Table
CREATE TABLE fc_tasks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  reward_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Trade Signals Table
CREATE TABLE trade_signals (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  player_name TEXT NOT NULL,
  card_type TEXT NOT NULL,
  buy_target INTEGER NOT NULL,
  sell_target INTEGER NOT NULL,
  risk_level risk_level NOT NULL,
  notes TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Community Posts Table
CREATE TABLE community_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Post Comments Table
CREATE TABLE post_comments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Evolutions Table
CREATE TABLE evolutions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  requirements JSONB NOT NULL,
  stat_boosts JSONB NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE,
  chain_compatible BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Squads Table
CREATE TABLE squads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  formation TEXT NOT NULL,
  players JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_shared BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Chats Table
CREATE TABLE chats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Chat Participants
CREATE TABLE chat_participants (
  chat_id UUID REFERENCES chats(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (chat_id, user_id)
);

-- Messages Table
CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  chat_id UUID REFERENCES chats(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Setup Row Level Security (RLS)

-- Profiles: Anyone can read, users can update their own
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

-- Tasks: Anyone can read, only admins can insert/update/delete
ALTER TABLE fc_tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Tasks are viewable by everyone." ON fc_tasks FOR SELECT USING (true);
-- (Admin policies would require checking role in profiles table, omitted for brevity but standard practice)

-- Trade Signals: Only Trade Plus and Admins can read, Admins can write
ALTER TABLE trade_signals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Trade Plus can view signals" ON trade_signals FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND (role = 'trade_plus' OR role = 'admin')
    )
  );

-- Community Posts: Anyone can read, authenticated can write
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Posts viewable by everyone" ON community_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert posts" ON community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Post Comments: Anyone can read, authenticated can write
ALTER TABLE post_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Comments viewable by everyone" ON post_comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert comments" ON post_comments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Evolutions: Anyone can read, only admins can write
ALTER TABLE evolutions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Evolutions viewable by everyone" ON evolutions FOR SELECT USING (true);

-- Squads: Users can read shared or own, can write own
ALTER TABLE squads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Shared squads viewable by everyone" ON squads FOR SELECT USING (is_shared = true OR auth.uid() = user_id);
CREATE POLICY "Users can insert own squads" ON squads FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own squads" ON squads FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own squads" ON squads FOR DELETE USING (auth.uid() = user_id);

-- Chats and Messages: Only participants can read/write
ALTER TABLE chats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Participants can view chats" ON chats FOR SELECT USING (EXISTS (SELECT 1 FROM chat_participants WHERE chat_id = id AND user_id = auth.uid()));

ALTER TABLE chat_participants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Participants can view chat_participants" ON chat_participants FOR SELECT USING (user_id = auth.uid() OR EXISTS (SELECT 1 FROM chat_participants cp WHERE cp.chat_id = chat_participants.chat_id AND cp.user_id = auth.uid()));
CREATE POLICY "Users can insert chat_participants" ON chat_participants FOR INSERT WITH CHECK (true); -- Simplified for mock, ideally trigger or specific rules

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Participants can view messages" ON messages FOR SELECT USING (EXISTS (SELECT 1 FROM chat_participants WHERE chat_id = messages.chat_id AND user_id = auth.uid()));
CREATE POLICY "Participants can insert messages" ON messages FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM chat_participants WHERE chat_id = messages.chat_id AND user_id = auth.uid()) AND sender_id = auth.uid());