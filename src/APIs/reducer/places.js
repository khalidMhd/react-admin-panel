import { Switch } from "react-router";

const { ADD_DISTRICT_REQUEST, ADD_DISTRICT_SUCCESS, ADD_DISTRICT_FAIL, LIST_DISTRICT_REQUEST, LIST_DISTRICT_SUCCESS, LIST_DISTRICT_FAIL, ADD_TEHSIL_REQUEST, ADD_TEHSIL_SUCCESS, ADD_TEHSIL_FAIL, LIST_TEHSIL_REQUEST, LIST_TEHSIL_SUCCESS, LIST_TEHSIL_FAIL, ADD_UC_REQUEST, ADD_UC_SUCCESS, ADD_UC_FAIL, LIST_UC_REQUEST, LIST_UC_SUCCESS, LIST_UC_FAIL, ADD_VILLAGE_REQUEST, ADD_VILLAGE_SUCCESS, ADD_VILLAGE_FAIL, LIST_VILLAGE_REQUEST, LIST_VILLAGE_SUCCESS, LIST_VILLAGE_FAIL, UPDATE_DISTRICT_REQUEST, UPDATE_DISTRICT_SUCCESS, UPDATE_DISTRICT_FAIL, UPDATE_TEHSIL_REQUEST, UPDATE_TEHSIL_SUCCESS, UPDATE_TEHSIL_FAIL, UPDATE_UC_REQUEST, UPDATE_UC_SUCCESS, UPDATE_UC_FAIL, UPDATE_VILLAGE_REQUEST, UPDATE_VILLAGE_SUCCESS, UPDATE_VILLAGE_FAIL } = require("../contant/places");

function addDistrictReducer(state = {addDistictInfo:{} }, action) {
    switch (action.type) {
        case ADD_DISTRICT_REQUEST: 
        return { addDistrictLoading: true }
        case ADD_DISTRICT_SUCCESS: 
        return {addDistrictLoading:false, addDistrictSuccess:true, addDistictInfo: action.paload}
        case ADD_DISTRICT_FAIL: 
        return { addDistrictLoading: false, addDistrictError: action.payload }
        default: 
        return state
    }
}

function addTehsilReducer(state = {addTehsilInfo:{} }, action) {
    switch (action.type) {
        case ADD_TEHSIL_REQUEST: 
        return { addTehsilLoading: true }
        case ADD_TEHSIL_SUCCESS: 
        return {addTehsilLoading:false, addTehsilSuccess:true, addTehsilInfo: action.paload}
        case ADD_TEHSIL_FAIL: 
        return { addTehsilLoading: false, addTehsilError: action.payload }
        default: 
        return state
    }
}

function addUcReducer(state = {addUcInfo:{} }, action) {
    switch (action.type) {
        case ADD_UC_REQUEST: 
        return { addUcLoading: true }
        case ADD_UC_SUCCESS: 
        return {addUcLoading:false, addUcSuccess:true, addUcInfo: action.paload}
        case ADD_UC_FAIL: 
        return { addUcLoading: false, addUcError: action.payload }
        default: 
        return state
    }
}

function addVillageReducer(state = {addVillageInfo:{} }, action) {
    switch (action.type) {
        case ADD_VILLAGE_REQUEST: 
        return { addVillageLoading: true }
        case ADD_VILLAGE_SUCCESS: 
        return {addVillageLoading:false, addVillageSuccess:true, addVillageInfo: action.paload}
        case ADD_VILLAGE_FAIL: 
        return { addVillageLoading: false, addVillageError: action.payload }
        default: 
        return state
    }
}

function listDistrictReducer(state={listDistrictInfo: []}, action) {
    switch(action.type) {
        case LIST_DISTRICT_REQUEST:
           return {listDistrictLoading: true, listDistrictInfo: []}
        case LIST_DISTRICT_SUCCESS:
            return {listDistrictLoading: false,listDistrictSuccess:true, listDistrictInfo: action.payload}
        case LIST_DISTRICT_FAIL:
            return {listDistrictLoading: false, listDistrictError: action.payload }
        default:
            return state
    }
}

