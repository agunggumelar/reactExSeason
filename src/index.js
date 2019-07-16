import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    /*
    constructor(props){
        super(props);

        this.state = {lat: null, errorMessage: ''};
    }
    */

    //this is like create constructor but bable has take over this work :)
   state = {lat: null, errorMessage: ''};

    //will call on first
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
    /*
    componentDidUpdate(){
        console.log('My component was just update');
    }
    */
    

    /*
    componentwillUnmount(){
    }
    */

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return  <div>Error : {this.state.errorMessage}</div>;
        }
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept selection request!"/>;
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));