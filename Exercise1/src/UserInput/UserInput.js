import React from 'react';
import './UserInput.css';

const userInput = (properties)=>{
    return (
        <input className="userInput" type="text" onChange={properties.onChange} value={properties.userName} /> 
    );
};

export default userInput;