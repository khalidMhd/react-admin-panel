import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,
    USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, 
    USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, 
    USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL, 
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, 
    PROFILE_LIST_REQUEST, PROFILE_LIST_SUCCESS, PROFILE_LIST_FAIL,
} from "../contant/auth";

function UserReducer(state = { user: [] }, action) {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true, user: [] }

        case USER_LIST_SUCCESS:
            return { loading: false, user: action.payload }

        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

function ProfileReducer(state = { userDetails: {} }, action) {
    switch (action.type) {
        case PROFILE_LIST_REQUEST:
            return { loading: true, profile: {} }

        case PROFILE_LIST_SUCCESS:
            return { loading: false, profile: action.payload }

        case PROFILE_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

function userDeleteReducer(state={}, action) {
    switch (action.type) {
      case USER_DELETE_REQUEST:
        return { loading: true };
      case USER_DELETE_SUCCESS:
        return { loading: false,success: true, UserDelete: action.payload };
      case USER_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function userUpdateReducer(state={userUpdateData:{}}, action){
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return {loading:true}
        case USER_UPDATE_SUCCESS:
            return {loading:false,success:true, userUpdateData: action.paload}
        case USER_UPDATE_FAIL:
            return {loading:false, error: action.paload}
        default:
           return state
    }
}

function signinReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true }
        case USER_SIGNIN_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        // case USER_LOGOUT:
        //     return {};
        default: return state;
    }
}

function signupReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        default: return state
    }
}

export { signinReducer, signupReducer, UserReducer, userDeleteReducer, userUpdateReducer, ProfileReducer };