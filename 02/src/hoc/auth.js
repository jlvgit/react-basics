import React from 'react';

const Auth = (props) => {
    const pass = 'password';

    if (pass != 'password'){
        return <h3>You shall not pass!</h3>
    } else {
        return props.children
    }
}

export default Auth;