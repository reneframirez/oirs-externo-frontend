import AntUsuario from './AntUsuario';
import AntRequerimiento from './AntRequerimiento';
import AntImputado from './AntImputado';
import InfoAdicional from './InfoAdicional';
import AntDerivacion from './AntDerivacion';
import AntAnulacion from './AntAnulacion';
import AntEntrevista from './AntEntrevista';
import AntRepuesta from './AntRepuesta';
import AntEmision from './AntEmision';
import AntNotificacion from './AntNotificacion';
import AntRecepcion from './AntRecepcion';
import AntApelacion from './AntApelacion';
import AntResolver from './AntResolver';
import AntMMR from './AntMMR';

import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserIcon } from 'lucide-react';

const SeccionesOrdenadas = () => {
	const datosDelUsuario = {
		nombres: 'Juan',
		apellidoPaterno: 'Pérez',
		apellidoMaterno: 'González',
		tipoIdentificacion: 'RUT',
		numeroIdentificacion: '12345678-9',
		fechaNacimiento: '01-01-1990',
		telefono: '+56912345678',
		email: 'juan.perez@example.com',
		direccion: 'Calle Falsa 123',
		regionResidencia: 'Metropolitana de Santiago',
		comunaResidencia: 'Santiago',
		escolaridad: 'Educación Universitaria Completa',
		etnia: 'Mapuche',
		genero: 'Masculino',
	};

	const datosDelRequerimiento = {
		region: 'Región Metropolitana',
		comuna: 'Santiago',
		tipoSolicitud: 'Reclamo por Defensa',
		tipoRecepcion: 'Correo Electrónico',
		responderVia: 'Correo Electrónico',
		institucionPublica: 'Ministerio de Salud',
		requerimiento: 'Solicito que se revise el caso relacionado con mi causa.',
		especificacion: 'Otro reclamo por defensa',
		justificacion: 'Justificacion',
	};

	const imputadoData = {
		run: '12345678-9',
		nombreImputado: 'Carlos',
		apellidoPaterno: 'Sanchez',
		apellidoMaterno: 'Lopez',
		fechaNacimiento: '1985-06-15',
		genero: 'Masculino',
		nivelEscolaridad: 'Educación Secundaria Completa',
		nacionalidad: 'Chilena',
		rustPeticion: '12345',
		ruc: '54321',
		tribunal: 'Tribunal de Justicia de Santiago',
		rit: 'RIT-1234-2023',
	};

	const derivacionData = {
		funcionario: 'Marcela Tapia Silva',
		fechaDerivacion: '2024-10-03 08:40:54',
		fundamentoDervivacion: 'Fundamento',
	};

	const anulacionData = {
		funcionario: '',
		fechaAnulacion: '',
		fundamentoAnulacion: '',
	};

	const entrevistaData = {
		entrevista: 'Si',
		fechaEntrevista: '07-10-2024',
		forma: 'Presencial',
		resumen: 'Resumen',
	};

	const respuestaData = {
		funcionario: 'Malu Rodriguez Sepulveda',
		tipoRespuesta: '',
		fechaDocumento: '22-10-2024',
		nroDocumento: 109,
		documento: <Button>Abrir Archivo</Button>,
		respuesta: 'Respuesta',
	};

	const emisionData = {
		fechaDocumento: '23-10-2024',
		tipoDocumento: 'Oficio',
		nroDocumento: 148,
		documento: <Button>Abrir Archivo</Button>,
	};

	const notificacionData = {
		fechaNotificacion: '23-10-2024',
		documento: <Button>Abrir Archivo</Button>,
	};

	const recepcionData = {
		fechaRecepcion: '23-10-2024',
		tipoRecepcion: 'Mail: Con acuse del recibo al usuario',
		documento: <Button>Abrir Archivo</Button>,
	};

	const apelacionData = {
		fechaApelacion: '23-10-2024',
		fechaAsignacion: '28-10-2024',
		quienApela: 'Beneficiario',
		archivo: <Button>Abrir Archivo</Button>,
		expediente: <Button>Abrir Archivo</Button>,
		estadoRegistro: 'Analisis profesional DECR',
		resumen: 'Resumen',
	};

	const resolverData = {
		fechaSolicitud: '',
		profesional: '',
	};

	const mmrData = {
		fechaMMR: '',
		documento: <Button>Abrir Archivo</Button>,
		observacion: '',
	};

	const secciones = [
		{
			titulo: 'Antecedentes del Usuario',
			componente: <AntUsuario datosUsuario={datosDelUsuario} />,
		},
		{
			titulo: 'Antecedentes del Requerimiento',
			componente: <AntRequerimiento datosRequerimiento={datosDelRequerimiento} />,
		},
		{
			titulo: 'Antecedentes del Imputado',
			componente: <AntImputado imputadoData={imputadoData} />,
		},
		{
			titulo: 'Información Adicional',
			componente: <InfoAdicional />,
		},
		{
			titulo: 'Antecedentes de la Derivación',
			componente: <AntDerivacion derivacionData={derivacionData} />,
		},
		{
			titulo: 'Antecedentes de la Anulación',
			componente: <AntAnulacion anulacionData={anulacionData} />,
		},
		{
			titulo: 'Antecedentes de la Entrevista',
			componente: <AntEntrevista entrevistaData={entrevistaData} />,
		},
		{
			titulo: 'Antecedentes de la Respuesta',
			componente: <AntRepuesta respuestaData={respuestaData} />,
		},
		{
			titulo: 'Antecedentes de la Emisión de la Respuesta',
			componente: <AntEmision emisionData={emisionData} />,
		},
		{
			titulo: 'Antecedentes de la Respuesta Notificada al usuario',
			componente: <AntNotificacion notificacionData={notificacionData} />,
		},
		{
			titulo: 'Registro de Recepción de Respuesta al Usuario',
			componente: <AntRecepcion recepcionData={recepcionData} />,
		},
		{
			titulo: 'Antecedentes de la Apelación',
			componente: <AntApelacion apelacionData={apelacionData} />,
		},
		{
			titulo: 'Antecedentes de Medidas por Mejor Resolver Requeridas',
			componente: <AntResolver resolverData={resolverData} />,
		},
		{
			titulo: 'Antecedentes la Respuesta a Requerimiento de MMR',
			componente: <AntMMR mmrData={mmrData} />,
		},
	];

	return (
		<div>
			{secciones.map((seccion, index) => (
				<Accordion key={index} defaultExpanded sx={{ my: 1 }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${index}-content`}
						id={`panel${index}-header`}
						style={{ backgroundColor: '#00274d', borderRadius: '8px' }}
					>
						<UserIcon style={{ color: 'white', marginRight: '8px' }} />
						<Typography style={{ color: 'white' }}>{seccion.titulo} </Typography>
					</AccordionSummary>
					<AccordionDetails>{seccion.componente}</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default SeccionesOrdenadas;
