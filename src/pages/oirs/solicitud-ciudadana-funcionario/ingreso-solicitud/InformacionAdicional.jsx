import { Delete } from '@mui/icons-material';
import {
	Card,
	CardContent,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	List,
	ListItem,
	ListItemText,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import { ChevronDown } from 'lucide-react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
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

	const renderDocumentList = () => {
		return (
			<List>
				{documents.map((doc, index) => (
					<ListItem
						key={`${doc.name}-${index}`}
						sx={{ padding: '1px 10px' }}
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

	const [formData, setFormData] = useState({
		institucionPublica: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const renderSelectField = (label, name, value, options, icon) => (
		<FormControl fullWidth size="small">
			<InputLabel id={`${name}-label`}>{label} *</InputLabel>
			<Select
				labelId={`${name}-label`}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
				IconComponent={ChevronDown}
				label={`${label} *`}
				startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
			>
				<MenuItem value="">
					<em>Seleccionar...</em>
				</MenuItem>
				{options.map((option, index) => (
					<MenuItem key={`${option}-${index}`} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);

	const institucionesPublicas = [
		'Agencia de Cooperación Internacional',
		'Agencia Nacional de Inteligencia',
		'Armada de Chile',
		'Caja de Previsión de la Defensa Nacional',
		'Carabineros de Chile',
		'Casa de Moneda de Chile',
		'Central de Abastecimiento del Sistema Nacional de Servicios de Salud',
		'Centro de Referencia de Salud de Maipú',
		'Centro de Referencia de Salud de Peñalolén Cordillera Oriente',
		'Comisión Administradora del Sistema de Créditos para Estudios Superiores',
		'Comisión Chilena de Energía Nuclear',
		'Comisión Chilena del Cobre',
		'Comisión Nacional de Acreditación',
		'Comisión Nacional de Energía',
		'Comisión Nacional de Investigación En Ciencia y Tecnología (conicyt)',
		'Comisión Nacional de Riego (cnr)',
		'Comisión Nacional del Medio Ambiente',
		'Comité de Inversiones Extranjeras',
		'Consejo de Calificación Cinematográfica',
		'Consejo de Defensa del Estado',
		'Consejo de Rectores de las Universidades Chilenas',
		'Consejo Nacional de la Cultura y las Artes',
		'Consejo Nacional de Televisión',
		'Consejo Superior de Educación',
		'Corporación de Asistencia Judicial Región Bío-bío',
		'Corporación de Asistencia Judicial Región Metropolitana',
		'Corporación de Asistencia Judicial Región Valparaíso',
		'Corporación de Asistencia Judicial Regiones Tarapacá y Antofagasta',
		'Corporación de Fomento Para La Producción',
		'Corporación Nacional de Desarrollo Indígena (conadi)',
		'Corporación Nacional Forestal (conaf)',
		'Defensa Civil de Chile',
		'Defensoría Penal Pública',
		'Dirección Administrativa',
		'Dirección de Aeropuertos',
		'Dirección de Arquitectura',
		'Dirección de Bibliotecas, Archivos y Museos',
		'Dirección de Compras y Contratación Pública (chilecompra)',
		'Dirección de Contabilidad y Finanzas',
		'Dirección de Obras Hidráulicas',
		'Dirección de Obras Portuarias',
		'Dirección de Planeamiento',
		'Dirección de Presupuestos',
		'Dirección de Previsión de Carabineros de Chile',
		'Dirección de Vialidad',
		'Dirección del Trabajo',
		'Dirección General de Aeronáutica Civil (dgac)',
		'Dirección General de Aguas',
		'Dirección General de Crédito Prendario',
		'Dirección General de Movilización Nacional',
		'Dirección General de Obras Públicas',
		'Dirección General de Relaciones Económicas Internacionales',
		'Dirección General del Territorio Marítimo y Marina Mercante',
		'Dirección Nacional de Fronteras y Límites del Estado',
		'Dirección Nacional del Servicio Civil',
		'Ejército de Chile',
		'Fiscalía Nacional Económica',
		'Fondo de Solidaridad e Inversión Social (fosis)',
		'Fondo Nacional de la Discapacidad (fonadis)',
		'Fondo Nacional de Salud (fonasa)',
		'Fuerza Aérea de Chile',
		'Gendarmería de Chile',
		'Gobernación de Última Esperanza',
		'Gobernación de Antofagasta',
		'Gobernación de Arauco',
		'Gobernación de Arica',
		'Gobernación de Bío-bío',
		'Gobernación de Cachapoal',
		'Gobernación de Capitán Prat',
		'Gobernación de Cardenal Caro',
		'Gobernación de Chacabuco',
		'Gobernación de Colchagua',
		'Gobernación de Concepción',
		'Gobernación de Cautín',
		'Gobernación de El Loa',
		'Gobernación de Huasco',
		'Gobernación de Iquique',
		'Gobernación de Isla de Pascua',
		'Gobernación de Llanquihue',
	];

	return (
		<>
			<Grid container spacing={2} pb={2}>
				<Grid item xs={12} sm={7}>
					{renderSelectField(
						'Institución Pública',
						'institucionPublica',
						formData.institucionPublica,
						institucionesPublicas,
						<AccountBalanceIcon />,
					)}
				</Grid>
			</Grid>

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
							<Typography variant="body2" sx={{ marginTop: '4px' }}>
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
							<Typography variant="subtitle1" gutterBottom>
								Documentos cargados
							</Typography>
							{renderDocumentList()}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default InformacionAdicional;
