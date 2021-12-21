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
import { getMissions } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    name, desc,
  } = props;

  return (
    <tr className="d-flex">
      <th className="col-2">{name}</th>
      <td className="col-7">{desc}</td>
      <td className="col"><Badge bg="secondary">NOT A MEMBER</Badge></td>
      <td className="col"><Button variant="outline-secondary">Join Mission</Button></td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const missions = useSelector((state) => state.missionReducer);

  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover vertical-align="middle">
            <thead>
              <tr className="d-flex">
                <th className="col-2">Mission</th>
                <th className="col-7">Description</th>
                <th className="col">Status</th>
                <th className="col"> </th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <Mission key={mission.id} name={mission.name} desc={mission.desc} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Missions;
