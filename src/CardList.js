import React from 'react';
import Card from './Card';

const CardList = (props) => {

    const robotsJSX = props.robots.map(rob => {
        return (
            <Card key={rob.id} rob={rob} />
        );
    })
    return (<div>{robotsJSX}</div>);
}
export default CardList;