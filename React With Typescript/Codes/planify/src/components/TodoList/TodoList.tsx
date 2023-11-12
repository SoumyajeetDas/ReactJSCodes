import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Todo } from '../../Types/types'
import TodoListData from './TodoListData/TodoListData';
import './TodoList.css'
import CompletedTodoData from './CompletedTodo/CompletedTodoData';
import { Droppable } from 'react-beautiful-dnd';


interface TodoListProp {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<TodoListProp> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (
        <Container className='my-4'>
            <Row>
                <Col md={4} className='mx-auto'>
                    <Droppable droppableId='todolist'>

                        {
                            (provided) => (
                                <div id="active-tasks" ref={provided.innerRef} {...provided.droppableProps}>
                                    <h3>Active Tasks</h3>

                                    {todos.length === 0 ?

                                        <p id="no-data">No Data to show !!</p>

                                        :

                                        todos.map((x, index) => <TodoListData key={index} index={index} todo={x} todos={todos} setTodos={setTodos} />)}
                                    {provided.placeholder}
                                </div>
                            )
                        }

                    </Droppable>


                </Col>

                <Col md={4} className='mx-auto mt-md-0 mt-4'>

                    <Droppable droppableId='completedtodos'>
                        {
                            (provided) => (
                                <div id="completed-tasks" ref={provided.innerRef} {...provided.droppableProps}>
                                    <h3>Completed Tasks</h3>

                                    {completedTodos.length === 0 ?

                                        <p id="no-data">No Data to show !!</p>

                                        :

                                        completedTodos.map((x, index) => <CompletedTodoData key={index} index={index} todo={x} completedtodos={completedTodos} setCompletedTodos={setCompletedTodos} />)}
                                    {provided.placeholder}
                                </div>
                            )
                        }
                    </Droppable>


                </Col>
            </Row>

        </Container>
    )
}

export default TodoList
