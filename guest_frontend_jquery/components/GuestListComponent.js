import * as guestAPI from '../api/guestAPI.js';

export const GuestListComponent = async () => {
    const resultJsonObject = await guestAPI.listGuest();
    const guestList = resultJsonObject.data;
    const template = `
    <!-- GuestListComponent Start -->
    <form name="f" method="post">

        <table border="0" cellpadding="0" cellspacing="1" width="590" bgcolor="BBBBBB">
            <tbody>
                <tr>
                    <td width="50" align="center" bgcolor="E6ECDE" height="22">번호</td>
                    <td width="300" align="center" bgcolor="E6ECDE">제목</td>
                    <td width="120" align="center" bgcolor="E6ECDE">이름</td>
                    <td width="120" align="center" bgcolor="E6ECDE">날짜</td>
                </tr>
                ${guestList
                    .map((guest) => {
                        return `
                        <!-- guest start -->
                        <tr class="guest_item">
                            <td width="50" align="center" bgcolor="ffffff" height="20">${guest.guestNo}</td>
                            <td width="300" bgcolor="ffffff" style="padding-left: 10">
                                <a href="#/guest_view/${guest.guestNo}" class="user" class="guest_item_a" 
                                guest_no="${guest.guestNo}">${guest.guestTitle}</a></td>
                            <td width="120" align="center" bgcolor="ffffff">${guest.guestName}</td>
                            <td width="120" align="center" bgcolor="ffffff">${guest.guestDate.substring(0, guest.guestDate.indexOf('T'))}</td>
                        </tr>
                        <!-- guest end -->
                        `;
                    })
                    .join('')}
                
            </tbody>
        </table>
    </form>
    <!-- GuestListComponent End --> 
    `;
    let pageObject = {
        template,
        render() {
            document.querySelector('#content').innerHTML = template;
        }
    }
    return pageObject;
};
