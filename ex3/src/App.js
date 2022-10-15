/* eslint no-eval: 0 */

import { useState } from "react";

function App() {
  const [ currentExpression, setExpression ] = useState("");
  
  const calculate = () => {
    try {
      const result = eval(currentExpression.replace(/[^-()\d/*+.]/g, ''));
      return ((result.toString().indexOf(".") > -1) && (result.toString().split(".")[1].length > 3)) ? setExpression(result.toFixed(3)) : setExpression(result);
    } catch {
      const wrapperElm = document.querySelector(".calculator__wrapper");
      wrapperElm.classList.add("error");
      setTimeout(() => wrapperElm.classList.remove("error"), 500);
      return setExpression(currentExpression);
    }
  }

  return (
    <div className="calculator__wrapper">
      <div className="calculator__row">
        <input type="text" value={ currentExpression } disabled />
      </div>
      <div className="calculator__row">
        <button onClick={ () => setExpression("") } className="triple__button" type="button">AC</button>
        <button onClick={ () => setExpression(currentExpression + "/") } className="button" type="button">/</button>
      </div>
      <div className="calculator__row">
        <button onClick={ () => setExpression(currentExpression + "7") } className="button" type="button">7</button>
        <button onClick={ () => setExpression(currentExpression + "8") } className="button" type="button">8</button>
        <button onClick={ () => setExpression(currentExpression + "9") } className="button" type="button">9</button>
        <button onClick={ () => setExpression(currentExpression + "*") } className="button" type="button">*</button>
      </div>
      <div className="calculator__row">
        <button onClick={ () => setExpression(currentExpression + "4") } className="button" type="button">4</button>
        <button onClick={ () => setExpression(currentExpression + "5") } className="button" type="button">5</button>
        <button onClick={ () => setExpression(currentExpression + "6") } className="button" type="button">6</button>
        <button onClick={ () => setExpression(currentExpression + "-") } className="button" type="button">-</button>
      </div>
      <div className="calculator__row">
        <button onClick={ () => setExpression(currentExpression + "1") } className="button" type="button">1</button>
        <button onClick={ () => setExpression(currentExpression + "2") } className="button" type="button">2</button>
        <button onClick={ () => setExpression(currentExpression + "3") } className="button" type="button">3</button>
        <button onClick={ () => setExpression(currentExpression + "+") } className="button" type="button">+</button>
      </div>
      <div className="calculator__row">
        <button onClick={ () => setExpression(currentExpression + "0") } id="button__zero" className="double__button" type="button">0</button>
        <button onClick={ () => setExpression(currentExpression + ".") } className="button" type="button">.</button>
        <button onClick={ calculate } id="button__equals" className="button" type="button">=</button>
      </div>
    </div>
  );
}

export default App;
