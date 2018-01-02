import React from 'react';

const userOutput = (properties) => {
    const style = {
        color: 'gray',
        fontSize: '14px'
    }
    return (
        <div style={style}>
            <p>Hello!</p>
            <p>{properties.userName}</p>
        </div>
    );
};

export default userOutput;
