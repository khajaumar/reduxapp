import React, {useState} from "react";
import { ToDoList } from "./Todo/ToDoList";
import { AddToDo } from "./Todo/AddToDo";
import { Row, Col, Card, Form } from "react-bootstrap";
import "../Component/Todo/Todo.css"


export const Home = () =>{
    const [toDoItems, setToDoItems]= useState(["Learning Reacrt","Having Lunch"]);
    const handleAdd=(newTodo)=>{
        setToDoItems([...toDoItems,newTodo])
    };
    const handleDelete=(currItem)=>{
        const filtered = toDoItems.filter((item)=> item !== currItem);
        setToDoItems([...filtered]);
    };
    return(
        <Card className="home">
                <Row>
                    <Col><AddToDo handleAdd={handleAdd}/>
                    </Col>
                    <Col><ToDoList toDoItems={toDoItems} handleDelete={handleDelete}/></Col>
                </Row>
        </Card>
    )
}


{/* <Form.Control type="text" onChange={(e)=>setToDoItems(e.target.value)} ></Form.Control> */}
