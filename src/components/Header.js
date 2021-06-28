import React from 'react';
import './main.css';
import { Container, Row, Col, Nav, Jumbotron } from 'react-bootstrap'
import GoogleAuth from './GoogleAuth';


const Header = () => {
	return (
		<Container fluid>
			<Row>
				<h1 className="text-center">ToDo List</h1>
			</Row>
			<div className="text-right">
				<GoogleAuth />
			</div>
		</Container>
	);
}

export default Header;