import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { AddChecklistReducer, checkListREducer, LocationUpdatesREducer, UserDetailsListReducer, UserRosterListByIdReducer, UserRosterListReducer } from '../reducer/UserDetails'
import {ProfileReducer, signinReducer, signupReducer, userDeleteReducer, UserReducer, userUpdateReducer} from '../reducer/auth'
import { addDistrictReducer, addTehsilReducer, addUcReducer, addVillageReducer, listDistrictReducer, listTehsilReducer, listUcReducer, listVillageReducer, updateDistrictReducer, updateTehsilReducer, updateUcReducer, updateVillageReducer } from '../reducer/places'
import { addQuestionReducer } from '../reducer/question'
import { backupReducer } from '../reducer/backup'
const userInfo = Cookie.getJSON("userInfo") || null

const initialState = {userSignin: { userInfo }, }
const reducer = combineReducers({
    userDetailList: UserDetailsListReducer,
    ckList:checkListREducer,
    userSignin:signinReducer,
    userSignup: signupReducer,
    registeredUser: UserReducer,
    locationUpdates: LocationUpdatesREducer,
    userDlt: userDeleteReducer,
    userUpd: userUpdateReducer,
    profileDetails: ProfileReducer,
    addChecklistRed: AddChecklistReducer,
    addDistrictReducer: addDistrictReducer,
    addTehsilReducer: addTehsilReducer,
    addUcReducer: addUcReducer,
    addVillageReducer: addVillageReducer,
    listDistrictRed: listDistrictReducer,
    listTehsilRed: listTehsilReducer,
    listUcRed: listUcReducer,
    listVillageRed: listVillageReducer,
    updDistrictRed: updateDistrictReducer,
    updTehsilREd: updateTehsilReducer,
    updUcRed: updateUcReducer,
    updVillageRed: updateVillageReducer,
    addQuestionRed: addQuestionReducer,
    backupReq: backupReducer,
    UserRosterListRed: UserRosterListReducer,
    UserRosterListByIdRed: UserRosterListByIdReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store