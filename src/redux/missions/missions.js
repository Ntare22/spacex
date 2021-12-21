import axios from 'axios';

const GET_MISSIONS = 'spacex/missions/GET_MISSIONS';
const TOGGLE_STATUS = 'spacex/missions/TOGGLE_STATUS';

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
    const status = false;
    fetchedMissions.push({
      id, name, desc, status,
    });
  });
  dispatch({
    type: GET_MISSIONS,
    fetchedMissions,
  });
};

export const toggleMission = (payload) => ({
  type: TOGGLE_STATUS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.fetchedMissions];
    case TOGGLE_STATUS:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, status: !mission.status }
        : mission));
    default:
      return state;
  }
};

export default reducer;
