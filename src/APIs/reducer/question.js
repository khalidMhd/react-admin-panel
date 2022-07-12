import { Switch } from "react-router";
import { ADD_QUESTION_FAIL, ADD_QUESTION_REQUEST, ADD_QUESTION_SUCCESS } from "../contant/question";


function addQuestionReducer(state = {addQuestionInfo:{} }, action) {
    switch (action.type) {
        case ADD_QUESTION_REQUEST: 
        return { addQuestionLoading: true }
        case ADD_QUESTION_SUCCESS: 
        return {addQuestionLoading:false, addQuestionSuccess:true, addQuestionInfo: action.paload}
        case ADD_QUESTION_FAIL: 
        return { addQuestionLoading: false, addQuestionError: action.payload }
        default: 
        return state
    }
}

export { addQuestionReducer }