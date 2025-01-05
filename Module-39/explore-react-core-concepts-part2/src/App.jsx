import './App.css'

function App() {

  function handleClick(){
    alert('button 1 clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Btn 1</button>
      <button onClick={handleClick2}>Btn 2</button>
      <button onClick={() => {alert('button 3 clicked')}}>Btn 3</button>
    </>
  )
}

export default App
