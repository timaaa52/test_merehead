import { user } from '../reducers/appReduce'
import { action_types } from './actionsConst'

export const getUsers = () => ({
	type: action_types.GET_USERS,
})

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<user>) =>
	({
		type: action_types.SET_USERS,
		payload: {
			users,
		},
	} as const)

export type createUserType = ReturnType<typeof createUser>
export const createUser = (name: string, surname: string, descr: string) =>
	({
		type: action_types.CREATE_USER,
		payload: {
			name,
			surname,
			descr,
		},
	} as const)

export type deleteUserType = ReturnType<typeof deleteUser>
export const deleteUser = (id: number) =>
	({
		type: action_types.DELETE_USER,
		payload: {
			id,
		},
	} as const)

export type updateUserType = ReturnType<typeof updateUser>
export const updateUser = (
	id: number,
	name?: string,
	surname?: string,
	desc?: string
) =>
	({
		type: action_types.UPDATE_USER,
		payload: {
			id,
			name,
			surname,
			desc,
		},
	} as const)

export type GeneralType =
	| setUsersType
	| createUserType
	| updateUserType
	| deleteUserType
