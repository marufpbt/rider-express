import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import VehicleDetail from '../VehicleDetail/VehicleDetail';
const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(fakeData)
	}, []);
	return (
		<div>
			<div class="vehicle-container">
				{
					data.map(vehicle => <VehicleDetail key={vehicle.id} vehicle={vehicle}></VehicleDetail>)
				}
			</div>
		</div>
	);
};

export default Home;
