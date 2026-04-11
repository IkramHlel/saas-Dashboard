import type { User } from '../types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

const request = async <T>(url: string, data: unknown): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || 'Unable to complete request');
  }

  return payload as T;
};

export const loginUser = (credentials: LoginCredentials) => {
  return request<AuthResponse>('/api/auth/login', credentials);
};

export const signupUser = (credentials: SignupCredentials) => {
  return request<AuthResponse>('/api/auth/signup', credentials);
};
