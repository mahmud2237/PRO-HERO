import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>My First code in React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </>
  );
}

function Person() {
  const age = 25;
  const money = 1500;
  return (
    <h3>
      I am a person. My age is: {age}. I have {money} taka.
    </h3>
  );
}

export default App;
