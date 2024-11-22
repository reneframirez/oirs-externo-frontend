import { Button } from '@mui/material';

// Función para obtener las regiones de Chile
export const fetchUsuarios = async (id) => {
	const usuarios = [
		{
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
		},
		{
			nombres: 'Diego',
			apellidoPaterno: 'Cortés',
			apellidoMaterno: 'Jeraldino',
			tipoIdentificacion: 'RUT',
			numeroIdentificacion: '12345678-9',
			fechaNacimiento: '25-10-2001',
			telefono: '+56987654321',
			email: 'diego.cortes@example.com',
			direccion: 'Calle Falsa 001',
			regionResidencia: 'Valparaíso',
			comunaResidencia: 'Valparaíso',
			escolaridad: 'Educación Universitaria Completa',
			etnia: 'No pertenece a ningún pueblo',
			genero: 'Masculino',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (usuarios[id]) {
				resolve(usuarios[id]);
			} else {
				reject(new Error('Usuari@ no encontrad@'));
			}
		});
	});
};

export const fetchRequerimientos = async (id) => {
	const requerimientos = [
		{
			region: 'Región Metropolitana',
			comuna: 'Santiago',
			tipoSolicitud: 'Reclamo por Defensa',
			tipoRecepcion: 'Correo Electrónico',
			responderVia: 'Correo Electrónico',
			institucionPublica: 'Ministerio de Salud',
			requerimiento: 'Solicito que se revise el caso relacionado con mi causa.',
			especificacion: 'Otro reclamo por defensa',
			justificacion: 'Justificacion',
		},
		{
			region: 'Valparaíso',
			comuna: 'Viña del Mar',
			tipoSolicitud: 'Reclamo por Defensa',
			tipoRecepcion: 'Presencial',
			responderVia: 'Teléfeno',
			institucionPublica: 'Ministerio de Educación',
			requerimiento: 'Solicito que se revise el caso relacionado con mi nombre.',
			especificacion: 'Otro reclamo por defensa',
			justificacion: 'Porque si',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (requerimientos[id]) {
				resolve(requerimientos[id]);
			} else {
				reject(new Error('Requerimientos no encontrados'));
			}
		});
	});
};

export const fetchImputados = async (id) => {
	const imputados = [
		{
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
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (imputados[id]) {
				resolve(imputados[id]);
			} else {
				reject(new Error('Imputad@ no encontrad@'));
			}
		});
	});
};

export const fetchDerivaciones = async (id) => {
	const derivaciones = [
		{
			funcionario: 'Marcela Tapia Silva',
			fechaDerivacion: '2024-10-03 08:40:54',
			fundamentoDervivacion: 'Fundamento',
		},
		{
			funcionario: 'Nombre del Funcionario',
			fechaDerivacion: '2024-11-22 08:40:54',
			fundamentoDervivacion: 'Fundamento',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (derivaciones[id]) {
				resolve(derivaciones[id]);
			} else {
				reject(new Error('Derivación no encontrada'));
			}
		});
	});
};

export const fetchAnulaciones = async (id) => {
	const anulaciones = [
		{
			funcionario: 'Marcela Tapia Silva',
			fechaAnulacion: '2024-10-03 08:40:54',
			fundamentoAnulacion: 'Fundamento',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (anulaciones[id]) {
				resolve(anulaciones[id]);
			} else {
				reject(new Error('Anulación no encontrada'));
			}
		});
	});
};

export const fetchEntrevistas = async (id) => {
	const entrevistas = [
		{
			entrevista: 'Si',
			fechaEntrevista: '07-10-2024',
			forma: 'Presencial',
			resumen: 'Resumen',
		},
		{
			entrevista: 'Si',
			fechaEntrevista: '23-11-2024',
			forma: 'Virtual',
			resumen: 'Resumen',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (entrevistas[id]) {
				resolve(entrevistas[id]);
			} else {
				reject(new Error('Entrevista no encontrada'));
			}
		});
	});
};

