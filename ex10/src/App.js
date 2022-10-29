import { useEffect } from "react";

const colors = ["black", "blue", "green", "yellow", "brown", "purple", "pink", "yellow", "white"];

function App() {
  useEffect(() => {
    const colorSwitching = () => {
      const generatedColor = colors[Math.floor(Math.random() * colors.length)];
      document.querySelector("body").style.backgroundColor = generatedColor;
      document.title = generatedColor[0].toUpperCase() + generatedColor.slice(1);
    }

    // Chamamos a função antes do intervalo para não haver aqueles segundos em que não acontece nada
    colorSwitching();
    const bgInterval = setInterval(() => colorSwitching(), 10000);

    return () => clearInterval(bgInterval);
  }, [])

  return null;
}

export default App;
