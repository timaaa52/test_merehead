import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContainer } from './components/UserContainer/UserContainer';
import { UserCreateForm } from './components/CreateUser/CreateUser';
import { Header } from './components/Header';


export default function App() {

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path={'/'} element={<Navigate to={'/users'} />} />
				<Route path={'/users'} element={<UserContainer />} />
				<Route path={'/createUser'} element={<UserCreateForm />} />

			</Routes>
		</div>
	)
}
