export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  state?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}