import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>My First code in React</h1>
      <Person></Person>
      <Student></Student>
      <Person></Person>
      <Student></Student>
      <Person></Person>
      <Student></Student>
    </>
  );
}

function Person() {
  const age = 25;
  const money = 1500;
  const person = { name: "Rakib", age: 12 };
  return (
    <h3>
      I am a {person["name"]}. My age is: {age}. I have {money} taka.
    </h3>
  );
}

function Student() {
  const stu = {name: 'Arian', age: 24}
  return (
    <>
      <h3>This is a student</h3>
      <p>Name: {stu.name}</p>
      <p>Age: {stu.age}</p>
    </>
  );
}

export default App;
