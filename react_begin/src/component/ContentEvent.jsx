import React from 'react';

function ContentEvent() {
    function handleClick(e) {
        console.log(e);
        console.log(e.target);
        alert(`${e.target.value} 클릭`);
    }

    return (
        <>
        <h3 style={{ margin: 0, background: 'yellow', color: 'green' }}>이벤트 처리</h3><br />
            <input type="button" value="버튼1" onClick={(e) => {
                console.log(e);
                console.log(e.target);
                alert(`${e.target.value} 클릭`);
            }} />
            <input type="button" value="버튼2" onClick={handleClick} />
            <input type="button" value="버튼3" onClick={handleClick} />
        </>
    );
}

export default ContentEvent;
