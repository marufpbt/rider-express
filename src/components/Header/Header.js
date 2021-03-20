import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div>
			<Navbar expand="lg">
				<Navbar.Brand>Rider Express</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/">Home</Link>
						<Link to="/destination">Destination</Link>
						<Link to="/blog">Blog</Link>
						<Link to="/contact">Contact</Link>
					</Nav>
					<Form inline>
						<Link to="/login"><Button variant="success">Login</Button></Link>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
