import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { Assignment, Description, Person } from '@mui/icons-material'

const DefaultLayout = () => {
	const location = useLocation()
	const hideNav = location.pathname === '/' || location.pathname === '/home'
	const isActive = (path) => location.pathname === path

	const getStep = () => {
		switch (location.pathname) {
			case '/datosbasicos':
				return 1
			case '/datoscausa':
				return 2
			case '/encuesta':
				return 3
			default:
				return 1
		}
	}

	const getProgressWidth = () => {
		switch (getStep()) {
			case 1:
				return 'w-1/3'
			case 2:
				return 'w-2/3'
			case 3:
				return 'w-full'
			default:
				return 'w-1/3'
		}
	}
	return (
		<Box sx={{ position: 'relative', p: 8 }}>
			<Box className="flex bg-gray-100">
				<Box className="w-64 bg-blue-700 text-white p-6">
					<Box className="mb-8">
						<img src="src/assets/images/logo-dpp.png" alt="Defensoría Logo" />
						<h2 className="text-xl font-bold mt-4">Defensoría</h2>
						<p className="text-xs">Sin defensa no hay Justicia</p>
					</Box>
					{!hideNav && (
						<>
							<nav>
								<ul className="space-y-4">
									<li
										className={`flex items-center space-x-2 ${
											isActive('/datosbasicos') ? 'font-bold' : ''
										}`}
									>
										<Person />
										<span>Antecedentes personales</span>
									</li>
									<li
										className={`flex items-center space-x-2 ${
											isActive('/datoscausa') ? 'font-bold' : ''
										}`}
									>
										<Description />
										<span>Antecedentes del requerimiento</span>
									</li>
									<li
										className={`flex items-center space-x-2 ${
											isActive('/encuesta') ? 'font-bold' : ''
										}`}
									>
										<Assignment />
										<span>Evalúe nuestra atención</span>
									</li>
								</ul>
							</nav>
							<Box className="mt-auto">
								<Box className="bg-blue-600 h-2 w-full rounded-full mt-8">
									<Box
										className={`bg-blue-400 h-full rounded-full ${getProgressWidth()}`}
									></Box>
								</Box>
								<p className="text-sm mt-2">Paso {getStep()} de 3</p>
							</Box>
						</>
					)}
				</Box>
				{/* Main content */}
				<Container maxWidth={'xl'} sx={{ p: 4 }}>
					<Box className="flex-1">
						<Outlet />
					</Box>
				</Container>
			</Box>
		</Box>
	)
}

export default DefaultLayout
