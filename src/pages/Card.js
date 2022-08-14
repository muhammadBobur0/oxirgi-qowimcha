import axios from 'axios';
import { useEffect, useState } from 'react';
import Users from '../components/users';

export const Card = () => {
	const [array, setArray] = useState([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/carts')
			.then(function (response) {
				setArray(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<>
			<h1>Card page</h1>
			<div className='d-flex'>
				{array.length &&
					array?.map((el) => {
						return <Users key={el.id} data={el} />;
					})}
			</div>
		</>
	);
};
