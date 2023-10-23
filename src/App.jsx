import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Home />;
  }
  return null;
}

export default App;
