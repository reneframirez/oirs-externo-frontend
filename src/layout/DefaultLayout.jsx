import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { Assignment, Description, Person } from '@mui/icons-material'

const DefaultLayout = () => {
	const location = useLocation()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // Detectar si es una pantalla pequeña (móvil)
	const hideNav = location.pathname === '/' || location.pathname === '/home'

	const isActive = (path) => location.pathname === path

	const getStep = () => {
		switch (location.pathname) {
			case '/datos-basicos':
				return 1
			case '/datos-causa':
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
				return '33%'
			case 2:
				return '66%'
			case 3:
				return '100%'
			default:
				return '33%'
		}
	}

	return (
		<Box
			sx={{
				position: 'relative',
				p: { xs: 2, md: 8 },
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					bgcolor: 'grey.100',
					flexDirection: isMobile ? 'column' : 'row',
				}}
			>
				{/* Sidebar for large screens, Top navigation for mobile */}
				{!hideNav && (
					<Box
						sx={{
							width: isMobile ? '100%' : '250px', // Barra lateral en pantallas grandes y superior en móviles
							bgcolor: 'primary.main',
							color: 'white',
							p: 3,
							display: 'flex',
							flexDirection: 'column', // Columna en todas las pantallas
							alignItems: 'center',
						}}
					>
						{/* Logo */}
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								mb: isMobile ? 2 : 8,
							}}
						>
							<img
								src="src/assets/images/logo-dpp.png"
								alt="Defensoría Logo"
								style={{ width: isMobile ? '140px' : '80%' }}
							/>
						</Box>

						{/* Navigation Icons in mobile or full text menu in desktop */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 2,
								width: '100%',
								mt: isMobile ? 2 : 0,
							}}
						>
							{isMobile ? (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-around',
										width: '100%',
									}}
								>
									<IconButton
										sx={{
											color: isActive('/datos-basicos')
												? 'secondary.main'
												: 'white',
										}}
									>
										<Person />
									</IconButton>
									<IconButton
										sx={{
											color: isActive('/datos-causa')
												? 'secondary.main'
												: 'white',
										}}
									>
										<Description />
									</IconButton>
									<IconButton
										sx={{
											color: isActive('/encuesta')
												? 'secondary.main'
												: 'white',
										}}
									>
										<Assignment />
									</IconButton>
								</Box>
							) : (
								<nav>
									<ul
										style={{
											listStyleType: 'none',
											padding: 0,
											textAlign: 'left',
										}}
									>
										<li
											style={{
												marginBottom: '16px',
												fontWeight: isActive('/datos-basicos')
													? 'bold'
													: 'normal',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<Person style={{ marginRight: '8px' }} />
											Antecedentes personales
										</li>
										<li
											style={{
												marginBottom: '16px',
												fontWeight: isActive('/datos-causa')
													? 'bold'
													: 'normal',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<Description style={{ marginRight: '8px' }} />
											Antecedentes del requerimiento
										</li>
										<li
											style={{
												fontWeight: isActive('/encuesta')
													? 'bold'
													: 'normal',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<Assignment style={{ marginRight: '8px' }} />
											Evalúe nuestra atención
										</li>
									</ul>
								</nav>
							)}
						</Box>

						{/* Progress Bar for large screens */}
						{!isMobile && (
							<Box sx={{ mt: 'auto', width: '100%' }}>
								<Box sx={{ bgcolor: 'primary.dark', height: 8, borderRadius: 1 }}>
									<Box
										sx={{
											bgcolor: 'secondary.main',
											height: '100%',
											width: getProgressWidth(),
											borderRadius: 1,
										}}
									></Box>
								</Box>
								<Typography variant="body2" mt={2}>
									Paso {getStep()} de 3
								</Typography>
							</Box>
						)}
					</Box>
				)}

				{/* Main content */}
				<Container maxWidth={'xl'} sx={{ p: { xs: 2, md: 4 }, flexGrow: 1 }}>
					<Outlet />
				</Container>

				{/* Progress Bar for small screens */}
				{isMobile && (
					<Box
						sx={{
							width: '100%',
							p: 2,
							bgcolor: 'primary.dark',
							borderRadius: 1,
							mt: 'auto',
						}}
					>
						<Box
							sx={{
								bgcolor: 'secondary.main',
								height: 8,
								width: getProgressWidth(),
								borderRadius: 1,
							}}
						></Box>
						<Typography variant="body2" mt={1} color="white" align="center">
							Paso {getStep()} de 3
						</Typography>
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default DefaultLayout
