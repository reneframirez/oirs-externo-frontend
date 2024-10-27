import React from 'react';
import { Button } from '@mui/material';
import { XCircleIcon, SaveIcon } from 'lucide-react';

export const CancelButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<XCircleIcon />}
      onClick={onClick}
    >
      Cancelar
    </Button>
  );
};

export const SaveButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SaveIcon />}
      onClick={onClick}
    >
      Grabar
    </Button>
  );
};

export default { CancelButton, SaveButton };
