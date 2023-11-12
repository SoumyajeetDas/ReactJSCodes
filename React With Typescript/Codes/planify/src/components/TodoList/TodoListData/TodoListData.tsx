import React, { useState, useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Todo } from '../../../Types/types'
import './TodoListData.css'
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import { Draggable } from 'react-beautiful-dnd';

const TodoListData: React.FC<{ index: number, todo: Todo, todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }> = ({ index, todo, todos, setTodos }) => {

    const [editStatus, setEditStatus] = useState(false);
    const [editTodo, setEditTodo] = useState(todo.todo);


    // When we click the edit button the below function will be executed
    const handleEdit = () => {
        if (!editStatus)
            setEditStatus(true);
    }


    // When we click enter form will be submitted and saveEdit button will be executed
    const saveEdit = (e: React.FormEvent, id: number) => {

        e.preventDefault();

        setTodos(todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo))

        setEditStatus(false);
    }


    // Deleting the todo on clicking the delete button
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }


    const inputRef = useRef<HTMLInputElement>(null);

    // Whenever the status is in editable then focus on the input tag
    useEffect(() => {
        inputRef.current?.focus();
    }, [editStatus])


    return (

        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <Container className='my-5'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                        <Row>
                            <Col>
                                <div id="todo-data">

                                    {editStatus ?
                                        <Form onSubmit={(e) => saveEdit(e, todo.id)}>
                                            <Form.Group className="w-100" >
                                                <Form.Control type="text" value={editTodo}
                                                    onChange={(e) => setEditTodo(e.target.value)}
                                                    ref={inputRef}
                                                    id="change-status"
                                                />
                                            </Form.Group>
                                        </Form>
                                        :
                                        <p className='m-0'>{todo.todo}</p>
                                    }


                                    <div id="icon-todo">
                                        <span><MdModeEditOutline onClick={handleEdit} /></span>
                                        <span><MdDelete onClick={() => deleteTodo(todo.id)} /></span>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </Draggable>

    )
}

export default TodoListData
