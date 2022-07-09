import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://23.88.43.148/',
})

export const api = {
	getUsers: async () => {
		const data = await instance.get('users').then(res => res.data)
		return data
	},
	createUser: async (name: string, surname: string, desc: string) => {
		const user = await instance.post('users', { name, surname, desc })
	},
	deleteUser: async (id: number) => {
		const removeUser = await instance.delete(`user/${id}`)
	},
	updateUser: async (
		id: number,
		name?: string,
		surname?: string,
		desc?: string
	) => {
		const updateUser = await instance.put(`user/${id}`, { name, surname, desc })
	},
}
