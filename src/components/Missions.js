import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, toggleMission } from '../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, desc, status,
  } = props;

  const handleStatusToggle = (id) => {
    dispatch(toggleMission(id));
  };

  return (
    <tr>
      <th className="col-2">{name}</th>
      <td className="col-7">{desc}</td>
      <td className="col align-middle">
        <Badge
          bg={status ? 'info' : 'secondary'}
        >
          {status ? 'Active Member' : 'NOT A MEMBER'}
        </Badge>
      </td>
      <td className="col align-middle">
        <Button
          variant={status ? 'outline-danger' : 'outline-secondary'}
          onClick={(e) => {
            e.preventDefault();
            handleStatusToggle(id);
          }}
        >
          {status ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  status: PropTypes.bool,
};
Mission.defaultProps = {
  status: false,
};

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);

  return (
    <Container className="missions">
      <Row>
        <Col>
          <Table striped bordered hover vertical-align="middle">
            <thead>
              <tr>
                <th className="col-2">Mission</th>
                <th className="col-7">Description</th>
                <th className="col">Status</th>
                <th className="col"> </th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <Mission
                  key={mission.id}
                  id={mission.id}
                  name={mission.name}
                  desc={mission.desc}
                  status={mission.status}
                />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Missions;
