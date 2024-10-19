import { Button, Box, Typography, Rating, TextareaAutosize } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StarRating = ({ title, value, onChange }) => (
	<Box>
		<Typography variant="subtitle1">{title}</Typography>
		<Rating
			name={title}
			value={value}
			onChange={(event, newValue) => {
				onChange(newValue)
			}}
			max={7}
		/>
	</Box>
)
StarRating.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}

const Encuesta = () => {
	const navigate = useNavigate()
	const [accessRating, setAccessRating] = useState(0)
	const [easeRating, setEaseRating] = useState(0)
	const [utilityRating, setUtilityRating] = useState(0)
	const [suggestion, setSuggestion] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log({
			accessRating,
			easeRating,
			utilityRating,
			suggestion,
		})
		navigate('/')
	}

	return (
		<>
			<Box sx={{ flex: 1, p: 2, width: '100%' }}>
				<Box sx={{ width: '100%', mx: 'auto' }}>
					<h1 className="text-2xl font-bold text-blue-700 mb-2">
						Evalúe nuestra atención
					</h1>
					<p className="text-sm text-gray-600 mb-5">
						1: Muy malo, 2: Malo, 3: Menos que regular, 4: Regular, 5: Más que regular,
						6: Bueno, 7: Muy bueno
					</p>
				</Box>

				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						width: '100%',
						mx: 'auto',
						p: 2,
						border: '1px solid #ccc',
						borderRadius: '8px',
					}}
				>
					<StarRating
						title="1.- Acceso al formulario"
						value={accessRating}
						onChange={setAccessRating}
					/>
					<StarRating
						title="2.- Facilidad para completar el formulario"
						value={easeRating}
						onChange={setEaseRating}
					/>
					<StarRating
						title="3.- Utilidad del formulario"
						value={utilityRating}
						onChange={setUtilityRating}
					/>

					<Box sx={{ mt: 2 }}>
						<Typography variant="subtitle1">Sugerencias</Typography>
						<TextareaAutosize
							minRows={3}
							placeholder="Escribe tu sugerencia aquí..."
							value={suggestion}
							onChange={(e) => setSuggestion(e.target.value)}
							style={{
								width: '100%',
								border: '1px solid #ccc',
								borderRadius: '8px',
								padding: '8px',
								boxSizing: 'border-box',
							}}
						/>
					</Box>

					<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
						<Button variant="outlined" onClick={() => navigate(-1)}>
							Volver
						</Button>
						<Button type="submit" variant="contained">
							Enviar
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Encuesta
