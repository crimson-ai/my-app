import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll'; // we will create this component to make the search bar sticky
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component { // in order to use state, we create a class
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    };

    componentDidMount() { // it's a lifecycle method of type 'mounting'
        fetch('https://jsonplaceholder.typicode.com/users') // fetch API
            .then(response => response.json()) // convert response to JSON
            .then(users => this.setState({ robots: users })); // update state of robots
    }

    onSearchChange = (event) => { // created this method just now; without the = and =>, the 'this' would be the input in the SearchBox, instead of the App
        this.setState({ searchfield: event.target.value }) // always use setState when you want to change states, not 'this.state.searchfield = '
    };

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {  // this.state.robots
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());  // this.state.searchfield
        });
        // in case it's slow and we still have nothing: 
        return !robots.length ? // this means 'if (robots.length === 0)'
            <h1> Loading</h1> :
            (
                <div className='tc' >
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
};
// The state's robots property is passed as props in the CardList
// Since App is the parent of state, which includes robots, it's allowed to change it

export default App;

// props are defined in this file
