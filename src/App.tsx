import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import AppRouter from "./components/appRouter/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <AppRouter />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
