import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/mapa" element={<Body />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/auth" element={<AuthDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
