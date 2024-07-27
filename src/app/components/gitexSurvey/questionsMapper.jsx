import React, { useEffect } from 'react'
import { questionsData } from '@/app/data/gitexSurvey2024Data/data'
import { QuestionOptionSingle } from './questionOptionSingle';
import { QuestionOptionDouble } from './questionOptionDouble';
export const QuestionsMapper = ({ tab }) => {
    useEffect(() => {
    }, [tab])
    const question = questionsData.find(q => q.questionNumber === tab);
    return (
        <div>
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
