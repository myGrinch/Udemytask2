import React from 'react';

const Validation = (props) => {
    let lengthMessage = 'Without text';

    if (props.countResult < 5) {
        lengthMessage = 'Text too short'
    } else {
        lengthMessage = 'Text long enough'
    }

    return (
        <div>
            <p>{lengthMessage}</p>
        </div>
    )
};

export default Validation