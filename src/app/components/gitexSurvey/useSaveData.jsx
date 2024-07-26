import { useRecoilState } from 'recoil';
import { GitexSurvey2024State } from '@/app/atoms/gitexSurvey2024';
import React from 'react'
export const useSaveData = (qno, answer) => {
    const [gitexSurveyState, setGitexSurveyState] = useRecoilState(GitexSurvey2024State)
    const handleSaveData=()=>{
        const newObj = {
            question: qno,
            answer: answer,
        };
        setGitexSurveyState([...gitexSurveyState, newObj]);
    }
    return  handleSaveData;
}


//saveMul