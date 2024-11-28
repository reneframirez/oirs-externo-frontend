export const fetchEtnias = async () => {
	const etnias = [
		{ id: 1, value: 'Mapuche' },
		{ id: 2, value: 'Aymara' },
		{ id: 3, value: 'Rapa Nui' },
		{ id: 4, value: 'Quechua' },
		{ id: 5, value: 'Colla' },
		{ id: 6, value: 'Diaguita' },
		{ id: 7, value: 'Kawésqar' },
		{ id: 8, value: 'Yagán' },
		{ id: 9, value: 'No pertenece a ningún pueblo indígena' },
	];
	return new Promise((resolve) => {
		setTimeout(() => resolve(etnias)); // Simula un retraso
	});
};
