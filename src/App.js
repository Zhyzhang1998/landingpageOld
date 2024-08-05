import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Herosection from './Component/Herosection';
import Partners from './Component/Partners';
import Benefits from './Component/Benefits';
import Ourprice from './Component/Ourprice';
import WhyUs from './Component/WhyUs';
import ContactForm from './Component/ContactForm';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Partners />
      <Benefits />
      <Ourprice />
      <WhyUs />
      <ContactForm />
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