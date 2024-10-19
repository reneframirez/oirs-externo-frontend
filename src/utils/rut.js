// Función para validar el dígito verificador del RUT
const validarDigitoVerificador = (rut) => {
	let suma = 0;
	let multiplicador = 2;

	for (let i = rut.length - 1; i >= 0; i--) {
		suma += multiplicador * rut.charAt(i);
		multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
	}

	const resto = suma % 11;
	const dvEsperado = 11 - resto;

	if (dvEsperado === 11) return '0';
	if (dvEsperado === 10) return 'K';
	return dvEsperado.toString();
};

// Función para formatear el RUT
export const formatearRUT = (rut) => {
	const rutLimpio = rut.replace(/[^0-9kK]/g, '');

	const numero = rutLimpio.slice(0, -1);
	const dv = rutLimpio.slice(-1).toUpperCase();

	if (validarDigitoVerificador(numero) !== dv) {
		return 'RUT inválido';
	}

	const rutFormateado = numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv;
	return rutFormateado;
};
