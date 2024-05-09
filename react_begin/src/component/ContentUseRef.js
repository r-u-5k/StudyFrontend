import React, {useRef, useState} from 'react';
import '../Content.css';

function ContentUseRef() {
    const [text, setText] = useState('');
    const inputElementRef = useRef();
    const isFirst = useRef(false);
    
    if (!isFirst.current) {
        isFirst.current = true;
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = (e) => {
        if (text.length === 0) {
            alert('입력하쇼');
            inputElementRef.current.focus();
            return;
        }
        if (isFirst.current) {
            alert('첫번째 ' + text);
            isFirst.current = false;
        } else {
            alert(text);
        }
        alert(text);
        setText('');
        inputElementRef.currentValue = 'asdf';
    }
    return (
        <div>
            <h3 style={{ margin: 0, background: 'gray', color: 'blue' }}>ContentUseRef</h3>
            <input type="text" value={text} onChange={handleOnChange} />{' '}
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}

export default ContentUseRef;
