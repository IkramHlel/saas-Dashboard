import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  sidebarOpen: boolean;
  activePage: string;
}

const initialState: UiState = {
  sidebarOpen: false,
  activePage: 'Dashboard',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: { payload: boolean }) => {
      state.sidebarOpen = action.payload;
    },
    setActivePage: (state, action: { payload: string }) => {
      state.activePage = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen, setActivePage } = uiSlice.actions;
export default uiSlice.reducer;