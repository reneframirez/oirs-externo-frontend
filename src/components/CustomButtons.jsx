import React from 'react';
import { Button } from '@mui/material';
import {
	XCircleIcon,
	SaveIcon,
	SendIcon,
	ArrowLeft,
	SearchIcon,
	SearchX,
	CheckIcon,
} from 'lucide-react';

export const CancelButton = ({ onClick }) => {
	return (
		<Button
			variant="outlined"
			sx={{ mx: 1 }}
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
			type="submit"
			variant="contained"
			sx={{ mx: 1 }}
			startIcon={<SaveIcon />}
			onClick={onClick}
		>
			Grabar
		</Button>
	);
};

export const SendButton = ({ onClick }) => {
	return (
		<Button
			type="submit"
			variant="contained"
			sx={{ mx: 1 }}
			color="primary"
			startIcon={<SendIcon />}
			onClick={onClick}
		>
			Enviar
		</Button>
	);
};

export const ConfirmButton = ({ onClick }) => {
	return (
		<Button
			type="submit"
			variant="contained"
			sx={{ mx: 1 }}
			color="primary"
			startIcon={<CheckIcon />}
			onClick={onClick}
		>
			Confirmar
		</Button>
	);
};

export const ClearFilterButton = ({ onClick }) => {
	return (
		<Button
			variant="contained"
			sx={{ mx: 1 }}
			color="primary"
			startIcon={<SearchX />}
			onClick={onClick}
		>
			Limpiar Filtro
		</Button>
	);
};

export const SearchButton = ({ onClick }) => {
	return (
		<Button
			variant="contained"
			sx={{ mx: 1 }}
			color="primary"
			startIcon={<SearchIcon />}
			onClick={onClick}
		>
			Buscar
		</Button>
	);
};

export const BackButton = ({ onClick }) => {
	return (
		<Button
			variant="outlined"
			sx={{ mx: 1 }}
			color="primary"
			startIcon={<ArrowLeft />}
			onClick={() => window.history.back()}
		>
			Volver
		</Button>
	);
};

export default {
	CancelButton,
	SaveButton,
	BackButton,
	SendButton,
	ConfirmButton,
	ClearFilterButton,
	SearchButton,
};
