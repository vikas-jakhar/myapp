import logo from '../src/assets/image/svg/logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Sclair from './Components/Sclair';
import Address from './Components/Address';
import Tokenomics from "./Components/Tokenomics";
import Secure from "./Components/Secure";
import Roadmap from "./Components/Roadmap";
import Accordionsec from "./Components/Accordionsec";
import Socials from "./Components/Socials";
import Preloader from "./Components/Preloader";

function App() {
  return (
    <main className=' overflow-hidden bg-black'>
      <Navbar />
      <Header />
      <Sclair />
      <Address />
      <Tokenomics />
      <Secure />
      <Roadmap />
      <Accordionsec />
      <Socials />
      <Preloader />
    </main>
  );
}

export default App;
