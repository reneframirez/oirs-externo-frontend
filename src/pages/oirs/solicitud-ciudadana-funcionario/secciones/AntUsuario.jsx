import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography, Divider } from '@mui/material';

const AntUsuario = ({ datosUsuario }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3, p: { xs: 1, sm: 2, md: 3 } }}>
      <CardContent>
        <Grid container spacing={{ xs: 1, sm: 2, md: 2 }}>
          {/* Tipo de Identificación */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Tipo de Identificación
            </Typography>
            <Typography variant="body2">{datosUsuario.tipoIdentificacion || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Número de Identificación
            </Typography>
            <Typography variant="body2">{datosUsuario.numeroIdentificacion || 'N/A'}</Typography>
          </Grid>

          {/* Datos Personales */}
          <Grid item xs={12}>
            <Divider sx={{ my: 0.5 }} />
            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
              Datos Personales
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Nombre Completo
            </Typography>
            <Typography variant="body2">
              {`${datosUsuario.nombres || 'N/A'} ${datosUsuario.apellidoPaterno || ''} ${datosUsuario.apellidoMaterno || ''}`.trim()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Fecha de Nacimiento
            </Typography>
            <Typography variant="body2">{datosUsuario.fechaNacimiento || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Género
            </Typography>
            <Typography variant="body2">{datosUsuario.genero || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Escolaridad
            </Typography>
            <Typography variant="body2">{datosUsuario.escolaridad || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Etnia
            </Typography>
            <Typography variant="body2">{datosUsuario.etnia || 'N/A'}</Typography>
          </Grid>

          {/* Datos de Residencia */}
          <Grid item xs={12}>
            <Divider sx={{ my: 0.5 }} />
            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
              Datos de Residencia
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Región de Residencia
            </Typography>
            <Typography variant="body2">{datosUsuario.regionResidencia || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Comuna de Residencia
            </Typography>
            <Typography variant="body2">{datosUsuario.comunaResidencia || 'N/A'}</Typography>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12}>
            <Divider sx={{ my: 0.5 }} />
            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
              Contacto
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Teléfono
            </Typography>
            <Typography variant="body2">{datosUsuario.telefono || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Email
            </Typography>
            <Typography variant="body2">{datosUsuario.email || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="subtitle2" color="primary">
              Dirección
            </Typography>
            <Typography variant="body2">{datosUsuario.direccion || 'N/A'}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AntUsuario.propTypes = {
  datosUsuario: PropTypes.shape({
    tipoIdentificacion: PropTypes.string,
    regionResidencia: PropTypes.string,
    comunaResidencia: PropTypes.string,
    escolaridad: PropTypes.string,
    etnia: PropTypes.string,
    numeroIdentificacion: PropTypes.string,
    nombres: PropTypes.string,
    apellidoPaterno: PropTypes.string,
    apellidoMaterno: PropTypes.string,
    fechaNacimiento: PropTypes.string,
    telefono: PropTypes.string,
    email: PropTypes.string,
    direccion: PropTypes.string,
    genero: PropTypes.string,
  }),
};

export default AntUsuario;
