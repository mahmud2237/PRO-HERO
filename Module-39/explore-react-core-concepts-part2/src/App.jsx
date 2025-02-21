import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
import Friend from './Friend';


function App() {

  function handleClick(){
    alert('button 1 clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    num = num + 5;
    alert(num);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter ></Counter>
      <button onClick={handleClick}>Btn 1</button>
      <button onClick={handleClick2}>Btn 2</button>
      <button onClick={() => {alert('button 3 clicked')}}>Btn 3</button>
      <button onClick={() => addToFive(3)}>Btn 4</button>
    </>
  )
}

export default App
