import React, { useState, useEffect } from 'react';
import axios from 'axios';
function useRegions() {
	const [regions, setRegions] = useState([]);

	useEffect(() => {
		const fetchRegions = async () => {
			try {
				const response = await axios.get('https://api.shipit.cl/v/regions');
				setRegions(response.data);
			} catch (error) {
				console.error('Error fetching regions:', error);
			}
		};
		fetchRegions();
	}, []);

	return regions;
}

export default useRegions;
