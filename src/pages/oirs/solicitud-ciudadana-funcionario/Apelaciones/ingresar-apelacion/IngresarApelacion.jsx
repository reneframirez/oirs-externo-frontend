import React, { useState, useEffect } from 'react';
import { ConfirmDialog } from '../../../../../components/ConfirmDialog';
import UploadButton from '../../../../../components/UploadButton';
import { InputLabel, Box, FormControl } from '@mui/material';
import { BackButton, SaveButton } from '../../../../../components/CustomButtons';
import { MultiLineTextField, DateTextField } from '../../../../../components/CustomTextFields';
import { FormSelect } from '../../../../../components/CustomSelect';

const IngresarApelacion = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [fechaRecepcion, setFechaRecepcion] = useState('');
	const [quienApela, setQuienApela] = useState('Beneficiario');
	const [resumen, setResumen] = useState('');
	const [archivo, setArchivo] = useState(null);
	const [alertContent, setAlertContent] = useState('');

	const [quienApelaOptions, setQuienApelaOption] = useState([]);

	useEffect(() => {
		// Simulate fetching data
		const fetchData = () => {
			setQuienApelaOption([
				{ value: 'Beneficiario', label: 'Beneficiario' },
				{ value: 'Defensor', label: 'Defensor' },
			]);
		};

		fetchData();
	}, []);

	const handleFileChange = (e) => {
		setArchivo(e.target.files[0]);
	};

	const handleSubmit = () => {
		setAlertContent('Por favor, complete todos los campos antes de derivar.');

		setDialogOpen(true);
	};

	const handleConfirm = () => {
		// Lógica para enviar la apelación
		console.log({ fechaRecepcion, quienApela, resumen, archivo });
		setDialogOpen(false);
	};

	const handleCancel = () => {
		setDialogOpen(false);
	};

	return (
		<Box
			component="form"
			sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}
		>
			<Box sx={{ display: 'flex', gap: 8, mt: 2 }}>
				<DateTextField
					label="Fecha recepción"
					value={fechaRecepcion}
					onChange={(e) => setFechaRecepcion(e.target.value)}
				/>
				<FormControl>
					<InputLabel id="quienapela-label">¿Quién apela?*</InputLabel>
					<FormSelect
						labelId="quienapela-label"
						label="¿Quién apela?"
						value={quienApela}
						onChange={(e) => setQuienApela(e.target.value)}
						options={quienApelaOptions}
					/>
				</FormControl>
			</Box>

			<MultiLineTextField
				label="Respuesta"
				value={resumen}
				onChange={(e) => setResumen(e.target.value)}
			/>

			<UploadButton onFileChange={handleFileChange} />
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<BackButton />
				<SaveButton onClick={handleSubmit} />
			</Box>
			<ConfirmDialog
				open={dialogOpen}
				onConfirm={handleConfirm}
				content="¿Está seguro de que desea realizar esta acción?"
				onCancel={handleCancel}
				title="Confirmar Creación de Apelación"
				description="¿Está seguro de que desea crear esta apelación?"
			/>
		</Box>
	);
};

export default IngresarApelacion;
