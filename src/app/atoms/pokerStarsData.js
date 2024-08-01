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
    gender:"",
    autowithlimit:"",
    stateofbirth:"",
    countryofbirth:"",
    cityofbirth:"",
    state:"",
    city:"",
    postcode:"",
    address:"",
    firstname:"",
    lastname:"",
    depositlimit:"",
    sevenlimit:"",
    weeklylimit:""
  }, // default value (aka initial value)
//   effects_UNSTABLE:[persistAtom]
});
