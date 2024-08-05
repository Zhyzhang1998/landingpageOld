import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Partners from './component/Partners';
import Benefits from './component/Benefits';
import Ourprice from './component/Ourprice';
import WhyUs from './component/WhyUs';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';

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
      <Footer />
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