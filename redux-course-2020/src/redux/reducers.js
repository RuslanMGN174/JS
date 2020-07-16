import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS
}
  from "./types";
import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state
  }
}

const initialThemeState = {
  value: 'light',
  disabled: false
}

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }
    case DISABLE_BUTTONS:
      return { ...state, disabled: true }
    case ENABLE_BUTTONS:
      return { ...state, disabled: false }
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})