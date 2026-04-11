import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const loadAuthState = (): AuthState => {
  try {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('authUser');
    return {
      user: user ? JSON.parse(user) : null,
      token,
      isAuthenticated: Boolean(token),
    };
  } catch {
    return {
      user: null,
      token: null,
      isAuthenticated: false,
    };
  }
};

const initialState: AuthState = loadAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      try {
        localStorage.setItem('authToken', action.payload.token);
        localStorage.setItem('authUser', JSON.stringify(action.payload.user));
      } catch {
        // ignore local storage failures
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
      } catch {
        // ignore local storage failures
      }
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
