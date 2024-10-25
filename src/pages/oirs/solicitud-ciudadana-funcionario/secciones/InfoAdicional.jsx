import React from 'react';
import { Typography, Divider, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const InformacionAdicional = () => {
  const adjuntos = [
    { numero: 1, texto: 'abrir archivo (PDF)' },
    { numero: 2, texto: 'descargar informe (DOCX)' },
    { numero: 3, texto: 'ver documento (PDF)' },
    { numero: 4, texto: 'abrir presentación (DOCX)' },
  ];

  return (
    <div>
      <Typography variant="subtitle1" color="primary">
        Información Adicional
      </Typography>
      <Divider style={{ marginBottom: '8px' }} />
      {adjuntos.map((adjunto, index) => (
        index % 2 === 0 ? (
          <div key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Typography variant="body2">
                {`Adjunto N° ${adjuntos[index].numero}`} {adjuntos[index].texto}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<DownloadIcon />}
              >
                Descargar archivo
              </Button>
            </div>
            {adjuntos[index + 1] && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Typography variant="body2">
                  {`Adjunto N° ${adjuntos[index + 1].numero}`} {adjuntos[index + 1].texto}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<DownloadIcon />}
                >
                  Descargar archivo
                </Button>
              </div>
            )}
          </div>
        ) : null
      ))}
    </div>
  );
};

export default InformacionAdicional;
