// src/App.jsx
import { useSesionExpiradaCheck } from './utils/SesionExpiradaProvider';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout.jsx';

import SolicitudCiudadanaExterna from './pages/oirs/solicitud-ciudadana-externa/index.jsx';
import SolicitudCiudadanaFuncionario from './pages/oirs/solicitud-ciudadana-funcionario/index.jsx';
import Oirs from './pages/Inicio.jsx';
import DatosBasicos from './pages/oirs/solicitud-ciudadana-externa/DatosBasicos.jsx';
import DatosCausa from './pages/oirs/solicitud-ciudadana-externa/DatosCausa.jsx';
import Encuesta from './pages/oirs/solicitud-ciudadana-externa/Encuesta.jsx';
import Inicio from './pages/Inicio.jsx';
import IngresoSolicitudInterno from './pages/oirs/solicitud-ciudadana-funcionario/ingreso-solicitud/index.jsx';
import SolicitudesPendientes from './pages/oirs/solicitud-ciudadana-funcionario/SolicitudesPendientes.jsx';
import SeccionesOrdenadas from './pages/oirs/solicitud-ciudadana-funcionario/secciones/Index.jsx';
import Tipificaciones from './pages/oirs/solicitud-ciudadana-funcionario/tipificacion/index.jsx';
import Busqueda from './pages/oirs/busqueda';
import DerivarRespuesta from './pages/oirs/solicitud-ciudadana-funcionario/derivar-respuesta';
import EntrevistaBeneficiario from './pages/oirs/solicitud-ciudadana-funcionario/entrevista-beneficiario'
import RespuestaDefensor from './pages/oirs/solicitud-ciudadana-funcionario/respuesta-defensor';
import GenerarRespuesta from './pages/oirs/solicitud-ciudadana-funcionario/generar-respuesta';
<<<<<<< HEAD
import EmitirRespuesta  from './pages/oirs/solicitud-ciudadana-funcionario/emitir-respuesta';
=======
import NotificarRespuesta from './pages/oirs/solicitud-ciudadana-funcionario/notificar-respuesta';

>>>>>>> e1bbc3710ef8c4a3516c5c98a67a8d1d06d69d6b

function App() {
	useSesionExpiradaCheck();

	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/oirs" element={<DefaultLayout />}>
					<Route index element={<Oirs />} />
					<Route
						path="solicitud-ciudadana-externa"
						element={<SolicitudCiudadanaExterna />}
					>
						<Route path="datos-basicos" element={<DatosBasicos />} />
						<Route path="datos-causa" element={<DatosCausa />} />
						<Route path="encuesta" element={<Encuesta />} />
					</Route>
					<Route
						path="solicitud-ciudadana-funcionario"
						element={<SolicitudCiudadanaFuncionario />}
					>
						<Route
							path="ingreso-solicitud-interno"
							element={<IngresoSolicitudInterno />}
						/>
						<Route path="solicitudes-pendientes" element={<SolicitudesPendientes />} />
						<Route path="secciones" element={<SeccionesOrdenadas />} />
                        <Route path="tipificaciones" element ={<Tipificaciones/>} />
                        <Route path="busqueda" element={<Busqueda />} />
						<Route path="derivar-respuesta" element={<DerivarRespuesta />} />
						<Route path="entrevista-beneficiario" element={<EntrevistaBeneficiario />} />
                        <Route path="respuesta-defensor" element={<RespuestaDefensor />} />
                        <Route path="generar-respuesta" element= {<GenerarRespuesta/>} />
<<<<<<< HEAD
                        <Route path='emitir-respuesta' element= {<EmitirRespuesta />} />
=======
                        <Route path="notificar-respuesta" element= {<NotificarRespuesta/>} />
>>>>>>> e1bbc3710ef8c4a3516c5c98a67a8d1d06d69d6b
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
