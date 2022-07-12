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
    USERROSTER_LIST_SUCCESS
} from "../contant/UserDetails"

// user roster

function UserRosterListReducer(state = { userRoster: [] }, action) {
    switch (action.type) {
        case USERROSTER_LIST_REQUEST:
            return { loading: true, userRoster: [] }

        case USERROSTER_LIST_SUCCESS:
            return { loading: false, userRoster: action.payload }

        case USERROSTER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

function UserRosterListByIdReducer(state = { userRoster: {} }, action) {
    switch (action.type) {
        case USERROSTER_LIST_BYID_REQUEST:
            return { loading: true, userRoster: {} }

        case USERROSTER_LIST_BYID_SUCCESS:
            return { loading: false, userRoster: action.payload }

        case USERROSTER_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

function AddChecklistReducer(state = [], action) {
    switch (action.type) {
        case ADD_CHECKLIST_REQUEST:
            return { loading: true }
        case ADD_CHECKLIST_SUCCESS:
            return { loading: false, success: true, addchecklistInfo: action.payload }
        case ADD_CHECKLIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}


function UserDetailsListReducer(state = { userDetails: [] }, action) {
    switch (action.type) {
        case USERDETAILS_LIST_REQUEST:
            return { loading: true, userDetails: [] }

        case USERDETAILS_LIST_SUCCESS:
            return { loading: false, userDetails: action.payload }

        case USERDETAILS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

function checkListREducer(state = { checkListData: [] }, action) {
    switch (action.type) {
        case CHECKLIST_LIST_REQUEST:
            return { loading: true, checkListData: [] }

        case CHECKLIST_LIST_SUCCESS:
            return { loading: false, checkListData: action.payload }

        case CHECKLIST_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function LocationUpdatesREducer(state = { location: [] }, action) {
    switch (action.type) {
        case LOCATIONUPDATES_LIST_REQUEST:
            return { loading: true, location: [] }

        case LOCATIONUPDATES_LIST_SUCCESS:
            return { loading: false, location: action.payload }

        case LOCATIONUPDATES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export {UserDetailsListReducer, checkListREducer, LocationUpdatesREducer, AddChecklistReducer, UserRosterListReducer, UserRosterListByIdReducer}