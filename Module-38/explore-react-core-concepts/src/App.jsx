import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {

  const actors = ['Salman Shah', 'Sakib', 'sadib', 'rajib', 'Raj', 'Jasim', 'Rubel'];
  
  const books = [
    {id: 1, name: 'ontorjala', price: 120},
    {id: 2, name: 'vag hasina vag', price: 130},
    {id: 3, name: 'gore baire', price: 120},
    {id: 4, name: 'chithi', price: 160},
    {id: 5, name: 'kopalpora', price: 180},
  ];
  
  const singers = [
    {name:'Dr. Mahfuzur Rahman', age: 68},
    {name:'Eva Rahman', age: 55},
    {name:'Nanci', age: 46},
    {name:'Pritom hasan', age: 38},

  ];


  return (
    <>
      <h1>My First code in React</h1>
      <BookStore books={books}></BookStore>
      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task='Learn JavaScript Basic' isDone={true}></Todo>
      <Todo task='Learn JS ES6' isDone={true}></Todo>
      <Todo task='Learn React' isDone={false}></Todo> */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
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