function listTehsilReducer(state={listTehsilInfo: []}, action) {
    switch(action.type) {
        case LIST_TEHSIL_REQUEST:
           return {listTehsilLoading: true, listTehsilInfo: []}
        case LIST_TEHSIL_SUCCESS:
            return {listTehsilLoading: false,listTehsilSuccess:true, listTehsilInfo: action.payload}
        case LIST_TEHSIL_FAIL:
            return {listTehsilLoading: false, listTehsilError: action.payload }
        default:
            return state
    }
}

function listUcReducer(state={listUcInfo: []}, action) {
    switch(action.type) {
        case LIST_UC_REQUEST:
           return {listUcLoading: true, listUcInfo: []}
        case LIST_UC_SUCCESS:
            return {listUcLoading: false,listUcSuccess:true, listUcInfo: action.payload}
        case LIST_UC_FAIL:
            return {listUcLoading: false, listUcError: action.payload }
        default:
            return state
    }
}

function listVillageReducer(state={listVillageInfo: []}, action) {
    switch(action.type) {
        case LIST_VILLAGE_REQUEST:
           return {listVillageLoading: true, listVillageInfo: []}
        case LIST_VILLAGE_SUCCESS:
            return {listVillageLoading: false,listVillageSuccess:true, listVillageInfo: action.payload}
        case LIST_VILLAGE_FAIL:
            return {listVillageLoading: false, listVillageError: action.payload }
        default:
            return state
    }
}


function updateDistrictReducer(state = {updDistictInfo:{} }, action) {
    switch (action.type) {
        case UPDATE_DISTRICT_REQUEST: 
        return { upddDistrictLoading: true }
        case UPDATE_DISTRICT_SUCCESS: 
        return {upddDistrictLoading:false, updDistrictSuccess:true, updDistictInfo: action.paload}
        case UPDATE_DISTRICT_FAIL: 
        return { upddDistrictLoading: false, updDistrictError: action.payload }
        default: 
        return state
    }
}

function updateTehsilReducer(state = {updTehsilInfo:{} }, action) {
    switch (action.type) {
        case UPDATE_TEHSIL_REQUEST: 
        return { updTehsilLoading: true }
        case UPDATE_TEHSIL_SUCCESS: 
        return {updTehsilLoading:false, updTehsilSuccess:true, updTehsilInfo: action.paload}
        case UPDATE_TEHSIL_FAIL: 
        return { updTehsilLoading: false, updTehsilError: action.payload }
        default: 
        return state
    }
}

function updateUcReducer(state = {updUcInfo:{} }, action) {
    switch (action.type) {
        case UPDATE_UC_REQUEST: 
        return { updUcLoading: true }
        case UPDATE_UC_SUCCESS: 
        return {updUcLoading:false, updUcSuccess:true, updUcInfo: action.paload}
        case UPDATE_UC_FAIL: 
        return { updUcLoading: false, updUcError: action.payload }
        default: 
        return state
    }
}
function updateVillageReducer(state = {updVillageInfo:{} }, action) {
    switch (action.type) {
        case UPDATE_VILLAGE_REQUEST: 
        return { updVillageLoading: true }
        case UPDATE_VILLAGE_SUCCESS: 
        return {updVillageLoading:false, updVillageSuccess:true, updVillageInfo: action.paload}
        case UPDATE_VILLAGE_FAIL: 
        return { updVillageLoading: false, updVillageError: action.payload }
        default: 
        return state
    }
}

export {
        addDistrictReducer, addTehsilReducer, addUcReducer, listDistrictReducer,
        listVillageReducer, listTehsilReducer, listUcReducer, addVillageReducer, 
        updateDistrictReducer, updateTehsilReducer, updateUcReducer, updateVillageReducer 
    }