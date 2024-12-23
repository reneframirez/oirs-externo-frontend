import React, { useState, useEffect } from 'react';
import {
	FormControl,
	InputLabel,
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	TablePagination,
	IconButton,
} from '@mui/material';
import { Eye as VisibilityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { FormSelect } from '../../../../../components/CustomSelect';
import { SearchButton, ClearFilterButton } from '../../../../../components/CustomButtons';
import { DateTextField } from '../../../../../components/CustomTextFields';

const initialData = [
	{
		id: 53078,
		region: 'Coquimbo',
		usuario: 'Ren Ram UII',
		fechaApelacion: '30-10-2024',
		fechaTope: '19-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Defensa no le informa de su causa',
	},
	{
		id: 52858,
		region: 'Coquimbo',
		usuario: 'RODRIGO FRANCISCO SALDIVAR AVALOS',
		fechaApelacion: '30-10-2024',
		fechaTope: '19-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Se solicita cambio de Defensor',
	},
	{
		id: 52789,
		region: 'Atacama',
		usuario: 'JUAN PEREZ GOMEZ',
		fechaApelacion: '01-11-2024',
		fechaTope: '20-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Se requiere revisión de pruebas',
	},
	{
		id: 52790,
		region: 'Antofagasta',
		usuario: 'MARIA LOPEZ PEREZ',
		fechaApelacion: '02-11-2024',
		fechaTope: '21-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Solicitud de cambio de defensor',
	},
	{
		id: 52791,
		region: 'Tarapacá',
		usuario: 'CARLOS SANCHEZ RAMIREZ',
		fechaApelacion: '03-11-2024',
		fechaTope: '22-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Defensa no presenta pruebas',
	},
	{
		id: 52792,
		region: 'Coquimbo',
		usuario: 'LUIS FERNANDO RODRIGUEZ',
		fechaApelacion: '04-11-2024',
		fechaTope: '23-10-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Retraso en la tramitación',
	},
	{
		id: 52793,
		region: 'Atacama',
		usuario: 'ANA PATRICIA MORALES',
		fechaApelacion: '05-11-2024',
		fechaTope: '24-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Revisión de medidas cautelares',
	},
	{
		id: 52794,
		region: 'Antofagasta',
		usuario: 'FERNANDO ALBERTO DIAZ',
		fechaApelacion: '06-11-2024',
		fechaTope: '25-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Solicitud de cambio de abogado',
	},
	{
		id: 52795,
		region: 'Tarapacá',
		usuario: 'MARTA CECILIA GONZALEZ',
		fechaApelacion: '07-11-2024',
		fechaTope: '26-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Defensor no asiste a la audiencia',
	},
	{
		id: 52796,
		region: 'Coquimbo',
		usuario: 'JOSE MANUEL HERRERA',
		fechaApelacion: '08-11-2024',
		fechaTope: '27-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Defensa no cumple con sus funciones',
	},
	{
		id: 52797,
		region: 'Atacama',
		usuario: 'CARMEN LUCIA VARGAS',
		fechaApelacion: '09-11-2024',
		fechaTope: '28-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Falta de comunicación con el defensor',
	},
	{
		id: 52798,
		region: 'Antofagasta',
		usuario: 'RAFAEL EDUARDO TORRES',
		fechaApelacion: '10-11-2024',
		fechaTope: '29-11-2024',
		quienApela: 'Beneficiario',
		requerimiento: 'Defensa no presenta pruebas en tiempo',
	},
];
const Container = styled(Box)({
	padding: '15px',
	backgroundColor: '#f9f9f9',
	borderRadius: '8px',
	width: '100%',
});

const BusquedaApelacionesVigentes = () => {
	const [region, setRegion] = useState('Todas');
	const [fechaInicio, setFechaInicio] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [page, setPage] = useState(0);
	const [filteredData, setFilteredData] = useState(initialData);

	const [regionOptions, setRegionOption] = useState([]);

	useEffect(() => {
		// Simulate fetching data
		const fetchData = () => {
			setRegionOption([
				{ value: 'Todas', label: 'Todas' },
				{ value: 'Tarapacá', label: 'Tarapacá' },
				{ value: 'Antofagasta', label: 'Antofagasta' },
				{ value: 'Atacama', label: 'Atacama' },
				{ value: 'Coquimbo', label: 'Coquimbo' },
			]);
		};

		fetchData();
	}, []);

	const handleLimpiarFiltro = () => {
		setRegion('Todas');
		setFechaInicio('');
		setFechaFin('');
		setFilteredData(initialData);
	};

	const handleSearch = () => {
		const filtered = initialData.filter((item) => {
			return (
				(region === 'Todas' || item.region === region) &&
				(!fechaInicio || new Date(item.fechaApelacion) >= new Date(fechaInicio)) &&
				(!fechaFin || new Date(item.fechaApelacion) <= new Date(fechaFin))
			);
		});
		setFilteredData(filtered);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					gap: '1rem',
					marginTop: '1rem',
					marginBottom: '1rem',
					justifyContent: 'space-between',
				}}
			>
				<FormControl variant="outlined" sx={{ minWidth: 300 }}>
					<InputLabel htmlFor="region-label">Región </InputLabel>
					<FormSelect
						labelId="region-label"
						label="Región"
						value={region}
						onChange={(e) => setRegion(e.target.value)}
						options={regionOptions}
					/>
				</FormControl>
				<DateTextField
					label="Fecha Inicio"
					value={fechaInicio}
					onChange={(e) => setFechaInicio(e.target.value)}
				/>
				<DateTextField
					label="Fecha Fin"
					value={fechaFin}
					onChange={(e) => setFechaFin(e.target.value)}
				/>
				{/* Botones de busqueda */}
				<SearchButton onClick={handleSearch} />
				<ClearFilterButton onClick={handleLimpiarFiltro} />
			</Box>

			<TableContainer
				component={Paper}
				style={{
					borderRadius: '10px',
					boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
					width: '100%',
				}}
			>
				<Table
					sx={{
						minWidth: 650,
						'& th': { backgroundColor: '#f5f5f5', fontWeight: 'bold' },
						'& tbody tr:hover': { backgroundColor: '#e3f2fd' },
					}}
				>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Región</TableCell>
							<TableCell>Usuario</TableCell>
							<TableCell>Requerimiento</TableCell>
							<TableCell>Fecha Apelación</TableCell>
							<TableCell>Fecha Tope Tramitación</TableCell>
							<TableCell>Quién Apela</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((dato) => (
								<TableRow
									key={dato.id}
									sx={{
										transition: 'background-color 0.3s',
										cursor: 'pointer',
										'&:hover': { backgroundColor: '#bbdefb' },
									}}
								>
									<TableCell>{dato.id}</TableCell>
									<TableCell>{dato.region}</TableCell>
									<TableCell>{dato.usuario}</TableCell>
									<TableCell>{dato.requerimiento}</TableCell>
									<TableCell>{dato.fechaApelacion}</TableCell>
									<TableCell
										sx={{
											color: (() => {
												const [day, month, year] =
													dato.fechaTope.split('-');
												const fechaTope = new Date(
													`${year}-${month}-${day}`,
												);
												return fechaTope < new Date() ? 'red' : 'inherit';
											})(),
										}}
									>
										{dato.fechaTope}
									</TableCell>
									<TableCell>{dato.quienApela}</TableCell>
									<TableCell>
										<IconButton
											color="primary"
											component={Link}
											to={'../secciones'}
										>
											<VisibilityIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				component="div"
				count={filteredData.length}
				page={page}
				onPageChange={handleChangePage}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				rowsPerPageOptions={[5, 10, 20]}
				labelRowsPerPage="Filas por página:"
			/>
		</Box>
	);
};

export default BusquedaApelacionesVigentes;
