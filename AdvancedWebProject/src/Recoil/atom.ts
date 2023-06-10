import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserInfo } from "Types/UserInfoTypes";

const { persistAtom } = recoilPersist();

export const userInfoState = atom<UserInfo>({
  key: "userPat",
  default: {
    pat: "",
    username: "",
  },
  effects_UNSTABLE: [persistAtom],
});
