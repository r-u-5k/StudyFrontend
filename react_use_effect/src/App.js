import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Even from './component/Even';
import Viewer from './component/Viewer';

function App() {
    const isMounted = useRef(false);
    const [count, setCount] = useState(0);
    const [text, setText] = useState();
    const handleSetCount = (value) => {
        setCount(count + value);
    };
    const dataFetch = () => {
        console.log('Data Fetch');
    }
    
    /*
    1번째 인자: 콜백 함수
    2번째 인자: dependencies 배열 데이터
    */
    useEffect(() => {
        console.log('첫 렌더링 후 호출');
        dataFetch();
    }, []);
    useEffect(() => {
        console.log('렌더링 완료될 때마다 호출');
    });
    useEffect(() => {
        console.log('count, text가 업데이트될 때마다 호출');
    }, [count, text]);

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    if (!isMounted.current) {
        isMounted.current = true;
    } else {
        console.log('모든 데이터가 업데이트될 때마다 호출');
    }

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleOnChange} />
            </section>
            <section>
                {/*Viewer.js start */}
                <Viewer count={count} />
                {/*Even.js start */}
                {count % 2 === 0 ? <Even /> : ''}
                {/*{count % 2 === 0 && <Even />}*/} {/* 둘 다 true여야 출력됨 */}
                {/*Even()*/}
                {/*Even.js end */}
                {/*Viewer.js end */}
            </section>
            <section>
                {/*Controller.js start */}
                <Controller handleSetCount={handleSetCount} />
                {/*Controller.js end */}
            </section>
        </div>
    );
}

export default App;
