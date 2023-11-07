import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Form from "./components/Form";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
