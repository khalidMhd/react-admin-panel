import Axios from "axios";
import Cookie from 'js-cookie'
import {
  DATABASE_BACKUP_REQUEST, DATABASE_BACKUP_SUCCESS, DATABASE_BACKUP_FAIL, 

} from "../contant/backup";

const userInfo = Cookie.getJSON("userInfo") || null
if (userInfo) {
  console.log('userInfo', userInfo.token);
  Axios.defaults.headers.common.Authorization = userInfo?.token
}

const backup = () => async (dispatch) => {
  try {
    dispatch({ type: DATABASE_BACKUP_REQUEST })
    const { data } = await Axios.get('/api/backup')
    dispatch({ type: DATABASE_BACKUP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: DATABASE_BACKUP_FAIL, payload: error.message })
  }
}


export { backup};