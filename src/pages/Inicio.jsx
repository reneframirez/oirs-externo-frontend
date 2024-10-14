import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

const Inicio = () => {
  return (
    <Box
      display="flex" // Utiliza flexbox para alinear los elementos
      mt={5}
      p={5}
      className="formulario"
      sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Añade una sombra con 50% de opacidad
		backgroundColor: '#f0f0f0', 
        padding: 2, // Agrega padding para que las imágenes no estén pegadas al borde
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' }, // Cambia la dirección del flex en pantallas pequeñas
      }}
    >
      {/* Contenedor de la imagen */}
      <Box
        width="300px" // Ajusta el ancho según sea necesario
        sx={{
          display: { xs: 'none', md: 'flex' }, // Oculta el contenedor de imágenes en pantallas pequeñas
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#263ea5', // Fondo blanco para las imágenes
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para el contenedor de imágenes
          borderRadius: 1, // Bordes redondeados para un efecto de marco
        }}
      >
        <Box
          component="img"
          src="/src/assets/images/logo-dpp.png"
          alt="Logo DPP"
          sx={{
            width: '200px',
            mb: 5, // Margen inferior para separar de la imagen siguiente
          }}
        />
        <Box
          component="img"
          src="/src/assets/images/people2.svg" // Ruta de la imagen local
          alt="People"
          sx={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>

      <Box
        flex="1" // Ocupa el espacio restante
        p={2} // Añadir padding para el contenido
      >
        <Typography variant="h3" align="center" mt={3} className="h1-home">
          Ingreso Portal Defensor
        </Typography>
        
        {/* Segunda Fila */}
        <Grid container justifyContent="center" mt={7} spacing={4} className="vivify fadeIn">
          <Grid item xl={4}>
            <Card>
              <CardContent sx={{ padding: 3, pt: 4 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Button
                    component="a"
                    href="/home"
                    onClick={() => {
                      gtag('event', 'Inicio de la solicitud', {
                        event_category: 'Tramite digital',
                        event_label: 'Tramite - 1200970000',
                      });
                      gtag('event', 'Ingreso OIRS C.U', {
                        event_category: 'click',
                        event_label: 'formulario-oirs-cu',
                      });
                    }}
                    className="btn-cu btn-l btn-fw btn-color-estandar"
                    variant="contained"
                    color="primary"
                  >
                    <span className="cl-claveunica"></span>
                    <span className="texto">Iniciar sesión</span>
                  </Button>
                  <Typography variant="body2" align="center" pt={5}>
                    Ingreso ClaveÚnica
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Primera Fila */}
        <Grid container justifyContent="center" mt={5}>
          <Grid item xs={10}>
            <Typography variant="body" className='body2' align="center" pb={1}>
              El 01-08-2024 se rendirá en todas las regiones examen de habilitación técnica para ser abogado defensor penal público bajo el sistema licitado. En esta aplicación los abogados o egresados de derecho con carpeta abierta en la Corte Suprema (a la fecha de esta inscripción), deberán inscribirse para rendir este examen, proporcionando datos básicos como su RUT y otros relativos a los estudios y titulación, asimismo se les solicitará que señalen la región en que desean rendir este examen.
              En el caso de haberse inscrito y haber rendido exámenes anteriores, el sistema le requerirá una clave para ingresar, debiendo utilizar la misma que le fuera entregada anteriormente, de no recordarla, la aplicación cuenta con una opción para recuperar la clave.
              <p>Más información en <a href="http://www.dpp.cl">www.dpp.cl</a>.</p>
            </Typography>
          </Grid>
        </Grid>	  
      </Box>
    </Box>
  );
};

export default Inicio;
