import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const DocumentEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
    //content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  const handleSave = () => {
    // Logic to save document content
    console.log('Document content saved:', content);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Materia:"
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
