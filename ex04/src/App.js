import { useState } from 'react';
import Button from './Button.js'

function App() {
  const fonts = ["Comic Sans MS, sans-serif", "Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "Trebuchet MS, sans-serif", "Times New Roman, serif", "Georgia, serif", "Garamond, serif", "Courier New, monospace", "Brush Script MT, cursive"],
        colors = [{ code: "#ccc", name: "Default border" }, { code: "#eee", name: "Default background" }, "White", "Black", "Yellow", "Brown", "Purple", "Blue", "Orange", "Pink", "Green", "Gray"],
        borderStyles = ["Dotted", "Dashed", "Solid", "Double", "Groove", "Ridge", "Inset", "Outset", "None", "Hidden"];

  const [curText, setText] = useState("I'm a button!");
  const [curWidth, setWidth] = useState(150);
  const [curHeight, setHeight] = useState(40);
  const [curTextColor, setTextColor] = useState("black");
  const [curBackgroundColor, setBackgroundColor] = useState("#eee");
  const [curFontFamily, setFontFamily] = useState("Verdana, sans-serif");
  const [curFontSize, setFontSize] = useState("16");
  const [curBorderWidth, setBorderWidth] = useState("1");
  const [curBorderStyle, setBorderStyle] = useState("solid");
  const [curBorderColor, setBorderColor] = useState("#ccc");
  const [curBorderRadius, setBorderRadius] = useState("0");

  return (
    <>
      <h1>Button customizer</h1>
      <div>
        <h4>Settings:</h4>
        <div>
          <label htmlFor="inpt__text">Text:</label>
          <input type="text" value={ curText } id="inpt__text" onChange={ (e) => setText(e.target.value) } />
        </div>
        <div>
          <label htmlFor="inpt__width">Width:</label>
          <input type="range" min="1" max="400" step="1" defaultValue={ curWidth } id="inpt__width" onChange={ (e) => setWidth(e.target.value) } />
          <span>{ curWidth }px</span>
        </div>
        <div>
          <label htmlFor="inpt__height">Height:</label>
          <input type="range" min="1" max="400" step="1" defaultValue={ curHeight } id="inpt__height" onChange={ (e) => setHeight(e.target.value) } />
          <span>{ curHeight }px</span>
        </div>
        <div>
          <label htmlFor="inpt__textcolor">Text color:</label>
          <select id="inpt__textcolor" defaultValue={ curTextColor } onChange={ (e) => setTextColor(e.target.value) }>
            { colors.map((color, index) => {
              if (typeof color !== "object")
                return <option key={ index } value={ color.toLowerCase() }>{ color }</option>
              return false;
            }) }
          </select>
        </div>
        <div>
          <label htmlFor="inpt__backgroundcolor">Background color:</label>
          <select id="inpt__backgroundcolor" defaultValue={ curBackgroundColor } onChange={ (e) => setBackgroundColor(e.target.value) }>
            { colors.map((color, index) => {
              if (typeof color !== "object")
                return <option key={ index } value={ color.toLowerCase() }>{ color }</option>
              return <option key={ index } value={ color.code.toLowerCase() }>{ color.name }</option>
            }) }
          </select>
        </div>
        <div>
          <label htmlFor="inpt__fontfamily">Font family:</label>
          <select id="inpt__fontfamily" defaultValue={ curFontFamily } onChange={ (e) => setFontFamily(e.target.value) }>
            { fonts.map((font, index) => <option key={ index } value={ font }>{ font.split(",")[0] }</option>) }
          </select>
        </div>
        <div>
          <label htmlFor="inpt__fontsize">Font size:</label>
          <input type="range" min="1" max="72" step="1" defaultValue={ curFontSize } id="inpt__fontsize" onChange={ (e) => setFontSize(e.target.value) } />
          <span>{ curFontSize }px</span>
        </div>
        <div>
          <label htmlFor="inpt__borderwidth">Border width:</label>
          <input type="range" min="0" max="25" step="1" defaultValue={ curBorderWidth } id="inpt__borderwidth" onChange={ (e) => setBorderWidth(e.target.value) } />
          <span>{ curBorderWidth }px</span>
        </div>
        <div>
          <label htmlFor="inpt__borderstyle">Border style:</label>
          <select id="inpt__borderstyle" defaultValue={ curBorderStyle } onChange={ (e) => setBorderStyle(e.target.value) }>
            { borderStyles.map((style, index) => <option key={ index } value={ style.toLowerCase() }>{ style }</option>) }
          </select>
        </div>
        <div>
          <label htmlFor="inpt__bordercolor">Border color:</label>
          <select id="inpt__bordercolor" defaultValue={ curBorderColor } onChange={ (e) => setBorderColor(e.target.value) }>
            { colors.map((color, index) => {
              if (typeof color !== "object")
                return <option key={ index } value={ color.toLowerCase() }>{ color }</option>
              return <option key={ index } value={ color.code.toLowerCase() }>{ color.name }</option>
            }) }
          </select>
        </div>
        <div>
          <label htmlFor="inpt__borderradius">Border radius:</label>
          <input type="range" min="1" max="100" step="1" defaultValue={ curBorderRadius } id="inpt__borderradius" onChange={ (e) => setBorderRadius(e.target.value) } />
          <span>{ curBorderRadius }%</span>
        </div>
      </div>
      <br/>
      <h4>Button:</h4>
      <div>
        <Button text={ curText } width={ curWidth + "px" } height={ curHeight + "px" } textColor={ curTextColor } backgroundColor={ curBackgroundColor } font={ curFontFamily } fontSize={ curFontSize + "px" } border={ curBorderWidth + "px " + curBorderStyle + " " + curBorderColor } borderRadius={ curBorderRadius + "%" } />
      </div>
    </>
  );
}

export default App;