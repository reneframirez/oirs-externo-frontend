import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MenuItem } from '@mui/material';
function Regions() {
	const [regions, setRegions] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.shipit.cl/v/regions')
			.then((response) => {
				setRegions(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			{regions.map((region) => (
				<MenuItem key={region.id} value={region.name}>
					{region.name}
				</MenuItem>
			))}
		</div>
	);
}

export default Regions;
