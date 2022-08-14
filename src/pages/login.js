import axios from 'axios';
import { useRef } from 'react';
import { UseAuth } from '../hook/useAuth';

const Login = () => {
	const { setToken } = UseAuth();
	const email = useRef();
	const password = useRef();

	const HandleForm = () => {
		axios
			.post('https://reqres.in/api/login', {
				email: email.current.value,
				password: password.current.value,
			})
			.then(function (response) {
				setToken(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					HandleForm();
				}}>
				<input ref={email} type='email' />
				<input ref={password} type='password' />
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};

export default Login;
