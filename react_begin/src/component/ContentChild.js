import React from 'react';

function ContentChild({children}) {
    return (
        <>
            <h3 style={{ margin: 0, background: 'yellow', color: 'green' }}>Child Element</h3>
            {children}
        </>
    );
}

export default ContentChild;
