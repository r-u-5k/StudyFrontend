import * as FetchUser from './FetchUser.js';
import * as ResponseStatusCode from './ResponseStatusCode.js';
import * as ResponseMessage from './ResponseMessage.js';

export const UserLoginFormComponent = () => {
  const userLoginAction = async () => {
    if (document.f.userId.value == '') {
      alert('아이디를 입력하세요.');
      document.f.userId.focus();
      return;
    }
    if (document.f.password.value == '') {
      alert('비밀번호를 입력하세요.');
      f.password.focus();
      return;
    }

    let sendJsonObject = {
      userId: document.f.userId.value,
      password: document.f.password.value,
    };
    const responseJsonObject = await FetchUser.userLoginAction(sendJsonObject);
    if (responseJsonObject.status == ResponseStatusCode.LOGIN_SUCCESS) {
      location.href = 'user.html';
    } else if (responseJsonObject.status == ResponseStatusCode.LOGIN_FAIL_NOT_FOUND_USER) {
      document.querySelector('#idMessage').innerHTML = ResponseMessage.LOGIN_FAIL_NOT_FOUND_USER;
      document.querySelector('#pwMessage').innerHTML = '';
    } else if (responseJsonObject.status == ResponseStatusCode.LOGIN_FAIL_PASSWORD_MISMATCH_USER) {
      document.querySelector('#pwMessage').innerHTML = ResponseMessage.LOGIN_FAIL_PASSWORD_MISMATCH_USER;
      document.querySelector('#idMessage').innerHTML = '';
    }
  };
  // responseJsonObject
  //   const user = responseJsonObject.data[0];
  const template = `
    <table border=0 cellpadding=0 cellspacing=0>
        <tr>
            <td><br />
                <table style="padding-left: 10px" border=0 cellpadding=0
                    cellspacing=0>
                    <tr>
                        <td bgcolor="f4f4f4" height="22">&nbsp;&nbsp;<b>사용자 관리 -
                                로그인</b></td>
                    </tr>
                </table> <!-- login Form  -->
                <form name="f" method="post">
                    <table border="0" cellpadding="0" cellspacing="1" bgcolor="BBBBBB">
                        <tr>
                            <td width=100 align=center bgcolor="E6ECDE" height="22">사용자
                                아이디</td>
                            <td width=490 align="left" bgcolor="ffffff"
                                style="padding-left: 10px"><input type="text"
                                style="width: 150" name="userId" value="">&nbsp;&nbsp;<font id="idMessage"
                                color="red"></font></td>
                        </tr>
                        <tr>
                            <td width=100 align=center bgcolor="E6ECDE" height="22">비밀번호</td>
                            <td width=490 align="left" bgcolor="ffffff"
                                style="padding-left: 10px"><input type="password"
                                style="width: 150" name="password" value="">&nbsp;&nbsp;<font id="pwMessage"
                                color="red"></font></td>
                        </tr>
                    </table>
                </form> <br />
                <table border="0" cellpadding="0" cellspacing="1">
                    <tr>
                        <td align=center><input type="button" value="로그인" id="btn_user_login_action"> &nbsp; <input type="button"
                            value="회원가입폼" id="btn_user_write_form" data-navigate="#/user_write_form"></td>
                    </tr>
                </table></td>
        </tr>
    </table>

    `;
  document.querySelector('#content').innerHTML = template;
  document.querySelector('#btn_user_login_action').onclick = userLoginAction;
};
