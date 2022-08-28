
import './App.css';
import ContactBar from "./components/ContactBar"
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Sections/Home';
import About from './Sections/About';
import Work from './Sections/Work';
import Contact from './Sections/Contact';
function App() {
  return (
    <main className='main'>
      <Navbar/>
      <div className="app_section_container">
        <Home />
        <About />
        
        <Work />
        <Contact />
      </div>
      <ContactBar />
      <Footer />
    </main>
  );
}

export default App;