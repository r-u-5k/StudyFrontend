export const UserLoginFormPage = () => {
 
  return (
    <table border="0" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <br />
            <table
              style={{ paddingLeft: "10px" }}
              border="0"
              cellPadding="0"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <td bgcolor="f4f4f4" height="22">
                    &nbsp;&nbsp;<b>사용자 관리 - 로그인</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <form name="f" method="post" >
              <table
                border="0"
                cellPadding="0"
                cellSpacing="1"
                bgcolor="BBBBBB"
              >
                <tbody>
                  <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">
                      사용자 아이디
                    </td>
                    <td
                      width="490"
                      align="left"
                      bgcolor="ffffff"
                      style={{ paddingLeft: "10px" }}
                    >
                      <input
                        type="text"
                        style={{ width: 150 }}
                        name="userId"
                      
                        
                      />
                      &nbsp;&nbsp;
                      <font color="red" id="idMessage">
                       
                      </font>
                    </td>
                  </tr>
                  <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">
                      비밀번호
                    </td>
                    <td
                      width="490"
                      align="left"
                      bgcolor="ffffff"
                      style={{ paddingLeft: "10px" }}
                    >
                      <input
                        type="password"
                        style={{ width: 150 }}
                        name="password"
                       
                      />
                      &nbsp;&nbsp;
                      <font color="red" id="passwordMessage">
                       
                      </font>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>{" "}
            <br />
            <table border="0" cellPadding="0" cellSpacing="1">
              <tbody>
                <tr>
                  <td align="center">
                    <input
                      type="button"
                      value="로그인"
                      id="btn_user_login_action"
                     
                    />{" "}
                    &nbsp;
                    <input
                      type="button"
                      value="회원가입폼"
                      id="btn_user_write_form"
                      data-navigate="#/user_write_form"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
