import React, { Component } from 'react';
import CardList from './CardList';
import Header from './Header';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFieldValue: ''
        }
    }
    inputHandler = (event) => {
        this.setState({ searchFieldValue: event.target.value.toLowerCase() });
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then((robots) => {
            this.setState({ robots });
        });
    }
    render() {
        const filteredRobots = this.state.robots.filter((robo) => {
            return robo.name.toLowerCase().includes(this.state.searchFieldValue)
        })
        return (
            <div className="tc">
                <Header inputHandler={this.inputHandler} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;