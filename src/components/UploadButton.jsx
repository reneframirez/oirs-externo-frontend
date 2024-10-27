import React, { useState } from 'react';
import { Button, Typography, Box, IconButton, List, ListItem, Paper, Grid } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadButton = ({ onUpload, multiple = false, acceptedTypes = '*', maxFileSize = Infinity }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = [];
    let error = '';

    files.forEach((file) => {
      if (file.size > maxFileSize) {
        error = `El archivo ${file.name} excede el tamaño máximo permitido.`;
      } else if (acceptedTypes !== '*' && !acceptedTypes.includes(file.type)) {
        error = `El archivo ${file.name} no es del tipo permitido.`;
      } else {
        validFiles.push(file);
      }
    });

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage('');
      setSelectedFiles(validFiles);
      if (onUpload) {
        onUpload(validFiles);
      }
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    if (onUpload) {
      onUpload(updatedFiles);
    }
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{ backgroundColor: 'darkblue', color: 'white', '&:hover': { backgroundColor: 'blue' } }}
          >
            Subir Archivo
            <input
              type="file"
              hidden
              multiple={multiple}
              accept={acceptedTypes}
              onChange={handleFileChange}
            />
          </Button>
        </Grid>
        {selectedFiles.length > 0 && (
          <Grid item>
            <Box>
              <Typography variant="body2">Archivos seleccionados:</Typography>
              <List component={Paper} elevation={3}>
                {selectedFiles.map((file, index) => (
                  <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>{file.name}</Typography>
                    <IconButton onClick={() => handleRemoveFile(index)} size="small" color="error">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        )}
      </Grid>
      {errorMessage && (
        <Typography color="error" variant="body2" mt={2}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default UploadButton;
