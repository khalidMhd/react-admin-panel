const { default: axios } = require("axios");
const { ADD_DISTRICT_REQUEST, ADD_DISTRICT_SUCCESS, ADD_DISTRICT_FAIL, LIST_DISTRICT_REQUEST, LIST_DISTRICT_SUCCESS, LIST_DISTRICT_FAIL, ADD_TEHSIL_REQUEST, ADD_TEHSIL_SUCCESS, ADD_TEHSIL_FAIL, LIST_TEHSIL_REQUEST, LIST_TEHSIL_SUCCESS, LIST_TEHSIL_FAIL, ADD_UC_REQUEST, ADD_UC_SUCCESS, ADD_UC_FAIL, LIST_UC_REQUEST, LIST_UC_SUCCESS, LIST_UC_FAIL, ADD_VILLAGE_REQUEST, ADD_VILLAGE_SUCCESS, ADD_VILLAGE_FAIL, LIST_VILLAGE_REQUEST, LIST_VILLAGE_SUCCESS, LIST_VILLAGE_FAIL, DElETE_DISTRICT_REQUEST, DElETE_DISTRICT_SUCCESS, DElETE_DISTRICT_FAIL, DElETE_TEHSIL_REQUEST, DElETE_TEHSIL_SUCCESS, DElETE_TEHSIL_FAIL, DElETE_VILLAGE_FAIL, DElETE_VILLAGE_SUCCESS, DElETE_VILLAGE_REQUEST, DElETE_UC_REQUEST, DElETE_UC_SUCCESS, DElETE_UC_FAIL, UPDATE_VILLAGE_REQUEST, UPDATE_DISTRICT_REQUEST, UPDATE_DISTRICT_FAIL, UPDATE_DISTRICT_SUCCESS, UPDATE_TEHSIL_REQUEST, UPDATE_TEHSIL_SUCCESS, UPDATE_TEHSIL_FAIL, UPDATE_UC_REQUEST, UPDATE_UC_SUCCESS, UPDATE_UC_FAIL, UPDATE_VILLAGE_SUCCESS, UPDATE_VILLAGE_FAIL } = require("../contant/places");



const addDistrict = (district) => async (dispatch) => {
    try {
        dispatch({type: ADD_DISTRICT_REQUEST, payload: {district}})
        const {data} = await axios.post('/api/district', {district})
        if (data) {
        window.location.reload()
        }
        dispatch({type: ADD_DISTRICT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADD_DISTRICT_FAIL, payload:error.message})
    }
};

const addTehsil = (districtId,tehsil) => async (dispatch) => {
    try {
        dispatch({type: ADD_TEHSIL_REQUEST, payload: {districtId, tehsil}})
        const {data} = await axios.post('/api/tehsil', {districtId, tehsil})
        if (data) {
        window.location.reload()
        }
        dispatch({type: ADD_TEHSIL_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADD_TEHSIL_FAIL, payload:error.message})
    }
};

const addUc = (tehsilId, uc) => async (dispatch) => {
    try {
        dispatch({type: ADD_UC_REQUEST, payload: {tehsilId, uc}})
        const {data} = await axios.post('/api/uc', {tehsilId, uc})
        if (data) {
        window.location.reload()
        }
        dispatch({type: ADD_UC_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADD_UC_FAIL, payload:error.message})
    }
};

const addVillage = (ucId, village) => async (dispatch) => {
    try {
        dispatch({type: ADD_VILLAGE_REQUEST, payload: {ucId, village}})
        const {data} = await axios.post('/api/village', {ucId, village})
        if (data) {
        window.location.reload()
        }
        dispatch({type: ADD_VILLAGE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ADD_VILLAGE_FAIL, payload:error.message})
    }
};

const listDistrict = () => async (dispatch) => {
    try {
        dispatch({type: LIST_DISTRICT_REQUEST})
        const {data} = await axios.get("/api/district")
        dispatch({type: LIST_DISTRICT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:LIST_DISTRICT_FAIL, payload: error.message})
    }
}

