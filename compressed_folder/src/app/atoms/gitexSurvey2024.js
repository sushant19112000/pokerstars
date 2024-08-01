// atoms/asset.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const GitexSurvey2024State = atom({
  key: "gitexSurvey2024State", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
//   effects_UNSTABLE:[persistAtom]
});


