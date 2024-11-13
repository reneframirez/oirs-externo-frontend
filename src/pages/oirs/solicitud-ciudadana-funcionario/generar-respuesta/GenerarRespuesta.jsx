import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, InputLabel, FormControl } from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import { ConfirmDialog } from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { BackButton, SaveButton } from '../../../../components/CustomButtons';
import { MultiLineTextField } from '../../../../components/CustomTextFields';
import { FormSelect } from '../../../../components/CustomSelect';
import LoadingModal from '../../../../components/LoadingModal';
import ResolucionSection from '../../../../components/ResolucionSection';
import axios from 'axios';

const buttonStyles = {
	backgroundColor: 'darkblue',
	color: 'white',
	'&:hover': { backgroundColor: 'blue' },
};

const GenerarRespuesta = () => {
	const [numeroDocumento, setNumeroDocumento] = useState('');
	const [fechaDocumento, setFechaDocumento] = useState('');
	const [decision, setDecision] = useState('');
	const [fundamento, setFundamento] = useState('');
	const [adjunto, setAdjunto] = useState(null);
	const [expediente, setExpediente] = useState(null);
	const [otroArchivo, setOtroArchivo] = useState(null);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [confirmAction, setConfirmAction] = useState(null);
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertContent, setAlertContent] = useState('');
	const [showResolutionInfo, setShowResolutionInfo] = useState(false);
	const [showResolutionInfo2, setShowResolutionInfo2] = useState(false);
	const [loading, setLoading] = useState(false);

	const [errors, setErrors] = useState({});

	const [decisionOptions, setDecisionOption] = useState([]);

	useEffect(() => {
		// Simulate fetching data
		const fetchData = () => {
			setDecisionOption([
				{ value: 'Acoge', label: 'Acoge' },
				{ value: 'Rechaza', label: 'Rechaza' },
				{ value: 'Desiste', label: 'Desiste' },
				{ value: 'Declara inadmisible', label: 'Declara inadmisible' },
			]);
		};

		fetchData();
	}, []);

	const validateFields = () => {
		let newErrors = {};
		if (!numeroDocumento) newErrors.numeroDocumento = true;
		if (!fechaDocumento) newErrors.fechaDocumento = true;
		if (!decision) newErrors.decision = true;
		if (!fundamento) newErrors.fundamento = true;
		if (!adjunto) newErrors.adjunto = true;
		if (!expediente) newErrors.expediente = true;

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
			await saveResponse();
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

	const saveResponse = async () => {
		await axios.post('/api/saveResponse', {
			numeroDocumento,
			fechaDocumento,
			decision,
			fundamento,
			adjunto,
			expediente,
			otroArchivo,
		});
	};

	const handleCancel = () => {
		setConfirmAction(() => () => setConfirmOpen(false));
		setConfirmOpen(true);
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
				<ResolucionSection
					showResolutionInfo={showResolutionInfo}
					setShowResolutionInfo={setShowResolutionInfo}
					showResolutionInfo2={showResolutionInfo2}
					setShowResolutionInfo2={setShowResolutionInfo2}
					handleSendResolution={handleSendResolution}
					buttonStyles={buttonStyles}
				/>
				<Grid item xs={2}>
					<FormControl fullWidth>
						<InputLabel id="decision-label">Decisión *</InputLabel>
						<FormSelect
							labelId="decision-label"
							label="Decisión"
							value={decision}
							onChange={(e) => setDecision(e.target.value)}
							options={decisionOptions}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<MultiLineTextField
						label="Fundamento"
						value={fundamento}
						onChange={(e) => setFundamento(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6">
						Carga expediente administrativo - Solo para uso interno
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="body1">
						Expediente completo{' '}
						<Typography component="span" color="error">
							*
						</Typography>
					</Typography>
					<UploadButton
						label="Seleccionar archivo"
						file={expediente}
						setFile={setExpediente}
						required
						error={!!errors.expediente}
						helperText={errors.expediente ? 'Este campo es obligatorio' : ''}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="body1">Otro Archivo</Typography>
					<UploadButton
						label="Seleccionar archivo"
						file={otroArchivo}
						setFile={setOtroArchivo}
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
		</Box>
	);
};

export default GenerarRespuesta;
