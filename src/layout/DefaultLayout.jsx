import { Outlet, useLocation, Link } from 'react-router-dom';
import {
	Box,
	IconButton,
	useMediaQuery,
	useTheme,
	Card,
	CardContent,
	Breadcrumbs,
	Typography,
} from '@mui/material';
import { Assignment, Description, Person } from '@mui/icons-material';

const DefaultLayout = () => {
	const location = useLocation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detectar si es una pantalla pequeña (móvil)

	// Lógica para ocultar el menú lateral
	const hideNav =
		location.pathname === '/' ||
		location.pathname === '/home' ||
		location.pathname === '/oirs' ||
		location.pathname.startsWith('/oirs/solicitud-ciudadana-funcionario'); // Ocultar si la ruta es oirs/solicitud-ciudadana-funcionario o sus hijos

	const isActive = (path) => location.pathname === path;

	// Función para crear los breadcrumbs
	const getBreadcrumbs = () => {
		const pathParts = location.pathname.split('/').filter(Boolean);
		const breadcrumbs = pathParts.map((part, index) => {
			const path = `/${pathParts.slice(0, index + 1).join('/')}`;
			return { label: part.replace(/-/g, ' '), path }; // Reemplazar guiones con espacios para mejorar la legibilidad
		});

		return breadcrumbs;
	};

	return (
		<Box
			sx={{
				position: 'relative',
				p: { xs: 2, md: 8 },
			}}
		>
			<Card variant="outlined" sx={{ flex: 1, width: '100%', margin: 0 }}>
				<CardContent sx={{ display: 'flex', height: '100%' }}>
					{/* Menú lateral */}
					{!hideNav && (
						<Box
							sx={{
								width: isMobile ? '100%' : '250px',
								bgcolor: 'primary.main',
								border: '1px solid primary.main',
								color: 'white',
								p: 3,
								display: 'flex',
								flexDirection: 'column',
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
									src="/img/logo-dpp.png"
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
									width: '100%',
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
												}}
											>
												<Assignment style={{ marginRight: '8px' }} />
												Evalúe nuestra atención
											</li>
										</ul>
									</nav>
								)}
							</Box>
						</Box>
					)}

					{/* Contenedor para Breadcrumbs y Main content */}
					<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
						{/* Breadcrumbs */}
						{hideNav && ( // Mostrar Breadcrumbs solo si el menú lateral está oculto
							<Box sx={{ mb: 2 }} pb={3}>
								<Breadcrumbs aria-label="breadcrumb">
									{getBreadcrumbs().map((breadcrumb, index) => (
										<Link key={index} to={breadcrumb.path}>
											<Typography color="text.primary">
												{breadcrumb.label}
											</Typography>
										</Link>
									))}
								</Breadcrumbs>
							</Box>
						)}

						{/* Main content */}
						<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
							<Outlet />
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default DefaultLayout;
