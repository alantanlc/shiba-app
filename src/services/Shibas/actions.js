import {
  SHIBAS_GET_SHIBAS_REQUEST,
  SHIBAS_SWIPE_RIGHT_SHIBA_REQUEST,
  SHIBAS_SWIPE_LEFT_SHIBA_REQUEST,
  SHIBAS_TOGGLE_MATCH_MODAL
} from "../types";

export const getShibas = () => ({
  type: SHIBAS_GET_SHIBAS_REQUEST
});

export const swipeRightShiba = shibaId => ({
  type: SHIBAS_SWIPE_RIGHT_SHIBA_REQUEST,
  payload: shibaId
});

export const swipeLeftShiba = shibaId => ({
  type: SHIBAS_SWIPE_LEFT_SHIBA_REQUEST,
  payload: shibaId
});

export const toggleMatchModal = shibaId => ({
  type: SHIBAS_TOGGLE_MATCH_MODAL,
  payload: shibaId
});
