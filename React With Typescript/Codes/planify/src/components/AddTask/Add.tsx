import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Add.css'


interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e:React.FormEvent)=>void
}


const Add:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    return (

        <Container>
            <Row>
                <Col sm={8} className="m-auto">
                    <Form onSubmit={e=>handleAdd(e)}>
                        <div style={{position:'relative'}}>
                            <Form.Group className="mb-3 w-100" >
                                <Form.Control type="text" placeholder="Enter a Task..." id="input-style" value={todo}
                                onChange = {(e)=>setTodo(e.target.value)}
                                />
                            </Form.Group>
                            <button className='btn rounded-pill' id="add-button" ><b>+</b></button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Add
