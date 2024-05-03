import { modifyGuest, modifyFormGuest } from './FetchGuest.js';

export const GuestModifyFormComponent = async (guest_no) => {
  const GuestModifyAction = async () => {
    const sendJsonObject = {
        guestNo: document.f.guest_no.value,
        guestName: document.f.guest_name.value,
        guestEmail: document.f.guest_email.value,
        guestHomepage: document.f.guest_homepage.value,
        guestTitle: document.f.guest_title.value,
        guestContent: document.f.guest_content.value,
      };
    const responseJsonObject = await modifyGuest(sendJsonObject, guest_no);
    location.hash = `#/guest_view/${guest_no}`;
  };
  
  const responseJsonObject = await modifyFormGuest(guest_no);
  const guest = responseJsonObject.data[0];
  const template = `
      <table border="0" cellpadding="0" cellspacing="0">
      <tbody>
          <tr>
              <td><br>
                  <table style="padding-left: 10px" border="0" cellpadding="0"
                      cellspacing="0">
                      <tbody>
                          <tr>
                              <td bgcolor="f4f4f4" height="22">&nbsp;&nbsp;<b>방명록 관리 -
                                      방명록 수정</b></td>
                          </tr>
                      </tbody>
                  </table> 
                  <!-- modify Form  -->
                  <form name="f" method="post">
                      <input type="hidden" name="guest_no" value="${guest.guestNo}">
                      <table border="0" cellpadding="0" cellspacing="1" width="590"
                          bgcolor="BBBBBB">
                          <tbody>
                              <tr>
                                  <td width="100" align="center" bgcolor="E6ECDE" height="22">번호</td>
                                  <td align="left" width="490" bgcolor="ffffff"
                                      style="padding-left: 10px">${guest.guestNo}</td>
                              </tr>
                              <tr>
                                  <td width="100" align="center" bgcolor="E6ECDE" height="22">이름</td>
                                  <td align="left" width="490" bgcolor="ffffff"
                                      style="padding-left: 10px"><input type="text"
                                      style="width: 150" name="guest_name" value="${guest.guestName}"></td>
                              </tr>
                              <tr>
                                  <td width="100" align="center" bgcolor="E6ECDE" height="22">홈페이지</td>
                                  <td align="left" width="490" bgcolor="ffffff"
                                      style="padding-left: 10px"><input type="text"
                                      style="width: 150" name="guest_homepage" value="${guest.guestHomepage}"></td>
                              </tr>
                              <tr>
                                  <td width="100" align="center" bgcolor="E6ECDE" height="22">이메일</td>
                                  <td align="left" width="490" bgcolor="ffffff"
                                      style="padding-left: 10px"><input type="text"
                                      style="width: 240" name="guest_email" value="${guest.guestEmail}"></td>
                              </tr>
                              <tr>
                                  <td width="100" align="center" bgcolor="E6ECDE" height="22">제목</td>
                                  <td align="left" width="490" bgcolor="ffffff"
                                      style="padding-left: 10px"><input type="text"
                                      style="width: 240" name="guest_title" value="${guest.guestTitle}"></td>
                              </tr>
                              <tr>
                                  <td width="100" align="center" bgcolor="E6ECDE" height="22">내용</td>
                                  <td align="left" width="490" bgcolor="ffffff"
                                      style="padding-left: 10px"><textarea wrap="soft"
                                          style="width: 240px" rows="10" name="guest_content">${guest.guestContent}</textarea>
  
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </form>
  
                  <table width="590" border="0" cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr>
                              <td align="center">
                                  <input type="button" value="수정" id="btn_guest_modify_action"> &nbsp; 
                                  <input type="button" value="목록" id="btn_guest_list" data-navigate="#/guest_list">
                              </td>
                          </tr>
                      </tbody>
                  </table></td>
          </tr>
      </tbody>
  </table>
      `;
  document.querySelector('#content').innerHTML = template;
  document.querySelector('#btn_guest_modify_action').onclick = GuestModifyAction;
};
