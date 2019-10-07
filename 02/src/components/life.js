import React, {PureComponent} from 'react';


class Life extends PureComponent {

    state = {
        title:'Life cycles are cool?'
    }

    // componentWillMount(){
    //     console.log('before');
    // }

    // componentDidMount(){
    //     console.log('after')
    //     document.querySelector('h3').style.color = "green"

    // }

    // componentWillUpdate(){
    //     console.log('before update')
    // }

    // componentDidUpdate(){
    //     console.log('after update')
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState);
    //     if(nextState.title === 'CHANGE!'){
    //         return false;
    //     }
    //     return true;
    // }

    // componentWillReceiveProps(){
    //     console.log("Before new props")
    // }

    // componentWillUnmount(){
    //     console.log('Unmounting Life')
    // }

    render() {
        console.log('Rendering component')
        return (
            <div>
                 <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({
                        title:'CHANGE!!'
                    })
                }
                >Click to Change </div>
            </div>
        )
    }

}


export default Life;