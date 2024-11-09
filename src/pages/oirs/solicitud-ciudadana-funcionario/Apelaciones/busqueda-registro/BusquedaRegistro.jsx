import React, { useState } from 'react';
import { TablePagination } from '@mui/material';
import {
	TextField,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
} from '@mui/material';
import { Eye as VisibilityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchButton, ClearFilterButton } from '../../../../../components/CustomButtons';

const initialData = [
	{
		id: 52674,
		fecha: '29-07-2024',
		nombre: 'MARIO LUIS BERRIOS LOBOS',
		tipoSolicitud: 'Reclamo por Defensa. Se solicita cambio de Defensor',
		respondidoEn: 24,
	},
	{
		id: 51793,
		fecha: '05-04-2024',
		nombre: 'Mario Segundo Montiel Vega',
		tipoSolicitud: 'Reclamo por Defensa. Se solicita cambio de Defensor',
		respondidoEn: 20,
	},
	{
		id: 49381,
		fecha: '17-07-2023',
		nombre: 'Mario Nicolás Herrera Vega',
		tipoSolicitud: 'Reclamo por Defensa. Se solicita cambio de Defensor',
		respondidoEn: 3,
	},
	{
		id: 49380,
		fecha: '17-07-2023',
		nombre: 'Mario Nicolás Herrera Vega',
		tipoSolicitud: 'Reclamo por Defensa. Se solicita cambio de Defensor',
		respondidoEn: 3,
	},
	{
		id: 47858,
		fecha: '18-01-2023',
		nombre: 'Mario Vianel Alday Olivares',
		tipoSolicitud: 'Defensa no le informa de su causa',
		respondidoEn: 9,
	},
	{
		id: 45046,
		fecha: '05-12-2021',
		nombre: 'mario enrique lópez plazaola',
		tipoSolicitud: 'Reclamo por Defensa. Defensa no realiza diligencias oportunamente',
		respondidoEn: 4,
	},
	{
		id: 52700,
		fecha: '10-08-2024',
		nombre: 'Ana María López',
		tipoSolicitud: 'Reclamo por Defensa. Solicitud de cambio de abogado',
		respondidoEn: 15,
	},
	{
		id: 52801,
		fecha: '15-08-2024',
		nombre: 'Carlos Alberto Díaz',
		tipoSolicitud: 'Defensor no asiste a la audiencia',
		respondidoEn: 5,
	},
	{
		id: 52905,
		fecha: '20-08-2024',
		nombre: 'Lucía Herrera Gómez',
		tipoSolicitud: 'Reclamo por Defensa. Falta de comunicación',
		respondidoEn: 12,
	},
	{
		id: 53012,
		fecha: '25-08-2024',
		nombre: 'Jorge Luis Martínez',
		tipoSolicitud: 'Solicitud de cambio de defensor',
		respondidoEn: 8,
	},
	{
		id: 53115,
		fecha: '30-08-2024',
		nombre: 'María Fernanda Pérez',
		tipoSolicitud: 'Reclamo por Defensa. Demora en la respuesta',
		respondidoEn: 6,
	},
	{
		id: 53220,
		fecha: '01-09-2024',
		nombre: 'José Ignacio Ramírez',
		tipoSolicitud: 'Defensor no presenta pruebas',
		respondidoEn: 7,
	},
];

const BusquedaRegistro = () => {
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [page, setPage] = useState(0);
	const [nombreUsuario, setNombreUsuario] = useState('');
	const [numeroOirs, setNumeroOirs] = useState('');
	const [filteredData, setFilteredData] = useState(initialData);

	const handleLimpiarFiltro = () => {
		setNombreUsuario('');
		setNumeroOirs('');
		setFilteredData(initialData);
	};

	const handleSearch = () => {
		const filtered = initialData.filter((item) => {
			return (
				(!nombreUsuario ||
					item.nombre.toLowerCase().includes(nombreUsuario.toLowerCase())) &&
				(!numeroOirs || item.id.toString().includes(numeroOirs))
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
		<div>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					marginBottom: '1rem',
					justifyContent: 'space-between',
				}}
			>
				<TextField
					label="Nombre usuario"
					variant="outlined"
					value={nombreUsuario}
					onChange={(e) => setNombreUsuario(e.target.value)}
				/>
				<TextField
					label="N° OIRS"
					variant="outlined"
					value={numeroOirs}
					onChange={(e) => setNumeroOirs(e.target.value)}
				/>
				{/* Botones de busqueda */}
				<SearchButton onClick={handleSearch} />
				<ClearFilterButton onClick={handleLimpiarFiltro} />
			</div>
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
							<TableCell style={{ padding: '16px', textAlign: 'center' }}>
								N° OIRS
							</TableCell>
							<TableCell style={{ padding: '16px', textAlign: 'center' }}>
								Fecha
							</TableCell>
							<TableCell style={{ padding: '16px', textAlign: 'center' }}>
								Nombre
							</TableCell>
							<TableCell style={{ padding: '16px', textAlign: 'center' }}>
								Tipo de Solicitud
							</TableCell>
							<TableCell style={{ padding: '16px', textAlign: 'center' }}>
								Respondido en (días)
							</TableCell>
							<TableCell style={{ padding: '16px', textAlign: 'center' }}>
								Acciones
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => (
								<TableRow
									key={row.id}
									sx={{
										transition: 'background-color 0.3s',
										cursor: 'pointer',
										'&:hover': { backgroundColor: '#bbdefb' },
									}}
								>
									<TableCell style={{ padding: '16px', textAlign: 'center' }}>
										{row.id}
									</TableCell>
									<TableCell style={{ padding: '16px', textAlign: 'center' }}>
										{row.fecha}
									</TableCell>
									<TableCell style={{ padding: '16px', textAlign: 'center' }}>
										{row.nombre}
									</TableCell>
									<TableCell style={{ padding: '16px', textAlign: 'center' }}>
										{row.tipoSolicitud}
									</TableCell>
									<TableCell style={{ padding: '16px', textAlign: 'center' }}>
										{row.respondidoEn}
									</TableCell>
									<TableCell style={{ padding: '16px', textAlign: 'center' }}>
										<IconButton
											color="primary"
											component={Link}
											to={'../ingresar-apelacion'}
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
				onPageChange={(event, newPage) => setPage(newPage)}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={(event) => {
					setRowsPerPage(parseInt(event.target.value, 10));
					setPage(0);
				}}
				rowsPerPageOptions={[5, 10, 20]}
				labelRowsPerPage="Filas por página:"
			/>
		</div>
	);
};

export default BusquedaRegistro;
