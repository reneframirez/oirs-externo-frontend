import React from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import { Person, Badge, Cake, Phone, Email, Home, Public, School, Group } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Importa Link
import { Login } from '@mui/icons-material';


export default function Component() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">
        <div className="mb-10">
          <img src="/placeholder.svg?height=50&width=150" alt="Logo" className="w-full" />
        </div>
        <nav>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 p-2 bg-blue-600 rounded">
              <Person />
              <span>Antecedentes personales</span>
            </li>
            <li className="flex items-center space-x-2 p-2">
              <Badge />
              <span>Antecedentes del requerimiento</span>
            </li>
            <li className="flex items-center space-x-2 p-2">
              <span className="w-6 h-6 flex items-center justify-center border-2 border-white rounded-full">✓</span>
              <span>Evalúe nuestra atención</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Formulario de Ingreso de Solicitudes Ciudadanas</h1>
        <p className="text-sm text-gray-600 mb-8">Para que la Defensoría trámite sus solicitudes, es obligatorio que llene los espacios con asteriscos *</p>

        <form className="space-y-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Antecedentes personales</h2>
          
          <div className="grid grid-cols-3 gap-4">
            <TextField label="Nombres *" variant="outlined" fullWidth InputProps={{startAdornment: <Person className="text-gray-400 mr-2" />}} />
            <TextField label="Apellido Paterno *" variant="outlined" fullWidth InputProps={{startAdornment: <Person className="text-gray-400 mr-2" />}} />
            <TextField label="Apellido Materno *" variant="outlined" fullWidth InputProps={{startAdornment: <Person className="text-gray-400 mr-2" />}} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Tipo de identificación</MenuItem>
              <MenuItem value="dni">DNI</MenuItem>
              <MenuItem value="passport">Pasaporte</MenuItem>
            </Select>
            <TextField label="Número de identificación *" variant="outlined" fullWidth InputProps={{startAdornment: <Badge className="text-gray-400 mr-2" />}} />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <TextField label="Edad *" variant="outlined" fullWidth InputProps={{startAdornment: <Cake className="text-gray-400 mr-2" />}} />
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Género</MenuItem>
              <MenuItem value="male">Masculino</MenuItem>
              <MenuItem value="female">Femenino</MenuItem>
              <MenuItem value="other">Otro</MenuItem>
            </Select>
            <TextField label="Teléfono *" variant="outlined" fullWidth InputProps={{startAdornment: <Phone className="text-gray-400 mr-2" />}} />
            <TextField label="Email" variant="outlined" fullWidth InputProps={{startAdornment: <Email className="text-gray-400 mr-2" />}} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <TextField label="Dirección *" variant="outlined" fullWidth InputProps={{startAdornment: <Home className="text-gray-400 mr-2" />}} />
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Región residencia *</MenuItem>
              {/* Add regions here */}
            </Select>
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Comuna residencia *</MenuItem>
              {/* Add communes here */}
            </Select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Nacionalidad</MenuItem>
              {/* Add nationalities here */}
            </Select>
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Escolaridad</MenuItem>
              {/* Add education levels here */}
            </Select>
            <Select defaultValue="" displayEmpty fullWidth>
              <MenuItem value="" disabled>Etnia</MenuItem>
              {/* Add ethnicities here */}
            </Select>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-gray-600">Paso 1 de 3</div>
            <Button variant="contained" 
                component={Link} // Usa Link como componente base
                to="/datoscausa" // Ruta de destino
                color="primary" endIcon={<span>→</span>}>
              Siguiente
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}