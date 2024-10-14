import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar lógica de cierre de sesión si es necesario
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <Box p={5}>
      <Typography variant="h4" align="center">
        Bienvenido al portal Defensor
      </Typography>
      <Typography variant="body1" align="center" mt={2}>
        Escoge una opción
      </Typography>
      
      {/* Contenedor para el menú */}
      <Grid container spacing={3} mt={5}>
        {/* Fila 1 */}
        <Grid container item spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/opcion1"
            >
              Inscribirse a Prueba Habilitante
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/opcion2"
            >
              Modificar Datos Prueba Habilitante
            </Button>
          </Grid>
        </Grid>
        
        {/* Fila 2 */}
        <Grid container item spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/opcion3"
            >
              Resultados de Prueba Habilitante
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/opcion4"
            >
              Experiencia Profesional
            </Button>
          </Grid>
        </Grid>
        
       {/* Botón de Salir */}
       <Grid item xs={12} mt={3} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogout}
            sx={{
              width: '150px', // Ancho del botón
              height: '40px', // Altura del botón
              fontSize: '0.875rem', // Tamaño del texto
              padding: '6px 16px', // Padding interno
            }}
          >
            Salir
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
