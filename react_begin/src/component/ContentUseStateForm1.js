import React, { useState } from 'react';

function ContentUseStateForm1() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const user = { 
        id: id, 
        password: password, 
        name: name, 
        email: email 
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const joinButtonAction = () => {
        console.log('회원가입: ', user);
    };

    const joinSubmitButtonAction = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h3 style={{ margin: 0, background: 'gray', color: 'blue' }}>useState로 폼 입력 관리하기 [1]</h3>
            <form onSubmit={joinSubmitButtonAction}>
                아이디: <input type="text" value={id} onChange={onChangeId} />
                <br />
                패스워드: <input type="password" value={password} onChange={onChangePassword} />
                <br />
                이름: <input type="text" value={name} onChange={onChangeName} />
                <br />
                이메일: <input type="text" value={email} onChange={onChangeEmail} />
                <br />
                <input type="button" onClick={joinButtonAction} value="회원가입(button)" />
                <input type="submit" value="회원가입(submit)" />
            </form>
        </div>
    );
}

export default ContentUseStateForm1;
