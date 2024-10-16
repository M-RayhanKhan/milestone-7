
import './App.css'
import True from './True';
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <True task='learn react' isDone={true}></True>
      <True task='core concepts'isDone={false} ></True>
      <True task='Try JSX' isDone={true}></True>
      {/* <Device name="Laptop" price="50"></Device>
      <Device name="mobile" price="10"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score='90'></Student>
      <Student grade="7" score='50'></Student>
      <Student ></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
 return <h4>This device name: ${props.name} price: ${props.price} </h4>
}

function Person(){
  const age = 25;
  const money = 30;
  const person = {name: 'Jobayer', age:22}
  return <h3>I am {person.name} my age: {age + money}</h3>
}

function Student({grade=1, score=0}){
  // console.log(props);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>class: {grade}</p>
      <p>grade: {score}</p>
    </div>
  )
}

function Developer() {
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={devStyle}>
      <h2>work at coding</h2>
      <h4>Developer</h4>
    </div>
  )
}

export default App
