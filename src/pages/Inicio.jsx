// src/pages/Inicio.jsx
import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Login, Keyboard, Badge } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Importa Link

export default function Component() {
  return (
    <div className="min-h-screen bg-blue-700 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
        <header className="flex items-center mb-8">
          <div className="w-16 h-16 bg-blue-700 rounded-full mr-4"></div>
          <div>
            <h1 className="text-2xl font-bold text-blue-700">Defensoría</h1>
            <p className="text-sm text-gray-600">Sin defensa no hay justicia</p>
          </div>
        </header>

        <Typography variant="h4" component="h2" className="text-center mb-8 text-blue-700">
          Ingreso de Solicitudes Ciudadanas.
        </Typography>

        <Typography variant="h6" component="h3" className="text-center mb-8 text-gray-600">
          ¿Cómo desea realizar la solicitud?
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center p-4">
            <CardContent>
              <Button
                component={Link} // Usa Link como componente base
                to="/datosbasicos" // Ruta de destino
                variant="contained"
                color="primary"
                startIcon={<Login />}
                className="mb-4 w-full"
              >
                Iniciar sesión
              </Button>
              <Typography variant="body2" className="text-center">
                Ingreso ClaveÚnica
              </Typography>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-4">
            <CardContent>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Keyboard />}
                className="mb-4 w-full h-9"
              >
                {' '}
              </Button>
              <Typography variant="body2" className="text-center">
                Ingreso registro manual
              </Typography>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-4">
            <CardContent>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Badge />}
                className="mb-4 w-full h-9"
              >
                {' '}
              </Button>
              <Typography variant="body2" className="text-center">
                Ingreso con Cédula de Identidad
              </Typography>
            </CardContent>
          </Card>
        </div>

        <Typography variant="body2" className="mt-8 text-gray-600 text-center">
          La Defensoría Penal Pública ofrece este espacio de atención virtual para que usted pueda ejercer su derecho a pedir información, realizar sugerencias, reclamos o felicitaciones(*)
        </Typography>

        <Typography variant="caption" className="mt-4 text-gray-500 text-center block">
          (*) Defensoría tendrá como obligación tramitar los requerimientos ciudadanos en los plazos estipulados (Ley 19.880, Ley 19.718 de la Defensoría Penal Pública y la Ley 20.285 sobre Acceso a la Información).
        </Typography>
      </div>
    </div>
  );
}
