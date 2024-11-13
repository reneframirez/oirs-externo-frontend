import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { ChevronDown } from 'lucide-react';

export const FormSelect = ({ onChange, id, label, name, labelId, value, options, inputProps }) => {
	return (
		<Select
			labelId={labelId}
			id={id}
			name={name}
			value={value}
			label={label}
			onChange={onChange}
			inputProps={inputProps}
			IconComponent={ChevronDown}
			required
		>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</Select>
	);
};

export const IndexSelect = ({ onChange, label, value, options, selectedOption, inputProps }) => {
	return (
		<Select label={label} value={value} onChange={onChange} inputProps={inputProps} required>
			{options[selectedOption]?.map((option, index) => (
				<MenuItem key={index} value={option}>
					{option}
				</MenuItem>
			))}
		</Select>
	);
};

export default { FormSelect, IndexSelect };
