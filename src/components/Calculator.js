import React from "react";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import HistorylistBox from "./HistorylistBox";
import historyIcon from "./historyIcon.svg";

function Calculator() {
  const [previousVal, setPreviousVal] = useState("");
  const [currentVal, setCurrentVal] = useState("");

  const handleNumber = (e) => {
    const value = e.target.value;

    if (value === ".") {
      if (!currentVal.includes(".")) {
        setCurrentVal((currentVal) => currentVal + ".");
      } else if (value !== "." && currentVal.includes(".")) {
        setCurrentVal((currentVal) => currentVal + value);
      }
    } else {
      setCurrentVal((currentVal) => currentVal + value);
    }
  };
  // ==========================================
  const handleOperator = (e) => {
    const value = e.target.value;

    if (value === "ac") {
      setCurrentVal("");
      setPreviousVal("");
      if (historylist.length > 0) {
        setHistorylist([]);
      }
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
    } else if (value === "1/x") {
      oneBy();
    } else if (value === "+/-") {
      positiveNegative();
    } else if (value === "=") {
      equal();
    } else {
      setPreviousVal((previousVal) => currentVal + value);
      setCurrentVal("");
    }
  };

  const handleDelete = (e) => {
    const value = e.target.value;
    if (value === "del") {
      deleteLast();
    }
  };

  function equal() {
    if (currentVal !== "") {
      let part1 = previousVal.slice(0, -1);
      let part2 = previousVal[previousVal.length - 1];
      // console.log(part1, part2, currentVal);
      if (part2 !== "^") {
        setPreviousVal((previousVal) => previousVal + currentVal);
        setCurrentVal((currentVal) => eval(previousVal + currentVal));
        setPreviousVal("");
        if (currentVal !== "" && previousVal !== "") {
          updateHistorylist(
            previousVal + currentVal,
            eval(previousVal + currentVal)
          );
        }
      } else if (part2 === "^") {
        setCurrentVal((currentVal) => Math.pow(part1, currentVal));
        setPreviousVal("");
        if (currentVal !== "" && previousVal !== "") {
          updateHistorylist(
            previousVal + currentVal,
            Math.pow(part1, currentVal)
          );
        }
      }
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
        if (part2 === "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "+");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              Math.pow(part1, currentVal)
            );
          }
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "+");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              eval(previousVal + currentVal)
            );
          }
        }
      }
    }
  }
  function substract() {
    if (currentVal !== "") {
      if (previousVal === "") {
        setPreviousVal((previousVal) => currentVal + "-");
        setCurrentVal("");
      } else {
        let part1 = previousVal.slice(0, -1);
        let part2 = previousVal[previousVal.length - 1];
        if (part2 === "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "-");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              Math.pow(part1, currentVal)
            );
          }
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "-");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              eval(previousVal + currentVal)
            );
          }
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
        if (part2 === "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "*");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              Math.pow(part1, currentVal)
            );
          }
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "*");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              eval(previousVal + currentVal)
            );
          }
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
        if (part2 === "^") {
          setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "/");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              Math.pow(part1, currentVal)
            );
          }
        } else {
          setPreviousVal((previousVal) => eval(previousVal + currentVal) + "/");
          setCurrentVal("");
          if (currentVal !== "" && previousVal !== "") {
            updateHistorylist(
              previousVal + " " + currentVal,
              eval(previousVal + currentVal)
            );
          }
        }
      }
    } else return;
  }
  function positiveNegative() {
    if (currentVal !== "") {
      setCurrentVal(-currentVal);
    } else return;
  }
  function oneBy() {
    if (currentVal !== "") {
      if (previousVal === "") {
        setCurrentVal((currentVal) => eval(1 / currentVal));
      } else {
        let part1 = previousVal.slice(0, -1);
        let part2 = previousVal[previousVal.length - 1];
        if (part2 === "^") {
          setCurrentVal((currentVal) => 1 / Math.pow(part1, currentVal));
        } else {
          setCurrentVal((currentVal) => 1 / eval(previousVal + currentVal));
        }
      }
      setPreviousVal("");
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

      if (part2 === "+" || part2 === "-") {
        setCurrentVal(eval(part1 + part2 + (part3 * part1) / 100));
        setPreviousVal("");
      } else if (part2 === "*") {
        setPreviousVal(part1 + "x" + part3 + "%");
        setCurrentVal(eval((part1 * currentVal) / 100));
        setPreviousVal("");
      } else if (part2 === "/") {
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
        if (currentVal !== "" && previousVal !== "") {
          updateHistorylist(
            previousVal + currentVal,
            eval(previousVal + currentVal)
          );
        }
      } else {
        setPreviousVal((previousVal) => Math.pow(part1, currentVal) + "^");
        setCurrentVal("");
        if (currentVal !== "" && previousVal !== "") {
          updateHistorylist(
            previousVal + currentVal,
            Math.pow(part1, currentVal)
          );
        }
      }
      // console.log(part1, ",", part2, ",", currentVal);
    } else return;
  }
  function deleteLast() {
    if (currentVal !== "") {
      let currentWithoutLastDigit = currentVal.slice(0, -1);
      setCurrentVal("");
      setCurrentVal(currentWithoutLastDigit);
    }
    return;
  }

  document.onkeyup = function (event) {
    let key = event.key;

    // keys for number
    if (key === "1") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "2") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "3") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "4") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "5") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "6") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "7") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "8" && event.shiftKey === false) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "9") {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === "0" && event.shiftKey === false) {
      setCurrentVal((currentVal) => currentVal + key);
    }
    if (key === ")" || key === "Insert") {
      setCurrentVal((currentVal) => currentVal + "00");
    }
    if (key === "." && !currentVal.includes(".")) {
      setCurrentVal((currentVal) => currentVal + ".");
    }

    // all 4 operators
    if (key === "+") {
      add();
    }
    if (key === "-") {
      substract();
    }
    if (key === "*") {
      multiply();
    }
    if (key === "/") {
      divide();
    }
    if (key === "^") {
      powerOf();
    }

    // key for percentage
    if (key === "p" && event.shiftKey !== true) {
      percent();
    }

    // key for clear
    if (key === "c" && event.shiftKey !== true) {
      setCurrentVal("");
      setPreviousVal("");
      if (historylist.length > 0) {
        setHistorylist([]);
      }
    }

    // key for equal(enter key)
    if (key === "Enter" && event.shiftKey !== true) {
      equal();
    }
    // key for delete(backspace key)
    if (key === "Backspace" && event.shiftKey !== true) {
      deleteLast();
    }
  };

  const [historylist, setHistorylist] = useLocalStorage("history", []);

  function updateHistorylist(que, ans) {
    historylist.push({ que, ans });
    // console.log(historylist);
  }

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historylist));
  }, [updateHistorylist]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history"));
    if (history) {
      setHistorylist(history);
    }
  }, []);

  const [showHistory, setShowHistory] = useState(false);
  const toggleHistory = () => setShowHistory(!showHistory);
  return (
    <div className="main-container">
      <div className="calculator">
        <img
          className="HistoryIcon"
          src={historyIcon}
          alt="History Logo"
          onClick={toggleHistory}
        />
        <div className="display">
          <div className="previous">{previousVal}</div>
          <div className="current">{currentVal}</div>
        </div>

        <button
          value="ac"
          className="operation all-clear"
          onClick={handleOperator}
        >
          AC
        </button>
        <button value="del" className="operation delete" onClick={handleDelete}>
          <span>🔙</span>
        </button>
        <button value="%" className="operation" onClick={handleOperator}>
          %
        </button>
        <button value="/" className="operation" onClick={handleOperator}>
          ÷
        </button>

        <button value="1/x" className="operation" onClick={handleOperator}>
          1/x
        </button>
        <button value="+/-" className="operation" onClick={handleOperator}>
          +/-
        </button>
        <button value="^" className="operation" onClick={handleOperator}>
          ^
        </button>
        <button value="*" className="operation multi" onClick={handleOperator}>
          x
        </button>

        <button value="7" className="number" onClick={handleNumber}>
          7
        </button>
        <button value="8" className="number" onClick={handleNumber}>
          8
        </button>
        <button value="9" className="number" onClick={handleNumber}>
          9
        </button>
        <button value="-" className="operation minus" onClick={handleOperator}>
          -
        </button>

        <button value="4" className="number" onClick={handleNumber}>
          4
        </button>
        <button value="5" className="number" onClick={handleNumber}>
          5
        </button>
        <button value="6" className="number" onClick={handleNumber}>
          6
        </button>
        <button value="+" className="operation plus" onClick={handleOperator}>
          +
        </button>

        <button value="1" className="number" onClick={handleNumber}>
          1
        </button>
        <button value="2" className="number" onClick={handleNumber}>
          2
        </button>
        <button value="3" className="number" onClick={handleNumber}>
          3
        </button>
        <button value="=" className="operation equal" onClick={handleOperator}>
          =
        </button>

        <button value="0" className="number" onClick={handleNumber}>
          0
        </button>
        <button value="00" className="number" onClick={handleNumber}>
          00
        </button>
        <button value="." className="number" onClick={handleNumber}>
          .
        </button>
      </div>

      <div className="historyBox">
        {showHistory ? <HistorylistBox historylist={historylist} /> : null}
      </div>
    </div>
  );
}

export default Calculator;
