import { Delete } from '@mui/icons-material';
import {
	Card,
	CardContent,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const InformacionAdicional = () => {
	/* DRAG AND DROP */

	const [documents, setDocuments] = useState([]);

	// Manejo de archivos cuando se sueltan en el dropzone
	const onDrop = (acceptedFiles) => {
		setDocuments((prevDocs) => [...prevDocs, ...acceptedFiles]);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: true, // Permitir múltiples archivos
	});

	// Función para eliminar un archivo de la lista
	const handleRemoveDocument = (indexToRemove) => {
		setDocuments((prevDocs) => prevDocs.filter((_, index) => index !== indexToRemove));
	};

	// Renderizar la lista de documentos con botones para eliminarlos
	const renderDocumentList = () => {
		return (
			<List>
				{documents.map((doc, index) => (
					<ListItem
						key={index}
						secondaryAction={
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => handleRemoveDocument(index)}
							>
								<Delete />
							</IconButton>
						}
					>
						<ListItemText primary={doc.name} />
					</ListItem>
				))}
			</List>
		);
	};
	return (
		<Grid container spacing={2} pb={2}>
			<Grid item xs={12} md={6}>
				<Card variant="outlined">
					<CardContent
						{...getRootProps()}
						sx={{
							border: '2px dashed #ccc',
							borderRadius: '4px',
							textAlign: 'center',
							padding: '20px',
							backgroundColor: isDragActive ? '#f0f0f0' : 'transparent',
							cursor: 'pointer',
						}}
					>
						<input {...getInputProps()} />
						<Typography variant="h6">Sube tus documentos aquí</Typography>
						<Typography variant="body2" sx={{ marginTop: '10px' }}>
							{isDragActive
								? 'Suelta los archivos aquí...'
								: 'O arrastra y suelta los archivos aquí'}
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			{/* Card que lista los documentos cargados con botones de eliminar */}
			<Grid item xs={12} md={6}>
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h6" gutterBottom>
							Documentos cargados
						</Typography>
						{renderDocumentList()}
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default InformacionAdicional;
