import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import BarraAzul from '../components/BarraAzul.jsx'
import { Box, Container } from '@mui/material'

const DefaultLayout = () => {
	return (
		<Box sx={{position:'relative'}}>
			<BarraAzul />
			<Container maxWidth={'xl'} sx={{py:4}}>
				<Outlet />
			</Container>
		</Box>

	)
}

export default DefaultLayout
