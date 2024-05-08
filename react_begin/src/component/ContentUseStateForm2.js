import React, { useState } from 'react';

function ContentUseStateForm2() {
    const initUser = {
        id: '',
        password: '',
        name: '',
        email: '',
    };

    const [user, setUser] = useState(initUser);

    const onUserChangeForm = (e) => {
        console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const joinButtonAction = () => {
        console.log('회원가입(button): ', user);
    };

    const joinSubmitButtonAction = (e) => {
        console.log('회원가입(submit): ', user);
        e.preventDefault();
    };

    return (
        <div>
            <h3 style={{ margin: 0, background: 'gray', color: 'blue' }}>useState로 폼 입력 관리하기 [2]</h3>
            <form onSubmit={joinSubmitButtonAction}>
                아이디: <input type="text" name="id" value={user.id} onChange={onUserChangeForm} />
                <br />
                패스워드: <input type="password" name="password" value={user.password} onChange={onUserChangeForm} />
                <br />
                이름: <input type="text" name="name" value={user.name} onChange={onUserChangeForm} />
                <br />
                이메일: <input type="text" name="email" value={user.email} onChange={onUserChangeForm} />
                <br />
                <input type="button" onClick={joinButtonAction} value="회원가입(button)" />
                <input type="submit" value="회원가입(submit)" />
            </form>
        </div>
    );
}

export default ContentUseStateForm2;
