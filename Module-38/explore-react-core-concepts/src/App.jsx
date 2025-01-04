import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>My First code in React</h1>
      <Todo task='Learn JavaScript Basic' isDone={true}></Todo>
      <Todo task='Learn JS ES6' isDone={true}></Todo>
      <Todo task='Learn React' isDone={false}></Todo>
      <Person></Person>
      <Device name='Laptop' price='70000'></Device>
      <Device name='mobile' price='50000'></Device>
      <Developer></Developer>
      <Student grade='7' score='99'></Student>
      <Student name='Khan' grade={12} score='85'></Student>
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
  // console.log(props);
  return(
    <div>
      <h3>Device Details: {props.name} Price: {props.price}</h3>
    </div>
  );
}

const {name, grade, score} = {name: 'Arian', grade: '7', score: '99'};
function Student({name='Rittik', grade=1, score=0}) {
  console.log(name, grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: {name}</p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
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
