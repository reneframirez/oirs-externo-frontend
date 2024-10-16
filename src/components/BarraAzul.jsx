import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
const BarraAzul = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				width: 1,
				height: '350px',
				backgroundColor: blue[50],
				top: 0,
				zIndex: -99999,
			}}
		></Box>
	)
}

export default BarraAzul
