import React, { useState, useEffect } from 'react';
import {
	Grid,
	Typography,
	Box,
	DialogActions,
	Button,
	Modal,
	InputLabel,
	FormControl,
} from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import UploadResButton from '../../../../components/ResolucionRespuestaButton';
import { ConfirmDialog } from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { BackButton, SaveButton } from '../../../../components/CustomButtons';
import { DateTextField } from '../../../../components/CustomTextFields';
import { FormSelect } from '../../../../components/CustomSelect';
import DocumentEditor from '../../../../components/DocumentEditor';
import LoadingModal from '../../../../components/LoadingModal';
import axios from 'axios';

const buttonStyles = {
	backgroundColor: 'darkblue',
	color: 'white',
	'&:hover': { backgroundColor: 'blue' },
};

const RecepcionNotificacion = () => {
	const [numeroDocumento, setNumeroDocumento] = useState('');
	const [fechaDocumento, setFechaDocumento] = useState('');
	const [recepcion, setRecepcion] = useState('');
	const [fundamento, setFundamento] = useState('');
	const [adjunto, setAdjunto] = useState(null);
	const [expediente, setExpediente] = useState(null);
	const [otroArchivo, setOtroArchivo] = useState(null);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [confirmAction, setConfirmAction] = useState(null);
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertContent, setAlertContent] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [showResolutionInfo, setShowResolutionInfo] = useState(false);
	const [showResolutionInfo2, setShowResolutionInfo2] = useState(false);
	const [loading, setLoading] = useState(false);

	const [errors, setErrors] = useState({});

	const [recepcionOptions, setRecepcionOption] = useState([]);

	useEffect(() => {
		// Simulate fetching data
		const fetchData = () => {
			setRecepcionOption([
				{ value: 'Personal', label: 'Personal: Recibida por usuario' },
				{ value: 'CartaConfirmada', label: 'Carta: Con confirmacion de entrega a usuario' },
				{
					value: 'CartaSinConfirmar',
					label: 'Carta: Sin confirmacion de entrega a usuario',
				},
				{ value: 'MailAcuseRecibo', label: 'Mail: Con acuse de recibo del usuario' },
				{ value: 'MailSinAcuseRecibo', label: 'Mail: Sin acuse de recibo del usuario' },
				{ value: 'NoHabidoNegacion', label: 'Usuario No habido o niega ser Notificado' },
			]);
		};
		fetchData();
	}, []);

	const validateFields = () => {
		let newErrors = {};
		if (!fechaDocumento) newErrors.fechaDocumento = true;
		if (!recepcion) newErrors.recepcion = true;
		if (!fundamento) newErrors.fundamento = true;
		if (!adjunto) newErrors.adjunto = true;

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
				numeroDocumento,
				fechaDocumento,
				recepcion,
				fundamento,
				adjunto,
				expediente,
				otroArchivo,
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
				<Grid item xs={12} container spacing={2} alignItems="center">
					<Grid item xs={12} sm={6}>
						<DateTextField
							label="Fecha Documento"
							value={fechaDocumento}
							onChange={(e) => setFechaDocumento(e.target.value)}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id="tipoderecepcion-label">Tipo de Recepcion</InputLabel>
						<FormSelect
							labelId="tipoderecepcion-label"
							label="Tipo de Recepcion"
							value={recepcion}
							onChange={(e) => setRecepcion(e.target.value)}
							options={recepcionOptions}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="body1">
						Archivo de recepcion de notificacion{' '}
						<Typography component="span" color="error">
							*
						</Typography>
					</Typography>
					<UploadButton
						label="Seleccionar archivo"
						file={adjunto}
						setFile={setAdjunto}
						required
						error={!!errors.adjunto}
						helperText={errors.adjunto ? 'Este campo es obligatorio' : ''}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6">Carga archivo de recepcion de notificacion</Typography>
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

export default RecepcionNotificacion;
