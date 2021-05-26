import { useState } from "react";
const applicationStates = Object.freeze({
  OPERAND1: "operand1",
  OPERAND2: "operand2",
  RES: "res",
});
const operators = Object.freeze({
  ADD: "add",
  SUBTRACT: "sub",
  MULTIPLY: "mul",
  DIVIDE: "div",
});

const createState = function () {
  this.state = applicationStates.OPERAND1;
  this.operand1 = {
    num: 0,
    decPart: "",
    dec: false,
    neg: false,
  };
  this.operand2 = {
    num: 0,
    decPart: "",
    dec: false,
    neg: false,
  };
  this.res = 0;
  this.operator = "";

  return this;
};

function App() {
  const [state, setState] = useState(new createState());

  const handleClick = (e) => {
    switch (e.target.id) {
      case "clear":
        setState(new createState());
        break;
      case "zero":
        if (
          state.state === applicationStates.OPERAND1 &&
          getNum(state.operand1) !== 0
        ) {
          if (!state.operand1.dec) {
            setState({
              ...state,
              operand1: { ...state.operand1, num: state.operand1.num + "0" },
            });
          }
        }
        if (
          state.state === applicationStates.OPERAND2 &&
          getNum(state.operand2) !== 0
        ) {
          if (!state.operand2.dec) {
            setState({
              ...state,
              operand2: { ...state.operand2, num: state.operand2.num + "0" },
            });
          }
        }
        break;
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine": {
        if (state.state === applicationStates.RES) {
          // Reset to factory settings
          setState(() => {
            return new createState();
          });
        }
        const num = e.target.innerText;
        setState((prevState) => {
          const operand = getOperand(prevState);
          if (!prevState[operand].dec) {
            return {
              ...prevState,
              [operand]: {
                ...prevState[operand],
                num: prevState[operand].num + num,
              },
            };
          } else {
            return {
              ...prevState,
              [operand]: {
                ...prevState[operand],
                decPart: prevState[operand].decPart + num,
              },
            };
          }
        });
        break;
      }
      case "divide":
      case "multiply":
      case "add": {
        setState((prevState) => {
          if (prevState.state === applicationStates.OPERAND1) {
            return {
              ...prevState,
              state: applicationStates.OPERAND2,
              operator: operators[e.target.id.toUpperCase()],
            };
          } else if (
            prevState.state === applicationStates.OPERAND2 &&
            Number(getNum(prevState.operand2)) === 0
          ) {
            return {
              ...prevState,
              operand2: { ...prevState.operand2, neg: false },
              operator: operators[e.target.id.toUpperCase()],
            };
          } else if (prevState.state === applicationStates.OPERAND2) {
            const emptyState = new createState();
            return {
              ...emptyState,
              operand1: { ...emptyState.operand1, num: calcRes(prevState) },
              operator: operators[e.target.id.toUpperCase()],
              state: applicationStates.OPERAND2,
            };
          } else if (prevState.state === applicationStates.RES) {
            const emptyState = new createState();
            return {
              ...emptyState,
              operand1: { ...emptyState.operand1, num: prevState.res },
              operator: operators[e.target.id.toUpperCase()],
              state: applicationStates.OPERAND2,
            };
          }
        });
        break;
      }
      case "subtract": {
        setState((prevState) => {
          if (
            prevState.state === applicationStates.OPERAND1 &&
            Number(getNum(prevState.operand1)) === 0
          ) {
            return {
              ...prevState,
              operand1: { ...prevState.operand1, neg: true },
            };
          } else if (prevState.state === applicationStates.OPERAND1) {
            return {
              ...prevState,
              operator: operators.SUBTRACT,
              state: applicationStates.OPERAND2,
            };
          } else if (
            prevState.state === applicationStates.OPERAND2 &&
            Number(getNum(prevState.operand2)) === 0
          ) {
            return {
              ...prevState,
              operand2: { ...prevState.operand2, neg: true },
            };
          } else if (prevState.state === applicationStates.OPERAND2) {
            const emptyState = new createState();
            return {
              ...emptyState,
              operand1: { ...emptyState.operand1, num: calcRes(prevState) },
              operator: operators.SUBTRACT,
              state: applicationStates.OPERAND2,
            };
          } else if (prevState.state === applicationStates.RES) {
            const emptyState = new createState();
            return {
              ...emptyState,
              operand1: { ...emptyState.operand1, num: prevState.res },
              operator: operators.SUBTRACT,
              state: applicationStates.OPERAND2,
            };
          }
        });
        break;
      }
      case "equals": {
        if (
          state.state === applicationStates.OPERAND2 &&
          getNum(state.operand2) !== 0
        ) {
          setState((prevState) => {
            const emptyState = new createState();
            return {
              ...emptyState,
              state: applicationStates.RES,
              res: calcRes(prevState),
            };
          });
        }
        break;
      }
      case "decimal": {
        if (state.state === applicationStates.RES) break;
        setState((prevState) => {
          const operand = getOperand(prevState);
          return {
            ...prevState,
            [operand]: { ...prevState[operand], dec: true },
          };
        });
        break;
      }
      default:
        break;
    }
  };

  const calcRes = (myState = state) => {
    switch (myState.operator) {
      case operators.ADD:
        return (
          Number(getNum(myState.operand1)) + Number(getNum(myState.operand2))
        );
      case operators.SUBTRACT:
        return (
          Number(getNum(myState.operand1)) - Number(getNum(myState.operand2))
        );
      case operators.MULTIPLY:
        return (
          Number(getNum(myState.operand1)) * Number(getNum(myState.operand2))
        );
      case operators.DIVIDE:
        return (
          Number(getNum(myState.operand1)) / Number(getNum(myState.operand2))
        );
      default:
        break;
    }
  };

  const getOperand = (myState = state) =>
    myState.state === applicationStates.OPERAND1 ? "operand1" : "operand2";

  const getNum = (operand) => {
    return (
      (operand.neg ? "-" : "") +
      Number(operand.num) +
      (operand.dec ? "." + Number(operand.decPart) : "")
    );
  };
  return (
    <div className="w-72 m-auto mt-40">
      <div className="rounded font-mono grid grid-cols-4 grid-rows-6 bg-gray-900 gap-0.5 p-1">
        <div
          id="display"
          className="col-span-4 bg-gray-900 text-gray-100 pt-5 text-right"
        >
          {state.state === applicationStates.RES
            ? state.res
            : state.state === applicationStates.OPERAND1
            ? getNum(state.operand1)
            : getNum(state.operand2)}
        </div>
        <button
          onClick={handleClick}
          id="clear"
          className="rounded-sm hover:bg-red-800 col-span-2 bg-red-600 text-gray-100 p-4 -mt-4 text-center"
        >
          AC
        </button>
        <button
          onClick={handleClick}
          id="divide"
          className="rounded-sm hover:bg-gray-700 bg-gray-500 text-gray-100 p-4 text-center -mt-4"
        >
          /
        </button>
        <button
          onClick={handleClick}
          id="multiply"
          className="rounded-sm hover:bg-gray-700 bg-gray-500 text-gray-100 p-4 text-center -mt-4"
        >
          X
        </button>
        <button
          onClick={handleClick}
          id="seven"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          7
        </button>
        <button
          onClick={handleClick}
          id="eight"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          8
        </button>
        <button
          onClick={handleClick}
          id="nine"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          9
        </button>
        <button
          onClick={handleClick}
          id="subtract"
          className="rounded-sm hover:bg-gray-700 bg-gray-500 text-gray-100 p-4 text-center"
        >
          -
        </button>
        <button
          onClick={handleClick}
          id="four"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          4
        </button>
        <button
          onClick={handleClick}
          id="five"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          5
        </button>
        <button
          onClick={handleClick}
          id="six"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          6
        </button>
        <button
          onClick={handleClick}
          id="add"
          className="rounded-sm hover:bg-gray-700  bg-gray-500 text-gray-100 p-4 text-center"
        >
          +
        </button>
        <button
          onClick={handleClick}
          id="one"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          1
        </button>
        <button
          onClick={handleClick}
          id="two"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          2
        </button>
        <button
          onClick={handleClick}
          id="three"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          3
        </button>
        <button
          onClick={handleClick}
          id="equals"
          className="rounded-sm hover:bg-blue-900 row-span-2 bg-blue-800 text-gray-100 p-4 text-center align-middle"
        >
          =
        </button>
        <button
          onClick={handleClick}
          id="zero"
          className="rounded-sm hover:bg-gray-900 col-span-2 bg-gray-700 text-gray-100 p-4 text-center"
        >
          0
        </button>
        <button
          onClick={handleClick}
          id="decimal"
          className="rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center"
        >
          .
        </button>
      </div>
    </div>
  );
}

export default App;
