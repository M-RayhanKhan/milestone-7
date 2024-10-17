
import Actor from './Actor';
import './App.css'
import BookStore from './BookStore';
import Singer from './Singer';
import True from './True';
function App() {

  const actors = ['shakib khan', 'salman shah', 'ruble', 'dipjol', 'manna']
  const singerName = [
    {id:1, name: 'Abu said', age: 28},
    {id:2, name: 'Abu Rayhan', age: 27},
    {id:3, name: 'Bodurozzaman', age: 29},
  ]

  const books = [
    {id:1, name:'Physics', price: 150},
    {id:2, name:'Math', price: 250},
    {id:3, name:'Biology', price: 180},
    {id:4, name:'Chemistry', price: 180},
  ]
  return (
    <>
      <h1>Vite + React</h1>
    <BookStore books={books}></BookStore>
      {
        singerName.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }


      <Actor name="Shakib khan"></Actor>
      {
        actors.map(act => <Actor name={act} ></Actor>)
      }
      {/* <True task='learn react' isDone={true}></True>
      <True task='core concepts'isDone={false} ></True>
      <True task='Try JSX' isDone={true}></True> */}
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
