import AntUsuario from './AntUsuario';
import { useState } from 'react';

const SeccionesOrdenadas = () => {
  const [seccionActual, setSeccionActual] = useState(0);

  const datosDelUsuario = {
    nombres: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "González",
    tipoIdentificacion: "RUT",
    numeroIdentificacion: "12345678-9",
    fechaNacimiento: "1990-01-01",
    telefono: "+56912345678",
    email: "juan.perez@example.com",
    direccion: "Calle Falsa 123",
    regionResidencia: "Metropolitana de Santiago",
    comunaResidencia: "Santiago",
    escolaridad: "Educación Universitaria Completa",
    etnia: "Mapuche",
    genero: "Masculino"
  };

  const secciones = [
    { titulo: 'Antecedentes del Usuario', componente: <AntUsuario datosUsuario={datosDelUsuario} /> },

  ];

  const avanzarSeccion = () => {
    if (seccionActual < secciones.length - 1) {
      setSeccionActual(seccionActual + 1);
    }
  };

  const retrocederSeccion = () => {
    if (seccionActual > 0) {
      setSeccionActual(seccionActual - 1);
    }
  };

  return (
    <div>
      <h2>{secciones[seccionActual].titulo}</h2>
      {secciones[seccionActual].componente}
      <div>
        {seccionActual > 0 && (
          <button onClick={retrocederSeccion}>Anterior</button>
        )}
        {seccionActual < secciones.length - 1 && (
          <button onClick={avanzarSeccion}>Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default SeccionesOrdenadas;
