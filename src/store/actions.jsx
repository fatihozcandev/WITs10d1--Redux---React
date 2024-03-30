export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const TYPE_ONSCREEN = "TYPE_ONSCREEN";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const STORE_MEMORY = "M+ TOTAL ===> MEMORY";
export const RECAL_MEMORY = "MR TOTAL+= MEMORY";
export const CLEAR_MEMORY = "MEMORY_CLEAR";

export const EQUALS = "EQUALS";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const typeOnScreen = (number) => {
  return { type: TYPE_ONSCREEN, payload: number.toString() };
};

/* export const clearDisplay =()=>{
  return { type: CLEAR_DISPLAY, }
} */
