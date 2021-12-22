import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Card, Button, ButtonGroup,
} from 'react-bootstrap';
import { toggleMission } from '../redux/missions/missions';

const MyMissions = () => {
  const allMissions = useSelector((state) => state.missionReducer);
  const joinedMissions = allMissions.filter((mission) => mission.status);
  const dispatch = useDispatch();

  const handleStatusToggle = (id) => {
    dispatch(toggleMission(id));
  };

  return (
    <Container>
      {joinedMissions.map((mission) => (
        <Card lg="12" key={mission.id}>
          <h3>
            {mission.name}
          </h3>
          <ButtonGroup className="mb-2">
            <Button
              variant="outline-dark"
              onClick={(e) => {
                e.preventDefault();
                window.open(mission.wiki, '_blank');
              }}
            >
              Read More
            </Button>
            <Button
              variant="outline-success"
              onClick={(e) => {
                e.preventDefault();
                window.open(mission.web);
              }}
            >
              Visit Website
            </Button>
            <Button
              variant="outline-danger"
              onClick={(e) => {
                e.preventDefault();
                handleStatusToggle(mission.id);
              }}
            >
              Leave Mission
            </Button>

          </ButtonGroup>
        </Card>
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
