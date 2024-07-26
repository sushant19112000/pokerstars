import React from 'react'
import { useRecoilState } from 'recoil';
import { GitexSurvey2024State } from '@/app/atoms/gitexSurvey2024';
import { GitexSurvey2024StateTab } from '@/app/atoms/gitexSurvey2024TabNo';
export const useNext = (type) => {
    //nextTab
    //if type=="single" then handleNext()  else validate data(check if the array length==2)  

    const [tab,setTab]=useRecoilState(GitexSurvey2024StateTab)
    const handleNext = () => {
        //saveData(data)=>timeout=>next()
        // const newObj = {
        //     question: qNo - 1,
        //     answer: e,
        // };
        // setGitexSurveyState([...gitexSurveyState, newObj]);
        setTab(tab+1)
        // setTimeout(() => {
        // }, 1000); // Adjust the delay (in milliseconds) as needed
    };
    return handleNext;
}


