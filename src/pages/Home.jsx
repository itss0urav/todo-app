import React from "react";
import Navbar from "../components/Navbar";
import Todo from "./todo";
import Student from "./student";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Todo/>
      <Student/>
    </div>
  );
};

export default Home;
