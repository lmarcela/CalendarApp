import { types } from "../types/types";
import moment from "moment";

const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: "Reunion del jefe",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafafa",
      notes: "Llevar el informe",
      user: {
        _id: "123",
        name: "Marcela",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventAddNew:
      return { ...state, events: [...state.events, action.payload] };

    case types.eventSetActive:
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
    default:
      return state;
  }
};
