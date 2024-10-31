import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const DocumentEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    // Logic to save document content
    console.log('Document content saved:', content);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Contenido del Documento"
        multiline
        rows={10}
        value={content}
        onChange={handleContentChange}
        fullWidth
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Guardar Cambios
      </Button>
    </Box>
  );
};

export default DocumentEditor;
