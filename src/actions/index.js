import api from "../api";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // for (let id of userIds) {
  //   dispatch(fetchUser(id));
  // }

  // another way
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
export const fetchPosts = () => async dispatch => {
  const posts = await api.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: posts.data
  });
};

export const fetchUser = id => async dispatch => {
  const user = await api.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: user.data
  });
};

//no change in data then use
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const user = await api.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: user.data });
// });
