import { types } from "../types/types";

const initialState = {
  checking: true,
  /* uid: null,
  name: null */
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return { ...state, cheking: false, ...action.payload };

    /*case types.eventSetActive:
      return { ...state, activeEvent: action.payload };

    case types.eventClearActiveEvent:
      return { ...state, activeEvent: null };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null
      }; */

    default:
      return state;
  }
};
