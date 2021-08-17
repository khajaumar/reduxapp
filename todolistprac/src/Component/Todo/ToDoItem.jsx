import React, {useState} from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";



export const ToDoItem = ({item, handleDelete}) =>{
    const [check, setCheck]= useState(false);
    return(
        <Card className="todoitem">
            <Row>
                <Col md={1}>
                    <Form.Check onClick={(e)=>setCheck(!check)} ></Form.Check>
                
                </Col>
                <Col md={8}>
                    <Form.Label>
                      {check ? <del>{item}</del> : item }  </Form.Label>
                </Col>
                <Col md={3}> <Button onClick={()=>handleDelete(item)}>Delete</Button> </Col>
            </Row>
               
        </Card>
    )
}