import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';

const Profile = () => (
  <>
    <Container className="profile">
      <Row>
        <Col md="6">
          <h2 className="text-center">My Missions</h2>
          <MyMissions />
        </Col>
        <Col md="6">
          <h2 className="text-center">My Rockets</h2>
          <MyRockets />
        </Col>
      </Row>
    </Container>
  </>
);

export default Profile;
