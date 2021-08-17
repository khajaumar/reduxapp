import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {getEmpDetails} from "../Selectors/EmployDetails"

export const EmpDetails = () => {
    const selector=useSelector(getEmpDetails);
    const [empData, setEmpData]=useState(selector);
    return (
        <div>
            {empData.map((itemCurrent)=>{
            <Card>
                <Card.title>Menters</Card.title>
                <Card.Body>
                    <Card.Header>{itemCurrent.name}</Card.Header>
                    <Card.Img src="logo192.png" style={{ width:"10rem"}}></Card.Img>
                    <p>{itemCurrent.add}</p>
                    <p>{`Age of: ${itemCurrent.age}`}</p>
                    <Button>More Details</Button>
                </Card.Body>
            </Card>
            })};
        </div>
    );
};

