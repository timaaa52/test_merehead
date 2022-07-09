import { all, call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../api/API'
import { action_types } from '../actions/actionsConst'
import {
	createUserType,
	deleteUserType,
	setUsers,
	updateUserType,
} from '../actions/appActions'

export function* getUsers(): any {
	const data = yield call(api.getUsers)
	yield put(setUsers(data))
}

const getUser = (state: any) => state

export function* createUser(action: createUserType) {
	yield call(
		api.createUser,
		action.payload.name,
		action.payload.surname,
		action.payload.descr
	)
	yield call(getUsers)
}

export function* deleteUser(action: deleteUserType): any {
	yield call(api.deleteUser, action.payload.id)
}

export function* updateUser(action: updateUserType) {
	yield call(
		api.updateUser,
		action.payload.id,
		action.payload.name,
		action.payload.surname,
		action.payload.desc
	)
}

export function* watcherGetUsers() {
	yield takeEvery(action_types.GET_USERS, getUsers)
}

export function* watcherCreateUser() {
	yield takeEvery(action_types.CREATE_USER, createUser)
}

export function* watcherDeleteUser() {
	yield takeEvery(action_types.DELETE_USER, deleteUser)
}

export function* watcherUpdateUser() {
	yield takeEvery(action_types.UPDATE_USER, updateUser)
}

export function* rootSaga() {
	yield all([
		watcherDeleteUser(),
		watcherGetUsers(),
		watcherUpdateUser(),
		watcherCreateUser(),
	])
}
