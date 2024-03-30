import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";
import reducer, { initialState } from "./store/reducers.jsx";
import {
  CLEAR_DISPLAY,
  STORE_MEMORY,
  RECAL_MEMORY,
  CLEAR_MEMORY,
  EQUALS,
  applyNumber,
  changeOperation,
  typeOnScreen,
} from "./store/actions.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numberHandler = (e) => {
    const n = e.target.value;
    //dispatch(applyNumber(n));
    dispatch(typeOnScreen(n));
  };

  const operationHandler = (e) => {
    const o = e.target.value;
    dispatch(changeOperation(o));
  };

  const ceHandler = () => {
    dispatch({ type: CLEAR_DISPLAY });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: RECAL_MEMORY })}
                value={"MR"}
              />
              <CalcButton
                onClick={() => dispatch({ type: CLEAR_MEMORY })}
                value={"MC"}
              />
              <CalcButton
                onClick={() => dispatch({ type: STORE_MEMORY })}
                value={"M+"}
              />
            </div>
            <div className="row">
              <CalcButton onClick={numberHandler} value={1} />
              <CalcButton onClick={numberHandler} value={2} />
              <CalcButton onClick={numberHandler} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={numberHandler} value={4} />
              <CalcButton onClick={numberHandler} value={5} />
              <CalcButton onClick={numberHandler} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={numberHandler} value={7} />
              <CalcButton onClick={numberHandler} value={8} />
              <CalcButton onClick={numberHandler} value={9} />
            </div>
            <div className="row">
              <CalcButton onClick={operationHandler} value={"+"} />
              <CalcButton onClick={numberHandler} value={0} />
              <CalcButton onClick={operationHandler} value={"-"} />
            </div>
            <div className="row">
              <CalcButton onClick={operationHandler} value={"*"} />
              <CalcButton onClick={operationHandler} value={"/"} />
              <CalcButton onClick={ceHandler} value={"CE"} />
            </div>

            <div className="row eq_button">
              <CalcButton
                onClick={() => dispatch({ type: EQUALS })}
                value={"="}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
