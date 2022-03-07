import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCompanies(action) {
    console.log('in fetchCompanies')

    try {
        // console.log(action.payload + ":")
        const search = encodeURI(action.payload)
        const results = yield axios.get(`/api/companies/${search}`);
        // console.log(results.data);
        yield put({
            type: "SET_COMPANIES",
            payload: results.data
        })

    }
    catch (err) {
        console.error("err in get /api/companies", err)
    }
}

function* fetchActiveCompany() {

    return null
}


function* companiesSaga() {
    yield takeLatest('FETCH_COMPANIES', fetchCompanies);
    yield takeLatest('FETCH_ACTIVE_COMPANY', fetchActiveCompany);
}

export default companiesSaga;
