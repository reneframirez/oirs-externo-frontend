import React from 'react';
import { Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadButton = ({ onUpload, multiple = false }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (onUpload) {
      onUpload(files);
    }
  };

  return (
    <Button
      variant="outlined"
      component="label"
      startIcon={<UploadFileIcon />}
      >
      Subir Archivo
      <input
        type="file"
        hidden
        multiple={multiple}
        onChange={handleFileChange}
      />
    </Button>
  );
};

export default UploadButton;
