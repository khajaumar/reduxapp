import React, {useState} from 'react';
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export const ListOfAnimal = () => {
    const [toDoItems, setToDoItems]= useState([]);
    const [newToDo, setNewToDo]= useState("")
    const handleAdd=(newTodo)=>{
        setToDoItems([...toDoItems,newTodo])
    };
    var i=1;
    return(
        <div>
        <Card>
            <Row>
                <Col md={10}><Form.Control type="text" value={newToDo} onChange={(e)=>setNewToDo(e.target.value)} ></Form.Control>

                </Col>
                <Col><Button 
                variant="primary" 
                
                onClick={()=>{
                    setNewToDo(" ");
                    handleAdd(newToDo);}
                }
                disabled={newToDo===""?true:false}
                >Add</Button>
                </Col>
            </Row>

        </Card>
        <Card>
            <Col md={2}></Col>
        <Col md={8}>
            <ul>
                    {toDoItems.map((elem)=><li>{`${elem} ${i++}`}</li>)}
                    </ul>
                </Col>
                <Col md={2}></Col>

        </Card>

        </div>
    )
};
