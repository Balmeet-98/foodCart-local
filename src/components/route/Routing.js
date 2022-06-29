import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Auth/Login";
import { SignupCard } from "../Auth/SignupCard";
import { Home } from "../0auth/Home";
import { Contact } from "../0auth/Contact";
import { About } from "../0auth/About";
import { Protected } from "../Auth/Protected";
export const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signupCard" element={<SignupCard />} />
        <Route exact path="/dashboard/*" element={<Protected/>} />
        <Route exact path="/about/*" element={<Protected />} />
        <Route exact path="/home" element={<Protected />} />
        <Route exact path="/contact" element={<Protected />} />
      </Routes>
    </>
  );
};
