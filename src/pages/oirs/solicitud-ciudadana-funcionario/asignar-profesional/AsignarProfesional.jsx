import React, { useState } from 'react';
import {
	TextField,
	MenuItem,
	Grid,
	Typography,
	Box,
	DialogActions,
	Button,
	Modal,
} from '@mui/material';
import { ConfirmDialog } from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { BackButton, SaveButton } from '../../../../components/CustomButtons';
import { MultiLineTextField } from '../../../../components/CustomFieldTexts';
import DocumentEditor from '../../../../components/DocumentEditor';
import LoadingModal from '../../../../components/LoadingModal';
import axios from 'axios';

const buttonStyles = {
	backgroundColor: 'darkblue',
	color: 'white',
	'&:hover': { backgroundColor: 'blue' },
};

const AsignarProfesional = () => {
	const [profesional, setProfesional] = useState('');
	const [observacion, setObservacion] = useState('');
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [confirmAction, setConfirmAction] = useState(null);
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertContent, setAlertContent] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [showResolutionInfo, setShowResolutionInfo] = useState(false);
	const [showResolutionInfo2, setShowResolutionInfo2] = useState(false);
	const [loading, setLoading] = useState(false);

	const [errors, setErrors] = useState({});

	const validateFields = () => {
		let newErrors = {};
		if (!profesional) newErrors.profesional = true;
		if (!observacion) newErrors.observacion = true;

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSave = () => {
		if (!validateFields()) {
			setAlertContent('Por favor, complete todos los campos obligatorios antes de guardar.');
			setAlertOpen(true);
			return;
		}
		openConfirmDialog();
	};

	const openConfirmDialog = () => {
		setConfirmAction(() => handleConfirm);
		setConfirmOpen(true);
	};

	const handleConfirm = async () => {
		try {
			// Lógica para guardar la respuesta en el backend
			await axios.post('/api/saveResponse', {
				profesional,
				observacion,
			});
			console.log('Respuesta guardada con éxito');
			setConfirmOpen(false);
			setAlertContent('La respuesta ha sido guardada exitosamente.');
			setAlertOpen(true);
		} catch (error) {
			console.error('Error al guardar la respuesta:', error);
			setConfirmOpen(false);
			setAlertContent(
				'Ocurrió un error al guardar la respuesta. Por favor, intente nuevamente.',
			);
			setAlertOpen(true);
		}
	};

	const handleCancel = () => {
		setConfirmAction(() => () => setConfirmOpen(false));
		setConfirmOpen(true);
	};

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleModalSave = () => {
		// Lógica para guardar el documento desde el editor
		console.log('Documento editado guardado');
		setModalOpen(false);
		setShowResolutionInfo(true);
	};

	const handleSendResolution = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setShowResolutionInfo2(true);
		}, 3000);
	};

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} container spacing={2} alignItems="center"></Grid>
				<Grid item xs={12}>
					<TextField
						select
						fullWidth
						label="Profesional a Asignar"
						value={profesional}
						onChange={(e) => setProfesional(e.target.value)}
						required
						error={!!errors.profesional}
						helperText={errors.preofesional ? 'Este campo es obligatorio' : ''}
						defaultValue=""
					>
						<MenuItem value="" disabled>
							Seleccione una opción
						</MenuItem>
						<MenuItem value="1">SANDRA EUGENIA JELVES MELLA</MenuItem>
						<MenuItem value="2">HELEN ANDREA THIERS HERNANDEZ</MenuItem>
						<MenuItem value="3">JORGE IVAN GASPONOV ESCUDERO</MenuItem>
						<MenuItem value="4">CLAUDIO PEREZ GARCIA</MenuItem>
						<MenuItem value="1">PATRICIO LEONARDO SANZANA MANSILLA</MenuItem>
						<MenuItem value="2">MARCELO EDUARDO GRANDON PELLET</MenuItem>
						<MenuItem value="3">PETER SHARP VARGAS</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12}>
					<MultiLineTextField
						label="Observacion"
						value={observacion}
						onChange={(e) => setObservacion(e.target.value)}
					/>
				</Grid>
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
				<BackButton />
				<SaveButton onClick={handleSave} />
			</Box>
			<AlertDialog
				open={alertOpen}
				content={alertContent}
				onClose={() => setAlertOpen(false)}
			/>
			<ConfirmDialog
				open={confirmOpen}
				content="¿Está seguro de que desea realizar esta acción?"
				onConfirm={handleConfirm}
				onCancel={() => setConfirmOpen(false)}
			/>
			<LoadingModal open={loading} />
			<Modal open={modalOpen} onClose={handleModalClose}>
				<Box
					sx={{
						p: 4,
						backgroundColor: 'white',
						borderRadius: 2,
						boxShadow: 3,
						width: '80%',
						margin: 'auto',
						mt: 5,
					}}
				>
					<Typography variant="h6" gutterBottom>
						Editor de Documento
					</Typography>
					<DocumentEditor />
					<DialogActions sx={{ mt: 3 }}>
						<Button onClick={handleModalClose} color="secondary" sx={buttonStyles}>
							Cancelar
						</Button>
						<Button
							onClick={handleModalSave}
							color="primary"
							variant="contained"
							sx={buttonStyles}
						>
							Grabar
						</Button>
					</DialogActions>
				</Box>
			</Modal>
		</Box>
	);
};

export default AsignarProfesional;
