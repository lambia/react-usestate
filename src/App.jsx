import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let versioneApp = "0.9.15 BETA"; //<--- NON REATTIVO!
  //const versioneApp = useState("0.9.15 BETA"); //<--- REATTIVO!
  const [versioneApp, setVersioneApp] = useState("0.9.15 BETA"); //<--- REATTIVO!
  // con versioneApp --> leggo
  // con setVersioneApp("nuovo") --> scrivo

  // const [valore, setter] = useState(101);
  const [count, setCount] = useState(101);

  function saluta() {
    // alert("nuovo ciao");

    // versioneApp = "nuova versione" //non funziona
    // setVersioneApp("nuova versione"); //funziona perfettamente
    // setVersioneApp(vecchioValore => "nuovo"); //arrow function basata su valore attuale
    setVersioneApp(() => "nuovo"); //arrow function che se ne frega
  }

  // const saluta = () => {
  //   alert("saluti da arrow function");
  // };

  function incrementa() {
    // setCount(count + 1); //funziona ma è asincrono
    // setCount(count + 1); //quindi la seconda volta non funziona

    setCount((count) => count + 1); //questo funziona sempre
    setCount(count => count + 1); //questo funziona sempre
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Stai usando la versione: {versioneApp}</p>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={saluta}>Cliccami</button>
      </div>
      <div className="card">
        <button onClick={incrementa}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
