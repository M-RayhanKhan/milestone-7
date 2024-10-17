
import './App.css'
import Count from './Count'
import Friends from './Friends'
import Posts from './Posts'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick() {
    alert('Button clicked 1')
  }
  function handleClick2() {
    alert('Button clicked 2')
  }
  function addToSix(num){
    alert(num + 6)
  }
  return (
    <>
      <h3>Vite + React</h3>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Count></Count>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>SecondClick</button>
      <button onClick={() => {alert('clicked Third')}}>Third Click</button>
      <button onClick={() => addToSix(4)}>Four</button>
      <button onClick={function handleClickMe(){
        alert('you click me bro')
      }}>Click btn</button>
      <button onClick={() => {
        alert('arrow click me')
      }}>Arrow Click</button>
    </>
  )
}

export default App
