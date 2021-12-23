import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Card, Button, ButtonGroup,
} from 'react-bootstrap';
import { toggleRocket } from '../redux/rockets/rockets';

const MyRockets = () => {
  const allRockets = useSelector((state) => state.rocketsReducer);
  const rocketsBooked = allRockets.filter((rocket) => rocket.status);
  const dispatch = useDispatch();

  const statusToggle = (id) => {
    dispatch(toggleRocket(id));
  };

  return (
    <Container>
      {rocketsBooked.map((rocket) => (
        <Card lg="12" key={rocket.id}>
          <h3>
            {rocket.name}
          </h3>
          <ButtonGroup className="mb-2">
            <Button
              variant="outline-danger"
              onClick={(e) => {
                e.preventDefault();
                statusToggle(rocket.id);
              }}
            >
              Cancel Reservation
            </Button>

          </ButtonGroup>
        </Card>
      ))}
      {!rocketsBooked.length ? (
        <p>
          There are no reserved missions
        </p>
      ) : null}
    </Container>
  );
};

export default MyRockets;
