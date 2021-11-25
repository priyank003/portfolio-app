import "./App.css";
import Landing from "./components/pages/home/Landing";
import About from "./components/pages/home/About";
import Works from "./components/pages/home/Works";
import Footer from "./components/pages/home/Footer";
function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
