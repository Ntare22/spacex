import axios from 'axios';

const GET_ROCKETS = 'spacex/rockets/GET_ROCKETS';

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
    fetchedRockets.push({
      id, name, desc, img,
    });
  });
  dispatch({
    type: GET_ROCKETS,
    fetchedRockets,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.fetchedRockets];
    default:
      return state;
  }
};

export default reducer;
