export const fetchGeneros = async () => {
	const generos = [
		{ id: 1, value: 'Masculino' },
		{ id: 2, value: 'Femenino' },
		{ id: 3, value: 'Otro' },
	];
	return new Promise((resolve) => {
		setTimeout(() => resolve(generos)); // Simula un retraso
	});
};
