import { UseAuth } from '../hook/useAuth';
import { Link, Route, Routes } from 'react-router-dom';
import { Users } from './Users';
import { Card } from './Card';
export { Routes, Route } from 'react-router-dom';

export const Privatehome = () => {
	const { setToken } = UseAuth();

	return (
		<div>
			<div className='nav'>
				<Link className='link' to='/'>
					home
				</Link>
				<Link className='link' to='users'>
					product
				</Link>
				<Link className='link' to='card'>
					card
				</Link>
				<button onClick={() => setToken(null)}>log out</button>
			</div>

			<div>
				<Routes>
					<Route path='/' element={<h1>home page</h1>} />
					<Route path='users' element={<Users />} />
					<Route path='card' element={<Card />} />
				</Routes>
			</div>
		</div>
	);
};
