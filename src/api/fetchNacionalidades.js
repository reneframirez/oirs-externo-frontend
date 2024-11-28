export const fetchNacionalidades = async () => {
	const nacionalidades = [
		{ id: 1, value: 'Chilena' },
		{ id: 2, value: 'Argentina' },
		{ id: 4, value: 'Peruana' },
		{ id: 5, value: 'Boliviana' },
		{ id: 6, value: 'Venezolana' },
		{ id: 7, value: 'Uruguaya' },
	];
	return new Promise((resolve) => {
		setTimeout(() => resolve(nacionalidades)); // Simula un retraso
	});
};
