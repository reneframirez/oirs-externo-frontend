import { useSesionExpiradaCheck } from './utils/SesionExpiradaProvider'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout.jsx'
import Inicio from './pages/Inicio.jsx'
import "./assets/css/estilo.css"
import Home from './pages/home.jsx'; // Importa la nueva página

function App() {
	useSesionExpiradaCheck()

	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index element={<Inicio />} />
				 <Route path="/home" element={<Home />} />{Home.jsx}
			</Route>
		</Routes>
	)
}

export default App
