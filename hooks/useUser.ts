import { Order, User } from '@/lib/types';
import { create } from 'zustand'

export interface currentUser {
    user: User;
    setUser: (user: User) => void
}

export const useUser = create<currentUser>()((set) => ({
    user: {} as User,
    setUser: (user: User) => set({ user })
}))
