import { create } from 'zustand'

type trueOrFalse = {
  isOpenLogin: boolean
  setIsOpenLogin: (v:boolean) => void
}

const useTrueOrFalse = create<trueOrFalse>((set) => ({
  isOpenLogin: false,
  setIsOpenLogin: (v) => set(() => ({ isOpenLogin:v })),
}))
export default useTrueOrFalse