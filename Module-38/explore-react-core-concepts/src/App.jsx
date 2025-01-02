import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>My First code in React</h1>
      <Person></Person>
      <Device name='Laptop' price='70000'></Device>
      <Device name='mobile' price='50000'></Device>
      <Student></Student>
      <Developer></Developer>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}

function Person() {
  const age = 25;
  const money = 1500;
  const person = { name: "Rakib", age: 12 };
  return (
    <h2>
      I am a {person["name"]}. My age is: {age}. I have {money} taka.
    </h2>
  );
}

function Device(props){
  console.log(props);
  return(
    <div>
      <h3>Device Details: {props.name} Price: {props.price}</h3>
    </div>
  );
}

function Student() {
  const stu = {name: 'Arian', age: 24}
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: {stu.name}</p>
      <p>Age: {stu.age}</p>
    </div>
  );
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px',
  }
  return(
    <div style={developerStyle}>
      <h4>Devloop Developer</h4>
      <p>Coding Now</p>
    </div>
  )
}


export default App;
