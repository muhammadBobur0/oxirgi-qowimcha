import axios from 'axios';
import { useEffect, useState } from 'react';
import Iteam from '../components/Itean';

export const Users = () => {
	const [array, setArray] = useState([]);
	const [url, seturl] = useState('https://fakestoreapi.com/products');

	useEffect(() => {
		axios
			.get(url)
			.then(function (response) {
				setArray(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [url]);

	return (
		<>
			<h1>product</h1>
			<div>
				<select
					onChange={(evt) =>
						seturl(
							'https://fakestoreapi.com/products/category/' + evt.target.value,
						)
					}>
					<option defaultValue disabled>
						talang
					</option>
					<option value='jewelery'>jewelery</option>
					<option value='electronics'>electronics</option>
					<option value="men's clothing">men's clothing</option>
					<option value="women's clothing">women's clothing</option>
				</select>
			</div>
			<div className='d-flex'>
				{array.length &&
					array?.map((el) => {
						return <Iteam key={el.id} data={el} />;
					})}
			</div>
		</>
	);
};
