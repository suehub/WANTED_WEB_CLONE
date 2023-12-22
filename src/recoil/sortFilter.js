import { atom } from "recoil";

export const sortFilter = atom({
  key: "sortFilter",
  default: {
    sortValue: "응답률순"
  }
});