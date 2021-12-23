import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Badge,
  Container,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, toggleRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, desc, img, status,
  } = props;

  const statusToggle = (id) => {
    dispatch(toggleRocket(id));
  };

  return (
    <div className="d-flex mx-auto mt-3">
      <img src={img} alt={id} height="200" width="260" />
      <div className="p-3">
        <h4>{name}</h4>
        <p>
          <Badge
            bg={status ? 'info' : ''}
          >
            {status ? 'Reserved' : ''}
          </Badge>
          {desc}
        </p>
        <Button
          variant={status ? 'outline-danger' : 'primary'}
          onClick={(e) => {
            e.preventDefault();
            statusToggle(id);
          }}
        >
          {status ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <Container className="rockets">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          img={rocket.img[0]}
          name={rocket.name}
          desc={rocket.desc}
          status={rocket.status}
        />
      ))}
    </Container>
  );
};

export default Rockets;
