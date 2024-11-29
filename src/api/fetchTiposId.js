export const fetchTiposId = async () => {
	const tiposid = [
		{ id: 1, value: 'run', label: 'Run' },
		{ id: 2, value: 'passport', label: 'Pasaporte' },
		{ id: 3, value: 'dni', label: 'DNI' },
		{ id: 4, value: 'indocumentado', label: 'Indocumentado' },
		{ id: 5, value: 'otro', label: 'Otro' },
	];
	return new Promise((resolve) => {
		setTimeout(() => resolve(tiposid)); // Simula un retraso
	});
};
