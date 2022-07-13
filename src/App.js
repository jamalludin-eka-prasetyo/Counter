import { useState } from 'react'
import './App.css';
import classNames from 'classnames';
import Swal from 'sweetalert2'
// const Swal = require('sweetalert2')
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 


import Navbar from './components/Navbar'
import Container from './components/Container'
import Form from './components/Form'
import Info from './components/Info';
import Todos from './components/Todos';
import Blank from './components/Blank';


function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Beng beng', count: 10},
    {title: 'Ayam Gepuk', count:10}
  ])

  // penambahan count
  const handleAdititionCount = (index) =>{
    const newTodos = [...todos]
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your list has been added',
      showConfirmButton: true,
      confirmButtonText: 'Yipiiiy',
      allowOutsideClick: false,
      showCloseButton: true
      // timer: 1500
    })
    newTodos[index].count =  newTodos[index].count + 1;
    setTodos(newTodos)
  } 

  // pengurangan count
  const handleMinusCount = (index) =>{
    const minusTodos = [...todos]

    //validasi jumlah tidak boleh sampai - 
    if (minusTodos[index].count > 0) {
      minusTodos[index].count = minusTodos[index].count - 1;
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your list has been deleted',
        showConfirmButton: true,
        confirmButtonText: 'Yipiiiy',
        allowOutsideClick: false,
        showCloseButton: true
      })
      minusTodos.splice(index,1)
    }

    setTodos(minusTodos)
  }

  // submit input
  const handleSubmitButton = (e)=>{
    e.preventDefault()

    //validasi input tidak boleh kosong
    if (!value) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error!',
        confirmButtonText: 'Understood',
        allowOutsideClick: false,
        showCloseButton: true
      })
      return
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your list has been added',
      showConfirmButton: true,
      confirmButtonText: 'Yipiiiy',
      allowOutsideClick: false,
      showCloseButton: true
      // timer: 1500
    })
    const addedTodos = [...todos, {
      title : value,
      count : 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const getTotalCount = () =>{
    const totalCount = todos.reduce((total, num) => {
      return total + num.count
    },0)
    return totalCount
  }

  // console.log(value);
  //react fragment
  return(
    <>
  <Navbar/>

  <Container>
    
    <Form 
    onSubmit = {handleSubmitButton}
    onChange = {(e) =>  setValue(e.target.value)}
    value = {value}
    />
    
    {/* info section */}
      <Info 
        todosLength = {todos.length}
        totalCount  = {getTotalCount()}
        deleteTodos = {() => setTodos([])}
      />
    {/* end info section */}

    {todos.length > 0 ? (
      <Todos
      todos = {todos}
      Minus = {(index) => handleMinusCount(index)}
      Plus  = {(index)=> handleAdititionCount(index)}
      />
      ) : (
      <Blank />
    )}
  </Container>
  </>
    )
}

export default App;
