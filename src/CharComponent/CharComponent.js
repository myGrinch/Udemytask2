import React from 'react';
import './CharComponent.css'

const Char = (props) => {
    return (

        <div>
            {props.chars.split('').map((char, index) => {
                return <span onClick={props.click} index={index} key={index}>{char}</span>
            })}
        </div>
    )
};

export default Char