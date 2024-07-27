import  { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { GitexSurvey2024StateTab } from '@/app/atoms/gitexSurvey2024TabNo';
export const useSkip = () => {

    
  
    const [tab,setTab]=useRecoilState(GitexSurvey2024StateTab)
    useEffect(()=>{},[tab])
    const handleSkip = () => {
  
        console.log('useSkkip invoked')
        setTab(prevTab => {
            const newTab = prevTab + 1;
            console.log('New Tab:', newTab);
            return newTab;
          });
      
    };
    return handleSkip;
}