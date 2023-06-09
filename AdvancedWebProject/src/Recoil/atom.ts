import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userPatState = atom<string>({
  key: "userPat",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
