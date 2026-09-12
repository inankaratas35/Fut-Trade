export type UserRole = 'free' | 'trade_plus' | 'admin';
export type OnlineStatus = 'Online' | 'Do Not Disturb' | 'Invisible';

export interface Profile {
  id: string;
  username: string;
  avatar_url: string;
  role: UserRole;
  online_status: OnlineStatus;
  created_at: string;
}

export interface FcTask {
  id: string;
  title: string;
  category: string;
  description: string;
  expires_at: string;
  reward_text: string;
  created_at: string;
}

export interface TradeSignal {
  id: string;
  author_id: string;
  player_name: string;
  card_type: string;
  buy_target: number;
  sell_target: number;
  risk_level: 'Low' | 'Medium' | 'High';
  notes: string;
  is_active: boolean;
  created_at: string;
}

export interface CommunityPost {
  id: string;
  user_id: string;
  title: string;
  content: string;
  image_url: string;
  category: string;
  created_at: string;
}

export interface PostComment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface Evolution {
  id: string;
  title: string;
  requirements: string; // JSON or stringified text
  stat_boosts: string;  // JSON or stringified text
  expires_at: string;
  chain_compatible: boolean;
}

export interface Squad {
  id: string;
  user_id: string;
  name: string;
  formation: string;
  players: any; // JSON representation of positions -> player data
  is_shared: boolean;
  created_at: string;
}

export interface Chat {
  id: string;
  created_at: string;
}

export interface ChatParticipant {
  chat_id: string;
  user_id: string;
}

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}
