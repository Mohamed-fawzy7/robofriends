import React from 'react';
import Card from './Card';

const CardList = () => {

    const robotsJSX = this.props.robots.map(rob => {
        return (
            <Card key={rob.id} rob={rob} />
        );
    })
    return (<div>{robotsJSX}</div>);
}
export default CardList;