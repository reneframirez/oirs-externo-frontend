// Función para obtener las regiones de Chile
export const fetchRegiones = async() => {
    const regiones = [
        { id: 1, name: 'Región Metropolitana' },
        { id: 2, name: 'Valparaíso' },
        { id: 3, name: 'Biobío' },
        { id: 4, name: 'Araucanía' },
        { id: 5, name: 'Antofagasta' },
    ];
    return new Promise((resolve) => {
        setTimeout(() => resolve(regiones)); // Simula un retraso
    });
};

// Función para obtener las comunas según la región seleccionada
export const fetchComunas = async(regionId) => {
    const comunasPorRegion = {
        1: ['Santiago', 'Puente Alto', 'Maipú', 'La Florida', 'Las Condes'],
        2: ['Valparaíso', 'Viña del Mar', 'Quillota', 'San Antonio', 'Concón'],
        3: ['Concepción', 'Los Ángeles', 'Chillán', 'Talcahuano', 'Coronel'],
        4: ['Temuco', 'Villarrica', 'Angol', 'Pucón', 'Lautaro'],
        5: ['Antofagasta', 'Calama', 'Tocopilla', 'Mejillones', 'Taltal'],
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (comunasPorRegion[regionId]) {
                resolve(comunasPorRegion[regionId]);
            } else {
                reject(new Error('Región no encontrada'));
            }
        }, 500); // Simula un retraso
    });
};