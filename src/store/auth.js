import { create } from 'zustand';

export const useGlobalState = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useGlobalState;
