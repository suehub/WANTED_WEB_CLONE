import { atom } from "recoil";

export const logState = atom({
  key: "logState",
  default: {
    userIdx: 1,
    nickName: "",
    profileImgUrl: "",
    jwt: "",
  }
});