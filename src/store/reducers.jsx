import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  TYPE_ONSCREEN,
  CLEAR_DISPLAY,
  STORE_MEMORY,
  RECAL_MEMORY,
  CLEAR_MEMORY,
  EQUALS,
} from "../store/actions.jsx";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  temp: null,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "*":
      return Number(num1) * Number(num2);
    case "-":
      return Number(num1) - Number(num2);
    case "/":
      return Number(num1) / Number(num2);
    default:
      return;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };
    case TYPE_ONSCREEN:
      return {
        ...state,
        total: state.total == 0 ? action.payload : state.total + action.payload,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        temp: state.total,
        operation: action.payload,
        total: 0,
      };
    case CLEAR_DISPLAY:
      return { ...state, total: 0 };
    case STORE_MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case RECAL_MEMORY:
      return {
        ...state,
        total: calculateResult(state.memory, state.total, state.operation),
      };
    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };
    case EQUALS:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
        temp: 0,
      };
    default:
      return state;
  }
};

export default reducer;
