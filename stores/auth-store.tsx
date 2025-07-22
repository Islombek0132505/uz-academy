import { create } from "zustand"

type AuthType = "login" | "register"

interface IAuthStateStore {
    authType: AuthType
    setAuth: (state: AuthType) => void
}

export const useAuthState = create<IAuthStateStore> (set => ({
    authType: "login",
    setAuth: state => set({authType: state})
}))