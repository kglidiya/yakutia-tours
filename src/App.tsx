import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/appRouter/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let vh = window.innerHeight * 0.01;
 
  useEffect(() => {

    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouter />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
