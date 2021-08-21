import React from 'react';
import { Fragment } from 'react';
import {FechingData} from "./Reducers/FechingData"
import {EmpDetails} from "./Reducers/EmpDetails"
export const Home = () => {
    return (
        <Fragment>
            <FechingData/>
            <EmpDetails/>
        </Fragment>
    );
};

