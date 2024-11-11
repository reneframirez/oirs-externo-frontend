import React from 'react';
import { TextField } from '@mui/material';

export const MultiLineTextField = ({ onChange, id, label, value }) => {
	return (
		<TextField
			id={id}
			label={label}
			value={value}
			onChange={onChange}
			helperText={`${value.length}/500 caracteres`}
			inputProps={{ maxLength: 500 }}
			fullWidth
			multiline
			rows={4}
			margin="dense"
			required
		/>
	);
};

export const FormTextField = ({ onChange, name, label, value }) => {
	return (
		<TextField
			name={name}
			label={label}
			value={value}
			onChange={onChange}
			helperText={`${value.length}/500 caracteres`}
			inputProps={{ maxLength: 500 }}
			sx={{ my: 2 }}
			fullWidth
			multiline
			rows={4}
			required
		/>
	);
};

export const DateTextField = ({ onChange, name, label, value }) => {
	return (
		<TextField
			label={label}
			type="date"
			name={name}
			value={value}
			onChange={onChange}
			fullWidth
			InputLabelProps={{ shrink: true }}
			required
		/>
	);
};

export default { MultiLineTextField, FormTextField, DateTextField };
