import React, { useState } from 'react';
import './Destination.css';
import GoogleMap from '../GoogleMap/GoogleMap'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'
import { Form, Button } from 'react-bootstrap';


const Destination = () => {
	const { id } = useParams();
	const vehicle = fakeData.find(vehicle => vehicle.id == id);
	const [form, setForm] = useState(true);
	const [place, setPlace] = useState({
		pickFrom: '',
		pickTo: ''
	});
	const { name, image } = vehicle;
	const showForm = (e) => {
		setForm(!form)
		e.preventDefault()
	}
	const handlePlace = e => {
		const { name, value } = e.target;
		setPlace(prevState => ({
			...prevState,
			[name]: value
		}));
	};
	{
		console.log(place.pickFrom, place.pickTo)
	}
	return (
		<div className="destination-container">
			<div className="search-field">
				{form === true && <Form onSubmit={showForm}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Pick From</Form.Label>
						<Form.Control name="pickFrom" type="text" onBlur={handlePlace} />

					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Pick To </Form.Label>
						<Form.Control name="pickTo" type="text" onBlur={handlePlace} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Date (optional) </Form.Label>
						<Form.Control type="date" />
					</Form.Group>

					<Button variant="primary" type="submit" >
						Submit
 					 </Button>
				</Form>}
				{!form && <div style={{ background: 'salmon', color: '#fff', textAlign: 'center' }}><h3>{place.pickFrom} To {place.pickTo}</h3></div>}
				{form === false && <div style={{ textAlign: 'center' }}><h2>{name}</h2>  <img style={{ width: '100px' }} src={image} alt="" /><span className="display-3 font-weight-bold">$100</span></div>}
			</div>
			<div className="map-field" style={{ width: "500px" }}>
				<GoogleMap></GoogleMap>
			</div>

		</div>
	);
};

export default Destination;
