import React from 'react';
import ReactDom from 'react-dom';


const App = () => {
    return(
        <div>Home</div>
    )
}

ReactDom.render(
    <App/>, 
    document.querySelector('#root')
)