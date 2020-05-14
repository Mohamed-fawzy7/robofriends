import React from 'react';

class CardList extends React.Component{

    constructor(){
        super();
        this.state = {
            Error: false
        }
    }
    componentDidCatch(){
        this.setState({Erorr: true});
        console.log("errrrrrrrr");
    }

    render() {
        if(this.state.Error) return <h1>ooops, something went wrong.</h1>
        return this.props.children;
    }
}
export default CardList;