import {
  SHIBAS_GET_SHIBAS_REQUEST,
  SHIBAS_GET_SHIBAS_SUCCESS,
  SHIBAS_GET_SHIBAS_FAILURE,
  SHIBAS_SWIPE_RIGHT_SHIBA_REQUEST,
  SHIBAS_SWIPE_RIGHT_SHIBA_SUCCESS,
  SHIBAS_SWIPE_RIGHT_SHIBA_FAILURE,
  SHIBAS_SWIPE_LEFT_SHIBA_REQUEST,
  SHIBAS_SWIPE_LEFT_SHIBA_SUCCESS,
  SHIBAS_SWIPE_LEFT_SHIBA_FAILURE,
  SHIBAS_TOGGLE_MATCHED_MODAL
} from "../types";

const DEFAULT_STATE = {
  shibas: [],
  isLoading: {
    getting: false,
    updating: false,
    creating: false
  },
  isEditingShiba: ""
};

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SHIBAS_GET_SHIBAS_REQUEST:
      return {
        ...state,
        shibas: [],
        isLoading: {
          ...state.isLoading,
          getting: true
        }
      };
    case SHIBAS_GET_SHIBAS_SUCCESS:
      return {
        ...state,
        shibas: action.payload,
        isLoading: {
          ...state.isLoading,
          getting: false
        }
      };
    case SHIBAS_GET_SHIBAS_FAILURE:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          getting: false
        }
      };
    case SHIBAS_TOGGLE_MATCHED_MODAL:
      return {
        ...state
      };
    case SHIBAS_SWIPE_RIGHT_SHIBA_REQUEST:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          updating: true
        }
      };
    case SHIBAS_SWIPE_RIGHT_SHIBA_SUCCESS:
      return {
        ...state,
        shibas: state.shibas.filter(t => t.id !== action.payload),
        isLoading: {
          ...state.isLoading,
          creating: false
        }
      };
    case SHIBAS_SWIPE_RIGHT_SHIBA_FAILURE:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          creating: false
        }
      };
    case SHIBAS_SWIPE_LEFT_SHIBA_REQUEST:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          updating: true
        }
      };
    case SHIBAS_SWIPE_LEFT_SHIBA_SUCCESS:
      return {
        ...state,
        shibas: state.shibas.filter(t => t.id !== action.payload),
        isLoading: {
          ...state.isLoading,
          creating: false
        }
      };
    case SHIBAS_SWIPE_LEFT_SHIBA_FAILURE:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          creating: false
        }
      };
    default:
      return state;
  }
};
