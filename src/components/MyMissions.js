import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col } from 'react-bootstrap';

const MyMissions = () => {
  const allMissions = useSelector((state) => state.missionReducer);
  const joinedMissions = allMissions.filter((mission) => mission.status);
  return (
    <Container>
      {joinedMissions.map((mission) => (
        <Col lg="12" key={mission.id}>
          <h3>
            {mission.name}
          </h3>
        </Col>
      ))}
      {!joinedMissions.length ? (
        <p>
          There are no reserved missions
        </p>
      ) : null}
    </Container>
  );
};

export default MyMissions;
