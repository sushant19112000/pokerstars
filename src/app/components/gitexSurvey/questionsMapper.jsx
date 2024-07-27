import React, { useEffect } from 'react'
import { questionsData } from '@/app/data/gitexSurvey2024Data/data'
import { QuestionOptionSingle } from './questionOptionSingle';
import { QuestionOptionDouble } from './questionOptionDouble';
import { useRecoilState } from 'recoil';
import { GitexSurvey2024StateTab } from '@/app/atoms/gitexSurvey2024TabNo';
export const QuestionsMapper = ({ tab }) => {
    console.log(tab)
    useEffect(() => {

    }, [tab])
    const question = questionsData.find(q => q.questionNumber === tab);
    console.log(questionsData)
    return (
        <div>
            <div style={{ color: 'white' }}>
                Questions Mapper
            </div>
            {
                question.optionSelectType == "single" && (
                    <>
                        <div style={{ fontSize: '2rem', color: 'white' }}>
                            {question.questionNumber}


                        </div>
                        <QuestionOptionSingle data={question} />
                    </>
                )
            }

            {
                question.optionSelectType == "double" && (
                    <>
                        <div style={{ fontSize: '2rem', color: 'white' }}>
                            {question.questionNumber}


                        </div>
                        <QuestionOptionDouble data={question} />
                    </>
                )
            }





        </div>
    )
}
