import * as guestAPI from '../api/guestAPI.js';

export const GuestViewComponent = async (guest_no) => {
    const responseJsonObject = await guestAPI.viewGuest(guest_no);
    const guest = responseJsonObject.data[0];
    const template = `
    <form name="f" method="post">
        <input type="hidden" name="guest_no" value="${guest.guestNo}">
        <table border="0" cellpadding="0" cellspacing="1" width="590"
            bgcolor="BBBBBB">
            <tbody>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">번호</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestNo}</td>
                </tr>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">이름</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestName}</td>
                </tr>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">이메일</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestEmail}</td>
                </tr>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">날짜</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestDate.substring(0, guest.guestDate.indexOf('T'))}</td>
                </tr>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">홈페이지</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestHomepage}</td>
                </tr>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="22">제목</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestTitle}</td>
                </tr>
                <tr>
                    <td width="100" align="center" bgcolor="E6ECDE" height="110">내용</td>
                    <td width="490" bgcolor="ffffff" align="left"
                        style="padding-left: 10px">${guest.guestContent}</td>
                </tr>
            </tbody>
        </table>
    </form>
        `;
    let pageObject = {
        template,
        render() {},
    };
    return pageObject;
};
