import { action_types } from '../actions/actionsConst'
import { GeneralType } from '../actions/appActions'

export type user = {
	_id: string
	name: string
	surname: string
	desc: string
	user_id: number
	__v: number
}

export type initialStateType = {
	users: Array<user>
}

const initialState = {
	users: [],
}

export const appReducer = (
	state: initialStateType = initialState,
	action: GeneralType
) => {
	switch (action.type) {
		case action_types.SET_USERS: {
			return {
				...state,
				users: [...action.payload.users],
			}
		}
		case action_types.DELETE_USER: {
			return {
				...state,
				users: state.users.filter(el => el.user_id !== action.payload.id),
			}
		}
		default:
			return state
	}
}
