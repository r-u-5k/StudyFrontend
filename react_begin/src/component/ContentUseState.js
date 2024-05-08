import React, { useState } from 'react';

function ContentUseState() {
    const [count, setCount] = useState(0);

    const onIncrease = (e) => {
        setCount(count + 1);
        console.log(count);
    };

    return (
        <div className="content">
            <h3 style={{ margin: 0, background: 'gray', color: 'blue' }}>useState</h3>
            <br />
            <h3>{count}</h3>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default ContentUseState;