const listTehsil = () => async (dispatch) => {
    try {
        dispatch({type: LIST_TEHSIL_REQUEST})
        const {data} = await axios.get("/api/tehsil")
        dispatch({type: LIST_TEHSIL_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:LIST_TEHSIL_FAIL, payload: error.message})
    }
}

const listUc = () => async (dispatch) => {
    try {
        dispatch({type: LIST_UC_REQUEST})
        const {data} = await axios.get("/api/uc")
        dispatch({type: LIST_UC_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:LIST_UC_FAIL, payload: error.message})
    }
}

const listVillage = () => async (dispatch) => {
    try {
        dispatch({type: LIST_VILLAGE_REQUEST})
        const {data} = await axios.get("/api/village")
        dispatch({type: LIST_VILLAGE_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:LIST_VILLAGE_FAIL, payload: error.message})
    }
}

const deleteDistrict = (districtId) => async (dispatch) => {
    try {
        dispatch({type: DElETE_DISTRICT_REQUEST, payload: {districtId}})
        const {data} = await axios.delete("/api/district/"+ districtId)
        dispatch({type: DElETE_DISTRICT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:DElETE_DISTRICT_FAIL, payload: error.message})
    }
}

const deleteTehsil = (tehsilId) => async (dispatch) => {
    try {
        dispatch({type: DElETE_TEHSIL_REQUEST, payload: {tehsilId}})
        const {data} = await axios.delete("/api/tehsil/"+ tehsilId)
        dispatch({type: DElETE_TEHSIL_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:DElETE_TEHSIL_FAIL, payload: error.message})
    }
}

const deleteUc = (ucId) => async (dispatch) => {
    try {
        dispatch({type: DElETE_UC_REQUEST, payload: {ucId}})
        const {data} = await axios.delete("/api/uc/"+ ucId)
        dispatch({type: DElETE_UC_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:DElETE_UC_FAIL, payload: error.message})
    }
}

const deleteVillage = (villageId) => async (dispatch) => {
    try {
        dispatch({type: DElETE_VILLAGE_REQUEST, payload: {villageId}})
        const {data} = await axios.delete("/api/village/"+ villageId)
        dispatch({type: DElETE_VILLAGE_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:DElETE_VILLAGE_FAIL, payload: error.message})
    }
}

const updateDistrict = (districtId, district) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_DISTRICT_REQUEST, payload: {districtId, district}})
        const {data} = await axios.put("/api/district/"+ districtId, { district})
        if (data) {
        window.location.reload()
        }
        dispatch({type: UPDATE_DISTRICT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:UPDATE_DISTRICT_FAIL, payload: error.message})
    }
}

const updateTehsil = (tehsilId ,districtId, tehsil) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_TEHSIL_REQUEST, payload: {tehsilId, districtId, tehsil}})
        const {data} = await axios.put("/api/tehsil/"+tehsilId , {districtId, tehsil})
        if (data) {
        window.location.reload()
        }
        dispatch({type: UPDATE_TEHSIL_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:UPDATE_TEHSIL_FAIL, payload: error.message})
    }
}

const updateUc = (ucId ,tehsilId, uc) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_UC_REQUEST, payload: {ucId,tehsilId, uc}})
        const {data} = await axios.put("/api/uc/"+ ucId, {tehsilId, uc})
        if (data) {
        window.location.reload()
        }
        dispatch({type: UPDATE_UC_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:UPDATE_UC_FAIL, payload: error.message})
    }
}

const updateVillage = (villageId, ucId, village) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_VILLAGE_REQUEST, payload: {villageId,ucId, village}})
        const {data} = await axios.put("/api/village/"+ villageId, {ucId, village})
        if (data) {
        window.location.reload()
        }
        dispatch({type: UPDATE_VILLAGE_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:UPDATE_VILLAGE_FAIL, payload: error.message})
    }
}

export {
        addDistrict, listDistrict, addTehsil, listTehsil, addUc, listUc, addVillage, 
        listVillage, deleteVillage, deleteDistrict, deleteTehsil, deleteUc, updateDistrict,
        updateTehsil, updateUc, updateVillage
    }