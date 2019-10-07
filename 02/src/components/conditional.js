import React from 'react';

const Conditional = () => {

    const value = true;

    const returnValue = () => {
        return false;
    }

    const showIt = () => {
        return ( 
            returnValue() ? <div>Hello I am true</div> : <div>Hello I am false</div>
        )
    }

    return (
        <div>
            { showIt() }
        </div>
    )
}

export default Conditional;