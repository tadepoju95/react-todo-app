import React from 'react';
import { Link } from 'react-router-dom'
import './main.css';
import { Container, Row, Col, Nav, Jumbotron } from 'react-bootstrap'


const Header = () => {
	return (
		<Container fluid>
			<Row>
				<h1 className="text-center">ToDo List i</h1>
			</Row>
		</Container>
	);
}

export default Header;