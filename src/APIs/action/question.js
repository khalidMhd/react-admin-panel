import { ADD_QUESTION_FAIL, ADD_QUESTION_REQUEST, ADD_QUESTION_SUCCESS } from "../contant/question";

const { default: axios } = require("axios");



const addQuestion = (file) => async (dispatch) => {
    try {
        dispatch({type: ADD_QUESTION_REQUEST, payload: {file}})
        const {data} = await axios.post('/api/question', file)
        // if (data) {
        // window.location.reload()
        // }
        dispatch({type: ADD_QUESTION_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADD_QUESTION_FAIL, payload:error.message})
    }
};

export {addQuestion}