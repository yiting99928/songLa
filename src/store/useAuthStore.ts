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
      console.log('password', password)
      // 模擬從 API 獲取的數據
      const fetchedUsername = 'myName';
      const fetchedUserImg = 'https://placehold.co/100x100/png';

      set({ isAuthenticated: true, user: {
        email,
        username: fetchedUsername,
        userImg: fetchedUserImg,
      },})
    },
    logout: () => set({ isAuthenticated: false, user: null }),
  }))