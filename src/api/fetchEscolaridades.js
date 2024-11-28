export const fetchEscolaridades = async () => {
	const escolaridades = [
		{ id: 1, value: 'Educación Básica Incompleta' },
		{ id: 2, value: 'Educación Básica Completa' },
		{ id: 3, value: 'Educación Media Incompleta' },
		{ id: 4, value: 'Educación Media Completa' },
		{ id: 5, value: 'Educación Superior Técnica Incompleta' },
		{ id: 6, value: 'Educación Superior Técnica Completa' },
		{ id: 7, value: 'Educación Universitaria Incompleta' },
		{ id: 8, value: 'Educación Universitaria Completa' },
		{ id: 9, value: 'Postgrado' },
	];
	return new Promise((resolve) => {
		setTimeout(() => resolve(escolaridades)); // Simula un retraso
	});
};
