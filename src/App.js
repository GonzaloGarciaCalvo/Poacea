import './App.css';
import LandingSection from './Components/LandingSection';
import NavBar from './Components/Navbar/NavBar';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingSection />
      <Footer/>
    </div>
  );
}

export default App;
