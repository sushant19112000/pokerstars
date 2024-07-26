// atoms/asset.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const AfricaSurveyState = atom({
  key: "africaSurvey", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
//   effects_UNSTABLE:[persistAtom]
});


