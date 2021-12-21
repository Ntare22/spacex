import axios from 'axios';

const GET_MISSIONS = 'spacex/missions/GET_MISSIONS';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMissions = () => async (dispatch) => {
  const result = await axios.get(url);
  const missions = result.data;
  const fetchedMissions = [];
  missions.forEach((mission) => {
    const id = mission.mission_id;
    const name = mission.mission_name;
    const desc = mission.description;
    fetchedMissions.push({ id, name, desc });
  });
  dispatch({
    type: GET_MISSIONS,
    fetchedMissions,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.fetchedMissions];
    default:
      return state;
  }
};

export default reducer;
