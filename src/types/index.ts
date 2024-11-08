export interface Characteristic {
  name: string;
  value: number;
  description: string;
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  level: number;
  characteristics: Characteristic[];
  bio: string;
}