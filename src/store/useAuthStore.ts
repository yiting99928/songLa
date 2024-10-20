import {create} from 'zustand';

interface User {
  username: string;
  email: string;
  userImg: string;
}

interface AuthState{
    isAuthenticated: boolean;
    user:null | User
    login: (email:string, password:string) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    login: async (email, password) => {
    // 模擬登入的邏輯
      await new Promise(resolve => setTimeout(resolve, 1000))

      const defaultUsername = '預設名'
      const defaultUserImg = 'https://placehold.co/100x100/png'

      // 模擬從 API 獲取的數據
      const fetchedUsername = '我的名';
      const fetchedUserImg = 'https://placehold.co/100x100/png';

      set({ isAuthenticated: true, user: {
        email,
        username: fetchedUsername || defaultUsername,
        userImg: fetchedUserImg || defaultUserImg,
      },})
    },
    logout: () => set({ isAuthenticated: false, user: null }),
  }))