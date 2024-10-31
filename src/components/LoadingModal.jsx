import React from 'react';
import { Modal, Box, CircularProgress } from '@mui/material';

const LoadingModal = ({ open }) => {
  return (
    <Modal open={open}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} color="primary" />
      </Box>
    </Modal>
  );
};

export default LoadingModal;
