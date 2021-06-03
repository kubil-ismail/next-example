import actionType from "./actionType";

export const GET_EXAMPLE = (payload) => ({
  type: actionType.GET,
  payload,
});

export const SET_EXAMPLE = (payload) => ({
  type: actionType.SET,
  payload,
});

export const UPDATE_EXAMPLE = (payload) => ({
  type: actionType.UPDATE,
  payload,
});

export const DELETE_EXAMPLE = (payload) => ({
  type: actionType.DELETE,
  payload,
});
