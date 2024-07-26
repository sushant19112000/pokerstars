import React from 'react'
import { useRecoilState } from 'recoil';
import { GitexSurvey2024State } from '@/app/atoms/gitexSurvey2024';
import { GitexSurvey2024StateTab } from '@/app/atoms/gitexSurvey2024TabNo';
export const useNext = () => {
    //nextTab
    const [tab,setTab]=useRecoilState(GitexSurvey2024StateTab)
    const handleNext = () => {
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


