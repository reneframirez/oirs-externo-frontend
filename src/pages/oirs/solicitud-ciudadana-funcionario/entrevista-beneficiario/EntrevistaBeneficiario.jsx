import React, { useState, useEffect } from 'react';
import {
	Box,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	FormLabel,
	InputLabel,
	Typography,
	Grid,
} from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import { SaveButton, BackButton } from '../../../../components/CustomButtons';
import { FormTextField, DateTextField } from '../../../../components/CustomTextFields';
import { FormSelect } from '../../../../components/CustomSelect';
import { ConfirmDialog } from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';

const EntrevistaBeneficiario = ({ onSubmit }) => {
	const [entrevista, setEntrevista] = useState({
		seRealiza: '',
		fechaEntrevista: '',
		formaRealizacion: '',
		resumen: '',
		documentos: [],
	});
	const [formaRealizacionOptions, setFormaRealizacion] = useState('');
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [alertOpen, setAlertOpen] = useState(false);

	useEffect(() => {
		// Simulate fetching data
		const fetchData = () => {
			setFormaRealizacion([
				{ value: 'Presencial', label: 'Presencial' },
				{ value: 'Virtual', label: 'Virtual' },
			]);
		};

		fetchData();
	}, []);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEntrevista({
			...entrevista,
			[name]: value,
		});
	};

	const handleFileUpload = (files) => {
		setEntrevista({
			...entrevista,
			documentos: files,
		});
	};

	const handleSubmit = () => {
		if (
			entrevista.seRealiza === '' ||
			(entrevista.seRealiza === 'Si' &&
				(!entrevista.fechaEntrevista ||
					!entrevista.formaRealizacion ||
					!entrevista.resumen ||
					entrevista.documentos.length === 0))
		) {
			setAlertOpen(true);
			return;
		}
		setConfirmOpen(true);
	};

	const handleConfirm = () => {
		setConfirmOpen(false);
		if (onSubmit) {
			onSubmit(entrevista);
			setAlertOpen(true);
		}
	};

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			sx={{ p: 3, display: 'flex', flexDirection: 'column' }}
		>
			<FormControl component="fieldset" required>
				<FormLabel component="legend">¿Se realiza entrevista?</FormLabel>
				<RadioGroup
					row
					name="seRealiza"
					value={entrevista.seRealiza}
					onChange={handleInputChange}
				>
					<FormControlLabel value="Si" control={<Radio />} label="Si" />
					<FormControlLabel value="No" control={<Radio />} label="No" />
				</RadioGroup>
			</FormControl>

			{entrevista.seRealiza === 'Si' && (
				<>
					<Grid
						container
						spacing={2}
						sx={{
							my: 2,
							display: 'flex',
							flexDirection: { xs: 'column', sm: 'row' },
							alignItems: { xs: 'stretch', sm: 'center' },
						}}
					>
						<Grid item xs={6}>
							<FormControl variant="outlined" sx={{ flex: 1 }} fullWidth required>
								<DateTextField
									label="Fecha entrevista"
									name="fechaEntrevista"
									value={entrevista.fechaEntrevista}
									onChange={handleInputChange}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={6}>
							<FormControl variant="outlined" sx={{ flex: 1 }} fullWidth required>
								<InputLabel id="formaRealizacion-label">
									Forma que se realiza
								</InputLabel>
								<FormSelect
									labelId="formaRealizacion-label"
									label="Forma que se realiza"
									id="formaRealizacion-select"
									name="formaRealizacion"
									value={entrevista.formaRealizacion}
									onChange={handleInputChange}
									options={formaRealizacionOptions}
								/>
							</FormControl>
						</Grid>
					</Grid>

					<FormTextField
						name="resumen"
						label="Resumen"
						value={entrevista.resumen}
						onChange={handleInputChange}
					/>

					<Box sx={{ my: 2 }}>
						<Typography variant="body1">Subir documentos</Typography>
						<UploadButton onUpload={handleFileUpload} multiple />
					</Box>
				</>
			)}

			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
				<BackButton />
				<SaveButton onClick={handleSubmit} />
			</Box>

			<ConfirmDialog
				open={confirmOpen}
				onClose={() => setConfirmOpen(false)}
				onConfirm={handleConfirm}
				title="Confirmar Guardado"
				content="¿Está seguro que desea guardar la información de la entrevista?"
			/>

			<AlertDialog
				open={alertOpen}
				onClose={() => setAlertOpen(false)}
				content="Todos los campos son obligatorios o La información de la entrevista se ha guardado con éxito."
			/>
		</Box>
	);
};

export default EntrevistaBeneficiario;
