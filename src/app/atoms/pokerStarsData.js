// atoms/asset.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const PokerStarsData = atom({
  key: "pokerStarsData", // unique ID (with respect to other atoms/selectors)
  default: {
    countryf1:"",
    username:"",
    password:"",
    email:"",
    dob:"",
    date:"",
    gender:"",
    autoWithLimit:"",
    weeklyLimit:"",
    sevenLimit:"",
    stateofbirth:"",
    countryofbirth:"",
    cityofbirth:"",
    state:"",
    city:"",
    postcode:"",
    address:""
  }, // default value (aka initial value)
//   effects_UNSTABLE:[persistAtom]
});
