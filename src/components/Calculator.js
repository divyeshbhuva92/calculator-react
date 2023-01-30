import React from "react";
import { useState } from "react";

function Calculator() {
  const [previousVal, setPreviousVal] = useState("");
  const [currentVal, setCurrentVal] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;
    // if (value === "." && !currentVal.includes(".")) {
    //   setCurrentVal((currentVal) => (currentVal += "."));
    // }
    if (value === ".") {
      if (!currentVal.includes(".")) {
        setCurrentVal((currentVal) => currentVal + ".");
      } else if (value !== "." && currentVal.includes(".")) {
        setCurrentVal((currentVal) => currentVal + value);
      }
    } else {
      setCurrentVal((currentVal) => currentVal + value);
      // console.log(value);
    }
  };

  const handleOperator = (e) => {
    const value = e.target.value;

    if (value === "ac") {
      setCurrentVal("");
      setPreviousVal("");
    } else if (value === "+") {
      add();
    } else if (value === "-") {
      substract();
    } else if (value === "*") {
      multiply();
    } else if (value === "/") {
      divide();
    } else if (value === "%") {
      percent();
    } else if (value === "^") {
      powerOf();
    } else if (value === "=") {
      equal();
    } else {
      setPreviousVal((previousVal) => currentVal + value);
      setCurrentVal("");
    }
  };

  function equal() {
    let part1 = previousVal.slice(0, -1);
    let part2 = previousVal[previousVal.length - 1];
    // console.log(part1, part2, currentVal);
    if (currentVal !== "" && part2 !== "^") {
      setPreviousVal((previousVal) => previousVal + currentVal);
      setCurrentVal((currentVal) => eval(previousVal + currentVal));
      setPreviousVal("");
    } else if (part2 == "^") {
      setCurrentVal((currentVal) => Math.pow(part1, currentVal));
      setPreviousVal("");
    } else {
      return;
    }
  }
  function add() {
    if (currentVal !== "") {
      if (previousVal === "") {
        setPreviousVal((previousVal) => currentVal + "+");
        setCurrentVal("");
      } else {
        let part1 = previousVal.slice(0, -1);
        let part2 = previousVal[previousVal.length - 1];
        if (part2 == "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "+");
          setCurrentVal("");
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "+");
          setCurrentVal("");
        }
      }
    } else return;
  }
  function substract() {
    if (currentVal !== "") {
      if (previousVal === "") {
        setPreviousVal((previousVal) => currentVal + "-");
        setCurrentVal("");
      } else {
        let part1 = previousVal.slice(0, -1);
        let part2 = previousVal[previousVal.length - 1];
        if (part2 == "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "-");
          setCurrentVal("");
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "-");
          setCurrentVal("");
        }
      }
    } else return;
  }
  function multiply() {
    if (currentVal !== "") {
      if (previousVal === "") {
        setPreviousVal((previousVal) => currentVal + "*");
        setCurrentVal("");
      } else {
        let part1 = previousVal.slice(0, -1);
        let part2 = previousVal[previousVal.length - 1];
        if (part2 == "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "*");
          setCurrentVal("");
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "*");
          setCurrentVal("");
        }
      }
    } else return;
  }
  function divide() {
    if (currentVal !== "") {
      if (previousVal === "") {
        setPreviousVal((previousVal) => currentVal + "/");
        setCurrentVal("");
      } else {
        let part1 = previousVal.slice(0, -1);
        let part2 = previousVal[previousVal.length - 1];
        if (part2 == "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "/");
          setCurrentVal("");
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "/");
          setCurrentVal("");
        }
      }
    } else return;
  }
  function percent() {
    if (previousVal === "") {
      return;
    } else {
      let part1 = previousVal.slice(0, -1);
      let part2 = previousVal[previousVal.length - 1];
      let part3 = currentVal;
      setPreviousVal(part1 + part2 + part3 + "%");
      // console.log(part1, ",", part2, ",", part3);

      if (part2 == "+" || part2 == "-") {
        setCurrentVal(eval(part1 + part2 + (part3 * part1) / 100));
        setPreviousVal("");
      } else if (part2 == "*") {
        setPreviousVal(part1 + "x" + part3 + "%");
        setCurrentVal(eval((part1 * currentVal) / 100));
        setPreviousVal("");
      } else if (part2 == "/") {
        setPreviousVal(part1 + "÷" + part3 + "%");
        setCurrentVal(eval((part1 / currentVal) * 100));
        setPreviousVal("");
      }
    }
  }
  function powerOf() {
    if (currentVal !== "" && previousVal === "") {
      setPreviousVal((previousVal) => currentVal + "^");
      setCurrentVal("");
    } else if (currentVal !== "" && previousVal !== "") {
      let part1 = previousVal.slice(0, -1);
      let part2 = previousVal[previousVal.length - 1];
      if (part2 !== "^") {
        setPreviousVal((previousVal) => eval(previousVal + currentVal) + "^");
        setCurrentVal("");
      } else {
        setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "^");
        setCurrentVal("");
      }
      // console.log(part1, ",", part2, ",", currentVal);
    } else return;
  }

  document.onkeyup = function (event) {
    let key = event.key;

    // keys for number
    if (key == 1) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 2) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 3) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 4) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 5) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 6) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 7) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 8 && event.shiftKey == false) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 9) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == 0 && event.shiftKey == false) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key == ")" || key == "Insert") {
      setCurrentVal((currentVal) => currentVal + "00");
    }
    if (key == "." && !currentVal.includes(".")) {
      setCurrentVal((currentVal) => currentVal + ".");
    }

    // all 4 operators
    if (key == "+") {
      add();
    }
    if (key == "-") {
      substract();
    }
    if (key == "*") {
      multiply();
    }
    if (key == "/") {
      divide();
    }
    if (key == "^") {
      powerOf();
    }

    // key for percentage
    if (key == "p" && event.shiftKey !== true) {
      percent();
    }

    // key for clear
    if (key == "c" && event.shiftKey !== true) {
      setCurrentVal("");
      setPreviousVal("");
    }

    // key for equal(enter key)
    if (key === "Enter" && event.shiftKey !== true) {
      equal();
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous">{previousVal}</div>
        <div className="current">{currentVal}</div>
      </div>

      <button value="ac" className="all-clear" onClick={handleOperator}>
        AC
      </button>
      <button value="^" className="all-clear" onClick={handleOperator}>
        ^
      </button>
      <button value="%" className="operation" onClick={handleOperator}>
        %
      </button>
      <button value="/" className="operation" onClick={handleOperator}>
        ÷
      </button>

      <button value="7" className="number" onClick={handleOperand}>
        7
      </button>
      <button value="8" className="number" onClick={handleOperand}>
        8
      </button>
      <button value="9" className="number" onClick={handleOperand}>
        9
      </button>
      <button value="*" className="operation" onClick={handleOperator}>
        x
      </button>

      <button value="4" className="number" onClick={handleOperand}>
        4
      </button>
      <button value="5" className="number" onClick={handleOperand}>
        5
      </button>
      <button value="6" className="number" onClick={handleOperand}>
        6
      </button>
      <button value="+" className="operation" onClick={handleOperator}>
        +
      </button>

      <button value="1" className="number" onClick={handleOperand}>
        1
      </button>
      <button value="2" className="number" onClick={handleOperand}>
        2
      </button>
      <button value="3" className="number" onClick={handleOperand}>
        3
      </button>
      <button value="-" className="operation" onClick={handleOperator}>
        -
      </button>

      <button value="0" className="number" onClick={handleOperand}>
        0
      </button>
      <button value="00" className="number" onClick={handleOperand}>
        00
      </button>
      <button value="." className="number" onClick={handleOperand}>
        .
      </button>
      <button value="=" className="equal" onClick={handleOperator}>
        =
      </button>
    </div>
  );
}

export default Calculator;
