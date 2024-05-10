import React, { useEffect } from 'react';

function Even() {
    useEffect(() => {
        console.log('Even 컴포넌트 mount');
        return () => {
            console.log('Even 컴포넌트 unmount');
        };
    }, []);
    return <div>현재 카운트는 짝수입니다</div>;
}

export default Even;
