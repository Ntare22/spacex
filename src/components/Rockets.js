import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, name, desc, img,
  } = props;

  return (
    <div className="d-flex mx-auto w-75 mt-3">
      <img src={img} alt={id} height="200" width="260" />
      <div className="p-3">
        <h4>{name}</h4>
        <p>{desc}</p>
        <Button>Reserve Rocket</Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          img={rocket.img[0]}
          name={rocket.name}
          desc={rocket.desc}
        />
      ))}
    </div>
  );
};

export default Rockets;
