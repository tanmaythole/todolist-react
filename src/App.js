
import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {AddTodo} from './MyComponents/AddTodo'
import {Footer} from './MyComponents/Footer'
import {About} from './MyComponents/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Delete", todo)

    setToDos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos");
  }
  const addTodo = (Title, Desc) => {
    console.log(Title, Desc)
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    
    const MyTodo = {
      sno: sno,
      title: Title,
      description: Desc
    }
    console.log(MyTodo)
    setToDos([...todos, MyTodo]);
    
  }
  const [todos, setToDos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const myStyle = {
    minHeight: "85vh",
  }
  return (
    <>
    <Router>
      <Header title="My To-Do" searchBar={true}/>
      <Switch>
        <Route exact path='/'>
          <div className="container" style={myStyle}>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </div>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
      </Switch>

      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
