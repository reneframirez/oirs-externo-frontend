// src/App.jsx
import { useSesionExpiradaCheck } from './utils/SesionExpiradaProvider'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout.jsx'
import Inicio from './pages/Inicio.jsx'
import Home from './pages/home.jsx'
import DatosBasicos from './pages/DatosBasicos.jsx'
import DatosCausa from './pages/DatosCausa.jsx'
import Encuesta from './pages/Encuesta.jsx'
import SolicitudesPendientes from './pages/SolicitudesPendientes.jsx'
import IngresoSolicitudInterno from './pages/IngresoSolicitudInterno.jsx'

function App() {
	useSesionExpiradaCheck()

	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index element={<Inicio />} />
				<Route path="/home" element={<Home />} />
				<Route path="/datos-basicos" element={<DatosBasicos />} />
				<Route path="/datos-causa" element={<DatosCausa />} />
				<Route path="/encuesta" element={<Encuesta />} />
				<Route path="/solicitudes-pendientes" element={<SolicitudesPendientes />} />
				<Route path="/ingreso-solicitud-interno" element={<IngresoSolicitudInterno />} />
			</Route>
		</Routes>
	)
}

export default App
