import React from 'react';
import '../Content.css';

function ContentProps({id, name, address, gender, age, phone}) {
    return (
        <div className="content">
            <h3 style={{ margin: 0, background: 'pink', color: 'white' }}>props</h3>
            <ul>
                <li>아이디: {id}</li>
                <li>이름: {name}</li>
                <li>주소: {address}</li>
                <li>성별: {gender}</li>
                <li>나이: {age}</li>
                <li>{`${age}세 ${gender}성 ${name}`}</li>
                <li>전화번호: {phone[0]}, {phone[1]}</li>
            </ul>
        </div>
    );
}

export default ContentProps;
