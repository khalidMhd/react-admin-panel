import Axios from "axios";
import Cookie from 'js-cookie'
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, 
  USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, 
  USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL, 
  USER_UPDATE_REQUEST, USER_UPDATE_FAIL, USER_UPDATE_SUCCESS, 
  PROFILE_LIST_REQUEST, PROFILE_LIST_FAIL, PROFILE_LIST_SUCCESS,
} from "../contant/auth";

const userInfo = Cookie.getJSON("userInfo") || null
if (userInfo) {
  console.log('userInfo', userInfo.token);
  Axios.defaults.headers.common.Authorization = userInfo?.token
}

const listUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST })
    const { data } = await Axios.get('/api/user')
    dispatch({ type: USER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message })
  }
}

const listProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_LIST_REQUEST, payload: {id} })
    const { data } = await Axios.get('/api/profile/'+id)
    dispatch({ type: PROFILE_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PROFILE_LIST_FAIL, payload: error.message })
  }
}

const deleteUser = (id, deleted= false) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST, payload:{ id, deleted }})
    const { data } = await Axios.put('/api/userDelete/' + id, {deleted})
    dispatch({ type: USER_DELETE_SUCCESS, payload: data, success: true })
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message })
  }
}


const updateUser = (id,name, type,isSuperAdmin, password) => async (dispatch)=>{
  dispatch({type:USER_UPDATE_REQUEST,payload:{id,name, type,isSuperAdmin, password}})
  try {
      const {data} = await Axios.put('/api/user/'+id,{name, type,isSuperAdmin, password})
      if (data) {
        window.location.reload()
      }
      dispatch({type:USER_UPDATE_SUCCESS, payload:data})
  } catch (error) {
      dispatch({type:USER_UPDATE_FAIL,payload:error.message})
  }
}

const signin = (userName, password, ) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { userName, password } })
  try {
    const { data } = await Axios.post('/api/websignin', { userName, password })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    console.log(data);
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const signup = (name, userName, type,isSuperAdmin, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, userName,type, isSuperAdmin, password } });
  try {
    const { data } = await Axios.post("/api/signup", { name, userName, type,isSuperAdmin, password });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
}

export { signin, signup, listUser, deleteUser, updateUser, listProfile };