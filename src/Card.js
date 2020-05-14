import React from 'react';
import 'tachyons';

const Card = ({ rob }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${rob.id}?size=200x200`} alt="robot" />
            <h2>{rob.name}</h2>
            <p>{rob.email}</p>
        </div>
    );
}

export default Card;