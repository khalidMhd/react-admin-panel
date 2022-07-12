import {
    ADD_CHECKLIST_FAIL,
    ADD_CHECKLIST_REQUEST,
    ADD_CHECKLIST_SUCCESS,
    CHECKLIST_LIST_FAIL,
    CHECKLIST_LIST_REQUEST,
    CHECKLIST_LIST_SUCCESS,
    LOCATIONUPDATES_LIST_FAIL,
    LOCATIONUPDATES_LIST_REQUEST,
    LOCATIONUPDATES_LIST_SUCCESS,
    USERDETAILS_LIST_FAIL,
    USERDETAILS_LIST_REQUEST,
    USERDETAILS_LIST_SUCCESS,
    USERROSTER_LIST_BYID_FAIL,
    USERROSTER_LIST_BYID_REQUEST,
    USERROSTER_LIST_BYID_SUCCESS,
    USERROSTER_LIST_FAIL,
    USERROSTER_LIST_REQUEST,
    USERROSTER_LIST_SUCCESS,
} from "../contant/UserDetails";
import Axios from "axios";
import Cookie from 'js-cookie'

const userInfo = Cookie.getJSON("userInfo") || null
if (userInfo) {
  console.log('userInfo', userInfo.token);
  Axios.defaults.headers.common.Authorization = userInfo?.token
}

//USER ROSTER
const listUserRosterById = (id) => async (dispatch) => {
    try {
        dispatch({ type: USERROSTER_LIST_BYID_REQUEST, payload:{id} })
        const { data } = await Axios.get('/api/user-roster/'+id)
        dispatch({ type: USERROSTER_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USERROSTER_LIST_BYID_FAIL, payload: error.message })
    }
}

const listUserRoster = () => async (dispatch) => {
    try {
        dispatch({ type: USERROSTER_LIST_REQUEST })
        const { data } = await Axios.get('/api/user-roster')
        dispatch({ type: USERROSTER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USERROSTER_LIST_FAIL, payload: error.message })
    }
}

const AddChecklist = ( details, checklist, userId) => async (dispatch) => {
    dispatch({ type: ADD_CHECKLIST_REQUEST, payload: {details, checklist } })
    try {
      const { data } = await Axios.post('/api/userdetails', {details, checklist })
      if (data) {
          const checkListId = data._id
          const lat = "0"
          const lng = "0"
          await Axios.post('/api/userInfo', {userId, checkListId, lat, lng })
          window.location.href = "/check-list"

      }
      dispatch({ type: ADD_CHECKLIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_CHECKLIST_FAIL, payload: error.message });
    }
}

const listUserDetails = () => async (dispatch) => {
    try {
        dispatch({ type: USERDETAILS_LIST_REQUEST })
        const { data } = await Axios.get('/api/userInfo')
        dispatch({ type: USERDETAILS_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USERDETAILS_LIST_FAIL, payload: error.message })
    }
}

const checkList = (id) => async (dispatch) => {
    try {
        dispatch({ type: CHECKLIST_LIST_REQUEST, payload:id })
        const { data } = await Axios.get('/api/userInfo/'+id)
        console.log('action:', data);
        dispatch({ type: CHECKLIST_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: CHECKLIST_LIST_FAIL, payload: error.message })
    }
}

const listLocationUpdates = () => async (dispatch) => {
    try {
        dispatch({ type: LOCATIONUPDATES_LIST_REQUEST })
        const { data } = await Axios.get('/api/locationUpdates')
        dispatch({ type: LOCATIONUPDATES_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOCATIONUPDATES_LIST_FAIL, payload: error.message })
    }
}

export { listUserDetails,checkList, listLocationUpdates, AddChecklist, listUserRoster, listUserRosterById}
