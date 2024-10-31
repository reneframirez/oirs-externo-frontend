// src/pages/Inicio.jsx
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, Outlet, useLocation } from 'react-router-dom';

const SolicitudCiudadanaFuncionario = () => {
  const location = useLocation();

  const isBasePath = location.pathname === '/oirs/solicitud-ciudadana-funcionario';

  const cardsData = [
    {
      url: '/oirs/solicitud-ciudadana-funcionario/ingreso-solicitud-interno',
      titulo: 'Ingreso de Solicitud Ciudadana',
      rol: '[Todos los funcionarios]',
      color: 'secondary'
    },
    {
      url: '/oirs/solicitud-ciudadana-funcionario/tipificaciones',
      titulo: 'Tipificación de Solicitud',
      rol: '[Asesor jurídico]',
      color: 'primary'
    },
    {
        url: 'entrevista-beneficiario',
        titulo: 'Entrevista Beneficiario',
        rol: '[AJ - Periodista]',
        color: 'warning'
      },
    {
      url: 'derivar-respuesta',
      titulo: 'Derivar Solicitud',
      rol: '[AJ - Periodista]',
      color: 'success'
    },
    {
      url: 'respuesta-defensor',
      titulo: 'Respuesta del Defensor',
      rol: '[Defensor]',
      color: 'info'
    },
    {
        url: 'generar-respuesta',
        titulo: 'Generar respuesta',
        rol: '[AJ - Periodista]',
        color: 'secondary'
    },
    {
        url: 'emitir-respuesta',
        titulo: 'Emitir respuesta',
        rol: '[AJ - Periodista]',
        color: 'primary'
    },
    {
      url: 'notificar-respuesta',
      titulo: 'Notificar Respuesta al Usuario',
      rol: '[Defensor]',
      color: 'info'
    },
  ];

  const apoyoCardsData = [
    {
      url: '/oirs/solicitud-ciudadana-funcionario/solicitudes-pendientes',
      titulo: 'Solicitudes Pendientes',
      rol: '[AJ - Periodista]',
      color: 'warning'
    },
    {
      url: 'busqueda',
      titulo: 'Búsqueda Solicitudes',
      rol: '[Todos los funcionarios]',
      color: 'error'
    },
    {
      url: '/oirs/solicitud-ciudadana-funcionario/secciones',
      titulo: 'Secciones de Solicitudes',
      rol: '[Manejo Interno Sistema]',
      color: 'warning'
    }
  ];

  return (
    <Box className="flex flex-col items-center justify-center px-4">
      {isBasePath && (
        <Box className="bg-white w-full max-w-7xl">
          <Typography
            variant="h4"
            component="h2"
            className="text-center mb-8 text-blue-700"
          >
            Gestión de OIRS en Portal Único.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            className="text-center mb-8 text-gray-600"
          >
            Módulo SIGO - Portal Único
          </Typography>
                    <Typography variant="body2" className="text-center pt-3">
                      "Proceso Reclamo"
                    </Typography>
          <Box className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 pt-16">
            {cardsData.map((card, index) => (
              <>
                <Card
                  key={index}
                  variant="outlined"
                  className="flex flex-col items-center p-4 relative"
                  sx={{ width: { xs: '100%', sm: '250px' }, height: '160px' }}
                >
                  <CardContent>
                    <Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
                      <Typography variant="caption" className="text-gray-500">
                        {index + 1}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color={card.color}
                      component={Link}
                      to={card.url}
                      startIcon={<AddToPhotosIcon />}
                      className="mb-4 w-full h-9"
                    >
                      {' '}
                    </Button>
                    <Typography variant="body2" className="text-center pt-3">
                      {card.titulo}
                    </Typography>
                    <Typography variant="body2" className="text-center pt-3">
                      {card.rol}
                    </Typography>
                  </CardContent>
                </Card>
                {index < cardsData.length - 1 && (
                  <Box className="flex items-center justify-center">
                    <ArrowForwardIcon fontSize="large" className="text-blue-700 hidden md:block" />
                  </Box>
                )}
              </>
            ))}
          </Box>

          {/*  [[[[  APOYO AL FLUJO   ]]]]] */}
          <Box className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 pt-16">
            {apoyoCardsData.map((card, index) => (
              <>
                <Card
                  key={index}
                  variant="outlined"
                  className="flex flex-col items-center p-4 relative"
                  sx={{ width: { xs: '100%', sm: '250px' }, height: '160px' }}
                >
                  <CardContent>
                    <Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
                      <Typography variant="caption" className="text-gray-500">
                        {index + 1}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color={card.color}
                      component={Link}
                      to={card.url}
                      startIcon={<AddToPhotosIcon />}
                      className="mb-4 w-full h-9"
                    >
                      {' '}
                    </Button>
                    <Typography variant="body2" className="text-center pt-3">
                      {card.titulo}
                    </Typography>
                    <Typography variant="body2" className="text-center pt-3">
                      {card.rol}
                    </Typography>
                  </CardContent>
                </Card>
                {index < apoyoCardsData.length - 1 && (
                  <Box className="flex items-center justify-center">
                    <ArrowForwardIcon fontSize="large" className="text-blue-700 hidden md:block" />
                  </Box>
                )}
              </>
            ))}
          </Box>

          <Box className="flex flex-col items-center justify-center py-10">
            <Typography
              variant="subtitle2"
              className="mt-8 text-gray-600 text-center pb-4"
            >
              La Defensoría Penal Pública ofrece este espacio de atención virtual para
              que usted pueda ejercer su derecho a pedir información, realizar
              sugerencias, reclamos o felicitaciones(*)
            </Typography>

            <Typography
              variant="caption"
              className="mt-4 text-gray-500 text-center block"
            >
              (*) Defensoría tendrá como obligación tramitar los requerimientos
              ciudadanos en los plazos estipulados (Ley 19.880, Ley 19.718 de la
              Defensoría Penal Pública y la Ley 20.285 sobre Acceso a la Información).
            </Typography>
          </Box>
        </Box>
      )}

      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </Box>
  );
};

export default SolicitudCiudadanaFuncionario;
