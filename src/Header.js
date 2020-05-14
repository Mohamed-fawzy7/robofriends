import React from 'react';

const Header = ({ inputHandler }) => {
    return (
        <div>
            <h2>RoboFriends</h2>
            <input type="text" className="pa3 ba b--green bg-lightest-blue" placeholder="search robots" onInput={inputHandler} />
        </div>
    )
}

export default Header;