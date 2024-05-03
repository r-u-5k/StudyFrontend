import { writeFormGuest } from './FetchGuest.js';

export const GuestWriteFormComponent = () => {
  /*****방명록쓰기함수*************/
  const GuestWriteAction = async () => {
    if (document.f.guest_name.value == '') {
      alert('이름을 입력하세요.');
      document.f.guest_name.focus();
      return;
    }
    if (document.f.guest_email.value == '') {
      alert('이메일을 입력하세요.');
      document.f.guest_email.focus();
      return;
    }
    if (document.f.guest_homepage.value == '') {
      alert('홈페이지를 입력하세요.');
      document.f.guest_homepage.focus();
      return;
    }

    if (document.f.guest_title.value == '') {
      alert('제목을 입력하세요.');
      document.f.guest_title.focus();
      return;
    }
    if (document.f.guest_content.value == '') {
      alert('내용을 입력하세요.');
      document.f.guest_content.focus();
      return;
    }

    let sendJsonObject = {
      guestNo: 0,
      guestDate: '',
      guestName: document.f.guest_name.value,
      guestEmail: document.f.guest_email.value,
      guestHomepage: document.f.guest_homepage.value,
      guestTitle: document.f.guest_title.value,
      guestContent: document.f.guest_content.value,
    };

    const resultJsonObject = await writeFormGuest(sendJsonObject);
    location.hash = `#/guest_view/${resultJsonObject.data[0].guestNo}`;
    //navigate(`#/guest_view/${resultJsonObject.data[0].guestNo}`);
  };
  const template = `<table width="0" border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td>
                    <!--contents--> <br>
                    <table style="padding-left: 10px" border="0" cellpadding="0"
                        cellspacing="0">
                        <tbody>
                            <tr>
                                <td bgcolor="f4f4f4" height="22">&nbsp;&nbsp;<b>방명록 관리 -
                                        방명록 쓰기</b></td>
                            </tr>
                        </tbody>
                    </table> <!-- guest write Form  -->
                    <form id="guest_write_form" name="f" method="post">
                        <table border="0" cellpadding="0" cellspacing="1" width="590"
                            bgcolor="BBBBBB">
                            <tbody>
                                <tr>
                                    <td width="100" align="center" bgcolor="E6ECDE" height="22">이름</td>
                                    <td width="490" align="left" bgcolor="ffffff"
                                        style="padding-left: 10px"><input type="text"
                                        style="width: 150" name="guest_name"></td>
                                </tr>
                                <tr>
                                    <td width="100" align="center" bgcolor="E6ECDE" height="22">이메일</td>
                                    <td width="490" align="left" bgcolor="ffffff"
                                        style="padding-left: 10px"><input type="text"
                                        style="width: 150" name="guest_email"></td>
                                </tr>
                                <tr>
                                    <td width="100" align="center" bgcolor="E6ECDE" height="22">홈페이지</td>
                                    <td width="490" align="left" bgcolor="ffffff"
                                        style="padding-left: 10px"><input type="text"
                                        style="width: 150" name="guest_homepage"></td>
                                </tr>
                                <tr>
                                    <td width="100" align="center" bgcolor="E6ECDE" height="22">타이틀</td>
                                    <td width="490" align="left" bgcolor="ffffff"
                                        style="padding-left: 10px"><input type="text"
                                        style="width: 240" name="guest_title"></td>
                                </tr>
                                <tr>
                                    <td width="100" align="center" bgcolor="E6ECDE" height="22">내용</td>
                                    <td width="490" align="left" bgcolor="ffffff"
                                        style="padding-left: 10px"><textarea wrap="soft"
                                            style="width: 240px" rows="10" name="guest_content"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form> <br>
                    <table width="590" border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <input type="button" id="btn_guest_write_action" value="방명록쓰기">&nbsp; 
                                    <input type="button" id="btn_guest_list_btn" data-navigate="#/guest_list" value="방명록목록"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>`;
  document.querySelector('#content').innerHTML = template;
  document.querySelector('#btn_guest_write_action').onclick = GuestWriteAction;
};
