// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import colors from "./data/data.js";
import ColorBoxesContainer from './Components/ColorBoxesContainer.jsx'


function getColors() {
    let copyColors = [...colors];
    let newColors = [];
    while (copyColors.length > 0) {
        let n = Math.floor(Math.random() * copyColors.length);
        newColors.push(copyColors[n]);
        copyColors.splice(n, 1);
    }
    return newColors;
}


function App() {
  const newColors = getColors();
  return (
    <div>
      <ColorBoxesContainer colors={newColors} />
    </div>
  );

  // const [count, setCount] = useState(0)
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
