import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const missions = useSelector((state) => state.missionReducer);

  return (
    <div>
      This is the Missions page
      {missions.map((mission) => (
        <div key={mission.id}>
          {mission.name}
        </div>
      ))}
    </div>
  );
};

export default Missions;
