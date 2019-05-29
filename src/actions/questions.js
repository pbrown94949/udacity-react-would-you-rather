import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion(questionAnswer) {
  return {
    type: ANSWER_QUESTION,
    questionAnswer,
  }
}

export function handleAnswerQuestion({qid, answer}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const questionAnswer = {
      answer,
      authedUser,
      qid,
    }
    dispatch(showLoading())
    return saveQuestionAnswer(questionAnswer)
      .then(() => dispatch(answerQuestion(questionAnswer)))
      .then(() => dispatch(hideLoading()))
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion({optionOneText, optionTwoText}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
