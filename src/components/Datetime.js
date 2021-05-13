import React from 'react'

class Datetime extends React.Component {

    constructor() {
        super();
        this.state = {time: new Date()}
    }
    

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount(){
        setInterval(()=> this.currentTime(),1000)
    }

    render(){

        return(
            <div>
                <p> {this.state.time.toLocaleTimeString()} </p>
            </div>
        );

    }

    
}

export default Datetime;