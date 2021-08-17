import React from "react"
import { Card } from "react-bootstrap"
import { ToDoItem } from "../Todo/ToDoItem"

export const ToDoList = ({toDoItems, handleDelete}) =>{
    return(
        <Card className="todolist">
              {toDoItems.map((item)=>(<ToDoItem item={item} handleDelete={handleDelete} />
              ))}
             
        </Card>
    )
}