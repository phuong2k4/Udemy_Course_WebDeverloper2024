import React, {useState} from "react";
import cars from "../practice.js";

export function Car(){

    const [tesla, teslaTopSpeed,teslaTopColour] = [cars[1],cars[1].speedStats.topSpeed,cars[1].coloursByPopularity[0]]
    const [honda, hondaTopSpeed,hondaTopColour] = [cars[0],cars[0].speedStats.topSpeed,cars[0].coloursByPopularity[0]]
    return (
        <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
        </table>
    );
}

export default Car;