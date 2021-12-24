import axios from 'axios';

const GET_ROCKETS = 'spacex/rockets/GET_ROCKETS';
const ROCKET_STATUS = 'spacex/missions/ROCKET_STATUS';

const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const result = await axios(url);
  const rockets = result.data;
  const fetchedRockets = [];
  rockets.forEach((rocket) => {
    const id = rocket.rocket_id;
    const name = rocket.rocket_name;
    const desc = rocket.description;
    const img = rocket.flickr_images;
    const status = false;
    fetchedRockets.push({
      id, name, desc, img, status,
    });
  });
  dispatch({
    type: GET_ROCKETS,
    fetchedRockets,
  });
};

export const toggleRocket = (payload) => ({
  type: ROCKET_STATUS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.fetchedRockets];
    case ROCKET_STATUS:
      return state.map((rocket) => (rocket.id === action.payload
        ? { ...rocket, status: !rocket.status }
        : rocket));
    default:
      return state;
  }
};

export default reducer;
