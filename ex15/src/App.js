import { useState } from "react";
import { FaDivide, FaTimes, FaMinus, FaPlus, FaEquals, FaBackspace } from "react-icons/fa";
import { solveExpression } from "./Expression";

const operators = ["*", "/", "+", "-", "."];

function App() {
  const [exp, setExp] = useState("");
  const [lastExp, setLastExp] = useState("0");

  const updateExp = (val) => {
    if (!((operators.includes(val) && exp === "") || (operators.includes(val) && operators.includes(exp.slice(-1))))) {
      setExp(exp + val);
    }
  }

  const calculate = () => {
    setLastExp(exp);
    setExp(solveExpression(exp).toString());
  }

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-md border-4 border-gray-100">
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700 overflow-wrap-normal">{ lastExp.replace("-", "-") }</div>
          <div className="text-black overflow-x-auto overflow-y-hidden font-bold text-3xl">{ exp || 0 }</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 rounded-xl w-full h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => setExp("") }>AC</button>
            <div className="flex w-full ml-3 justify-between">
              <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => setExp((cur) => cur.slice(0, -1)) }><FaBackspace className="h-4 w-4" /></button>
              <button className="bg-orange-400 rounded-xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center hover:bg-orange-500 transition ease-in-out" onClick={ () => updateExp("/") }><FaDivide className="h-3 w-3" /></button>
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("7") }>7</button>
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("8") }>8</button>
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("9") }>9</button>
            <button className="bg-orange-400 rounded-xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center hover:bg-orange-500 transition ease-in-out" onClick={ () => updateExp("*") }><FaTimes className="h-3 w-3" /></button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("4") }>4</button>
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("5") }>5</button>
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("6") }>6</button>
            <button className="bg-orange-400 rounded-xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center hover:bg-orange-500 transition ease-in-oute" onClick={ () => updateExp("-") }><FaMinus className="h-3 w-3" /></button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("1") }>1</button>
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("2") }>2</button>
            <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("3") }>3</button>
            <button className="bg-orange-400 rounded-xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center hover:bg-orange-500 transition ease-in-out" onClick={ () => updateExp("+") }><FaPlus className="h-3 w-3" /></button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="bg-gray-200 rounded-xl w-full h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp("0") }>0</button>
            <div className="flex w-full ml-3 justify-between">
              <button className="bg-gray-200 rounded-xl w-12 h-12 text-black font-medium flex justify-center items-center hover:bg-gray-300 transition ease-in-out" onClick={ () => updateExp(".") }>.</button>
              <button className="bg-blue-400 rounded-xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center hover:bg-blue-500 transition ease-in-out" onClick={ calculate }><FaEquals className="h-3 w-3" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;