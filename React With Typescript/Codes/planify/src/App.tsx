import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import Add from './components/AddTask/Add';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './Types/types';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), todo, isDone: false }])
  }


  const onDragEnd = (result:DropResult)=>{
    // console.log(result)

    const {source, destination} = result;


    // If there is invalid destination in the screen
    if(!destination) return;

    // if the source and destination is same and index is same
    if((source.droppableId===destination.droppableId ) && (source.index === destination.index)) return;


    let add:Todo, active = todos, complete = completedTodos;


    // If the source is Active List then take the todo data in the add and delete it from the Active List
    if(source.droppableId === 'todolist'){
      add = active[source.index];
      active.splice(source.index, 1);
    }
    // If the source is Completed List then take the todo data in the add and delete it from the Active List
    else{
      add= complete[source.index];
      complete.splice(source.index, 1);
    }


    // If the destination is Active List then add data in the array and make the isDone property to false
    if(destination.droppableId === 'todolist'){
      add.isDone=false;
      active.splice(destination.index,0,add)
    }
     // If the destination is Completed List then add data in the array and make the isDone property to true
    else{
      add.isDone=true;
      completedTodos.splice(destination.index,0,add)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <Add todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />

      </div>
    </DragDropContext>

  );
}

export default App;
