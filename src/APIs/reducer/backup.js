import { Switch } from "react-router";

const {  DATABASE_BACKUP_REQUEST, DATABASE_BACKUP_SUCCESS, DATABASE_BACKUP_FAIL, } = require("../contant/backup");
function backupReducer(state={backupRes: {}}, action) {
    switch(action.type) {
        case DATABASE_BACKUP_REQUEST:
           return {backupLoading: true, backupRes: {}}
        case DATABASE_BACKUP_SUCCESS:
            return {backupLoading: false, backupSuccess:true, backupRes: action.payload}
        case DATABASE_BACKUP_FAIL:
            return {backupLoading: false, backupError: action.payload }
        default:
            return state
    }
}


export {
         backupReducer
    }