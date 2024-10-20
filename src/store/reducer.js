import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formularioData: {},
	reneGay: {},
};

const formularioSlice = createSlice({
	name: 'formulario',
	initialState,
	reducers: {
		setFormularioData(state, action) {
			state.formularioData = action.payload;
		},
		setReneChupalo(state, action) {
			state.reneGay = action.payload;
		},
	},
});

export const { setFormularioData } = formularioSlice.actions;

export default formularioSlice.reducer;
