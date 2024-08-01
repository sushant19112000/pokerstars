// atoms/user.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const userState = atom({
  key: "user", // unique ID (with respect to other atoms/selectors)
  default: {
    username:'',
    token:""
  }, // default value (aka initial value)
  effects_UNSTABLE:[persistAtom]
});

