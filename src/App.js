import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Partners from './components/Partners';
import Benefits from './components/Benefits';

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Partners />
      <Benefits />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