export const fetchRespuestas = async (id) => {
	const respuestas = [
		{
			funcionario: 'Malu Rodriguez Sepulveda',
			tipoRespuesta: '',
			fechaDocumento: '22-10-2024',
			nroDocumento: 109,
			documento: <Button> Abrir Archivo </Button>,
			respuesta: 'Respuesta',
		},
		{
			funcionario: 'Nombre del Funcionario',
			tipoRespuesta: '',
			fechaDocumento: '23-11-2024',
			nroDocumento: 111,
			documento: <Button> Abrir Archivo </Button>,
			respuesta: 'Respuesta',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (respuestas[id]) {
				resolve(respuestas[id]);
			} else {
				reject(new Error('Respuesta no encontrada'));
			}
		});
	});
};

export const fetchEmisiones = async (id) => {
	const emisiones = [
		{
			fechaDocumento: '23-10-2024',
			tipoDocumento: 'Oficio',
			nroDocumento: 148,
			documento: <Button> Abrir Archivo </Button>,
		},
		{
			fechaDocumento: '23-11-2024',
			tipoDocumento: 'Oficio',
			nroDocumento: 111,
			documento: <Button> Abrir Archivo </Button>,
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (emisiones[id]) {
				resolve(emisiones[id]);
			} else {
				reject(new Error('Emision no encontrada'));
			}
		});
	});
};

export const fetchNotificaciones = async (id) => {
	const notificaciones = [
		{
			fechaNotificacion: '23-10-2024',
			documento: <Button> Abrir Archivo </Button>,
		},
		{
			fechaNotificacion: '23-11-2024',
			documento: <Button> Abrir Archivo </Button>,
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (notificaciones[id]) {
				resolve(notificaciones[id]);
			} else {
				reject(new Error('Notificación no encontrada'));
			}
		});
	});
};

export const fetchRecepciones = async (id) => {
	const recepciones = [
		{
			fechaRecepcion: '23-11-2024',
			tipoRecepcion: 'Personal: Recibida por usuario',
			documento: <Button> Abrir Archivo </Button>,
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (recepciones[id]) {
				resolve(recepciones[id]);
			} else {
				reject(new Error('Recepción no encontrada'));
			}
		});
	});
};

export const fetchApelaciones = async (id) => {
	const apelaciones = [
		{
			fechaApelacion: '23-10-2024',
			fechaAsignacion: '28-10-2024',
			quienApela: 'Beneficiario',
			archivo: <Button> Abrir Archivo </Button>,
			expediente: <Button> Abrir Archivo </Button>,
			estadoRegistro: 'Analisis profesional DECR',
			resumen: 'Resumen',
		},
		{
			fechaApelacion: '23-11-2024',
			fechaAsignacion: '28-11-2024',
			quienApela: 'Defensor',
			archivo: <Button> Abrir Archivo </Button>,
			expediente: <Button> Abrir Archivo </Button>,
			estadoRegistro: 'Analisis profesional DECR',
			resumen: 'Resumen',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (apelaciones[id]) {
				resolve(apelaciones[id]);
			} else {
				reject(new Error('Apelación no encontrada'));
			}
		});
	});
};

export const fetchResolvers = async (id) => {
	const resolvers = [
		{
			fechaSolicitud: '23-10-2024',
			profesional: 'Claudio Perez García',
		},
		{
			fechaSolicitud: '23-11-2024',
			profesional: 'THE PROFESIONAL',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (resolvers[id]) {
				resolve(resolvers[id]);
			} else {
				reject(new Error('Resolver no encontrado'));
			}
		});
	});
};

export const fetchMMR = async (id) => {
	const mmr = [
		{
			fechaMMR: '23-10-2024',
			documento: <Button> Abrir Archivo </Button>,
			observacion: 'Observación',
		},
		{
			fechaMMR: '24-11-2024',
			documento: <Button> Abrir Archivo </Button>,
			observacion: 'Observación',
		},
	];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (mmr[id]) {
				resolve(mmr[id]);
			} else {
				reject(new Error('MMR no encontrado'));
			}
		});
	});
};
