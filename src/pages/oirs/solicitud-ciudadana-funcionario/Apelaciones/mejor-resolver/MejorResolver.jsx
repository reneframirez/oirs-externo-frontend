import React, { useState, useEffect } from 'react';
import {
	Grid,
	Typography,
	Box,
	DialogActions,
	Button,
	Modal,
	FormControlLabel,
	FormGroup,
	FormControl,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { ConfirmDialog } from '../../../../../components/ConfirmDialog';
import AlertDialog from '../../../../../components/AlertDialog';
import { CancelButton, SaveButton } from '../../../../../components/CustomButtons';
import { DateTextField } from '../../../../../components/CustomTextFields';
import { FormSelect } from '../../../../../components/CustomSelect';
import DocumentEditor from '../../../../../components/DocumentEditor';
import LoadingModal from '../../../../../components/LoadingModal';
import axios from 'axios';

const buttonStyles = {
	backgroundColor: 'darkblue',
	color: 'white',
	'&:hover': { backgroundColor: 'blue' },
};

const MejorResolver = () => {
	const [fechaDocumento, setFechaDocumento] = useState('');
	const [profesional, setProfesional] = useState('');
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [confirmAction, setConfirmAction] = useState(null);
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertContent, setAlertContent] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [showResolutionInfo2, setShowResolutionInfo2] = useState(false);
	const [loading, setLoading] = useState(false);

	const [errors, setErrors] = useState({});

	const [profesionalOptions, setProfesionalOption] = useState([]);

	useEffect(() => {
		// Simulate fetching data
		const fetchData = () => {
			setProfesionalOption([
				{ value: '1', label: 'SANDRA EUGENIA JELVES MELLA' },
				{ value: '2', label: 'HELEN ANDREA THIERS HERNANDEZ' },
				{ value: '3', label: 'JORGE IVAN GASPONOV ESCUDERO' },
				{ value: '4', label: 'CLAUDIO PEREZ GARCIA' },
				{ value: '5', label: 'PATRICIO LEONARDO SANZANA MANSILLA' },
				{ value: '6', label: 'MARCELO EDUARDO GRANDON PELLET' },
				{ value: '7', label: 'PETER SHARP VARGAS' },
			]);
		};
		fetchData();
	}, []);

	const [state, setState] = React.useState({
		chkItem1: false,
		chkItem2: false,
		chkItem3: false,
		chkItem4: false,
		chkItem5: false,
	});

	const handleGrouping = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.checked,
		});
	};

	const validateFields = () => {
		let newErrors = {};
		if (!fechaDocumento) newErrors.fechaDocumento = true;
		if (!profesional) newErrors.profesional = true;

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
				fechaDocumento,
				profesional,
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
					<FormControl>
						<FormSelect
							label="Profesional"
							value={profesional}
							onChange={(e) => setProfesional(e.target.value)}
							options={profesionalOptions}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						Medida mejor Resolver{' '}
						<Typography component="span" color="error">
							*
						</Typography>
					</Typography>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox color="success" />}
							label="Solicitar Informacion complementaria del reclamante-reclamado"
							checked={state.chkItemOne}
							onChange={handleGrouping}
							name="chkItem1"
						/>
						<FormControlLabel
							control={<Checkbox color="success" />}
							label="Solicitar audios"
							checked={state.chkItemTwo}
							onChange={handleGrouping}
							name="chkItem2"
						/>
						<FormControlLabel
							control={<Checkbox color="success" />}
							label="Coordinar y/o gestiones de la DR"
							checked={state.chkItemThree}
							onChange={handleGrouping}
							name="chkItem3"
						/>
						<FormControlLabel
							control={<Checkbox color="success" />}
							label="Adjuntar expediente escaneado"
							checked={state.chkItemFour}
							onChange={handleGrouping}
							name="chkItem4"
						/>
						<FormControlLabel
							control={<Checkbox color="success" />}
							label="Otra"
							checked={state.chkItemFour}
							onChange={handleGrouping}
							name="chkItem5"
						/>
					</FormGroup>
				</Grid>
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
				<CancelButton onClick={handleCancel} />
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

export default MejorResolver;
