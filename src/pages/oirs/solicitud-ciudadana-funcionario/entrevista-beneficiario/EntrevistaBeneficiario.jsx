import React, { useState } from 'react';
import {
	Box,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	FormLabel,
	TextField,
	MenuItem,
	Select,
	InputLabel,
	Typography,
	Grid,
	InputAdornment,
} from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import { SaveButton, BackButton } from '../../../../components/CustomButtons';
import { CalendarIcon, FileTextIcon } from 'lucide-react';
import ConfirmDialog from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';

const EntrevistaBeneficiario = ({ onSubmit }) => {
	const [entrevista, setEntrevista] = useState({
		seRealiza: '',
		fechaEntrevista: '',
		formaRealizacion: '',
		resumen: '',
		documentos: [],
	});
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [alertOpen, setAlertOpen] = useState(false);

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
		<Box component="form" noValidate autoComplete="off" sx={{ p: 3 }}>
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
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={6}>
							<TextField
								label="Fecha entrevista"
								type="date"
								name="fechaEntrevista"
								value={entrevista.fechaEntrevista}
								onChange={handleInputChange}
								fullWidth
								InputLabelProps={{ shrink: true }}
								required
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<CalendarIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item xs={6}>
							<FormControl fullWidth required>
								<InputLabel htmlFor="formaRealizacion-select">
									Forma que se realiza *
								</InputLabel>
								<Select
									labelId="formaRealizacion-label"
									id="formaRealizacion-select"
									name="formaRealizacion"
									value={entrevista.formaRealizacion}
									onChange={handleInputChange}
								>
									<MenuItem value="Presencial">Presencial</MenuItem>
									<MenuItem value="Virtual">Virtual</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>

					<TextField
						label="Resumen"
						name="resumen"
						value={entrevista.resumen}
						onChange={handleInputChange}
						multiline
						rows={4}
						fullWidth
						inputProps={{ maxLength: 400 }}
						helperText={`Límite de caracteres: ${entrevista.resumen.length} / 400`}
						required
						sx={{ my: 2 }}
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
