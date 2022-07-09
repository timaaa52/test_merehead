import { useEffect, useState } from 'react';
import { Container, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Header } from './components/Header';
import { UserCard } from './components/User/Users';
import { createUser, deleteUser, getUsers, updateUser } from './redux/actions/appActions'
import { rootReducerType } from './redux/reducers';
import { user } from './redux/reducers/appReduce';


export default function App() {

	useEffect(() => {
		dispatch(getUsers())
	}, [])

	const users = useSelector<rootReducerType, user[]>(state => state.app.users)
	const dispatch = useDispatch();
	const [page, setPage] = useState(1)

	const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
		setPage(page)
	}

	const slicedUsers = (page: number) => {
		let count = page * 5
		return users.slice(count - 5, count).map((el: user) => {
			return <UserCard key={el._id} name={el.name} surname={el.surname} descr={el.desc} id={el.user_id} />
		})
	}

	return (
		<div className='App'>
			<Header />
			<Container>
				<button
					onClick={() => dispatch(getUsers())}
				>
					Get Users
				</button>
				<button
					onClick={() => dispatch(deleteUser(383))}
				>Delete</button>
				<button
					onClick={() => dispatch(updateUser(384, 'Jackkk', 'Vorobei', 'Hello world'))}
				>Update</button>
				<button
					onClick={() => dispatch(createUser('Petya', 'Kyrockin', 'Vsem Privet'))}
				>
					create
				</button>
				<div className='users_block'>
					{
						users && slicedUsers(page)
					}
				</div>
				<div className='pagination'>
					<Pagination count={Math.ceil(users.length / 5)}
						onChange={changePage}
						page={page} variant="outlined"
						shape="rounded"
					/>
				</div>
			</Container>
		</div>
	)
}
