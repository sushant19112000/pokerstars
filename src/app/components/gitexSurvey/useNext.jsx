import React from 'react'
import { useRecoilState } from 'recoil';
import { GitexSurvey2024State } from '@/app/atoms/gitexSurvey2024';
export const useNext = () => {
    const [gitexSurveyState, setGitexSurveyState] = useRecoilState(GitexSurvey2024State)
    const handleNext = (e) => {
        const newObj = {
            question: qNo - 1,
            answer: e,
        };
        setGitexSurveyState([...gitexSurveyState, newObj]);
        // setTimeout(() => {
        // }, 1000); // Adjust the delay (in milliseconds) as needed
    };
    return handleNext;
}


