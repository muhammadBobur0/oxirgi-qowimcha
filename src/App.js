import './App.css';
import { UseAuth } from './hook/useAuth';
import { Privatehome } from './pages/home';
import Login from './pages/login';

function App() {
	const { token } = UseAuth();

	if (token) {
		return <Privatehome />;
	} else {
		return <Login />;
	}
}

export default App;
