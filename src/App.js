import logo from '../src/assets/image/svg/logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Sclair from './Components/Sclair';
import Address from './Components/Address';
import Tokenomics from "./Components/Tokenomics";
import Secure from "./Components/Secure";
import Roadmap from "../src/Components/Roadmap";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sclair />
      <Address />
      <Tokenomics />
      <Secure />
      <Roadmap />
    </>
  );
}

export default App;
