// src/pages/oirs/emitir-respuesta/EmitirRespuesta.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ResolucionSection from '../../../../components/ResolucionSection';
import { BackButton, SaveButton } from '../../../../components/CustomButtons';
import UploadButton from '../../../../components/UploadButton';

const buttonStyles = {
	backgroundColor: 'darkblue',
	color: 'white',
	'&:hover': { backgroundColor: 'blue' },
};

const EmitirRespuesta = () => {
	const [showResolutionInfo, setShowResolutionInfo] = React.useState(false);
	const [showResolutionInfo2, setShowResolutionInfo2] = React.useState(false);
	const [adjunto, setAdjunto] = React.useState(null);

	const handleSendResolution = () => {
		// Lógica para manejar el envío de la resolución
		console.log('Resolución enviada');
		setShowResolutionInfo2(true);
	};

	return (
		<Box component="form" noValidate autoComplete="off">
			<Grid container spacing={2}>
				<ResolucionSection
					showResolutionInfo={showResolutionInfo}
					setShowResolutionInfo={setShowResolutionInfo}
					showResolutionInfo2={showResolutionInfo2}
					setShowResolutionInfo2={setShowResolutionInfo2}
					handleSendResolution={handleSendResolution}
					buttonStyles={buttonStyles}
				/>
				<Grid item xs={12}>
					<Typography variant="body1">Adjuntar</Typography>
					<UploadButton label="Seleccionar archivo" file={adjunto} setFile={setAdjunto} />
				</Grid>
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
				<BackButton />
				<SaveButton onClick={handleSendResolution} />
			</Box>
		</Box>
	);
};

export default EmitirRespuesta;
