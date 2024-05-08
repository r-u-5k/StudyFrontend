import React from 'react';
import '../Content.css';

export default function ContentJSX() {
    const number1 = 1;
    const number2 = 2;
    const name1 = '김경호';
    const name2 = '김수로';
    const isMarried1 = true;
    const isMarried2 = true;
    const guest = {
        guestNo: 1,
        guestName: 'KIM',
    };
    const num = 3;

    return (
        <div className="content">
            <h3
                style={{
                    margin: 0,
                    background: 'gray',
                }}
            >
                ContentJSX[JavaScript eXtensible]
            </h3>
            <ul>
                <li>{number1 + number2}</li>
                <li>{number1 + ' ' + number2}</li>
                <li>{name1 + ' ' + name2}</li>
                <li>{String(isMarried1 || isMarried2)}</li>
                <li>
                    {guest.guestNo}, {guest.guestName}
                </li>
                <li>
                    {num}은 {num % 2 === 0 ? '짝수' : '홀수'}입니다.
                </li>
            </ul>
        </div>
    );
}
