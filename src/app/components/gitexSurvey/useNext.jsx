import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { GitexSurvey2024StateTab } from '@/app/atoms/gitexSurvey2024TabNo';
export const useNext = () => {

    
    //nextTab
    //if type=="single" then handleNext()  else validate data(check if the array length==2)  
    const [tab,setTab]=useRecoilState(GitexSurvey2024StateTab)
    useEffect(()=>{},[tab])
    const handleNext = () => {
        //saveData(data)=>timeout=>next()
        // const newObj = {
        //     question: qNo - 1,
        //     answer: e,
        // };
        // setGitexSurveyState([...gitexSurveyState, newObj]);

        console.log('useNext invoked')
        setTab(prevTab => {
            const newTab = prevTab + 1;
            console.log('New Tab:', newTab);
            return newTab;
          });
        // setTimeout(() => {
        // }, 1000); // Adjust the delay (in milliseconds) as needed
    };
    return handleNext;
}


