import React, {useState} from "react"
import { Card, Row, Col, Form, Button } from "react-bootstrap"

export const AddToDo = ({handleAdd}) =>{
    const [newToDo, setNewToDo]= useState("")
    return(
        <Card className="addtodo">
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
    )
}