import { GuestViewComponent } from '../components/GuestViewComponent.js';
import { GuestApp } from '../GuestApp.js';
import * as guestAPI from '../api/guestAPI.js';

export const GuestViewPage = async (guest_no) => {
    const guestRemoveAction = async (guest_no) => {
        if (!window.confirm('삭제 ㄱ?')) {
            return;
        }
        /*
        responsePromise.then(
            (response) => {
                location.hash = '#/guest_list';
            },
            (error) => {
                alert(error);
            }
        );
        */
        const responseJsonObject = await guestAPI.removeGuest(guest_no);
        location.hash = '#/guest_list';
    };
    const template = `
    <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td>
                    <!--contents--> <br>
                    <table style="padding-left: 10px" border="0" cellpadding="0"
                        cellspacing="0">
                        <tbody>
                            <tr>
                                <td bgcolor="f4f4f4" height="22">&nbsp;&nbsp;<b>방명록 관리 - 방명록 상세보기</b></td>
                            </tr>
                        </tbody>
                    </table> 
                    ${(await GuestViewComponent(guest_no)).template}
                    <br>
                    <table width="590" border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td align="center">
                                <input type="button" value="수정" data-navigate='#/guest_modify_form/${guest_no}' id="btn_guest_modify_form" guest_no="${guest_no}">&nbsp; 
                                <input type="button" value="삭제" id="btn_guest_remove_action" guest_no="${guest_no}">&nbsp; 
                                <input type="button" value="목록" id="btn_guest_list" data-navigate='#/guest_list'></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    `;
    let pageObject = {
        template,
        render() {
            document.querySelector('#content').innerHTML = template;
            document.querySelector('#btn_guest_remove_action').onclick = () => {
                guestRemoveAction(guest_no)
            };
        },
    };
    return pageObject;
};
