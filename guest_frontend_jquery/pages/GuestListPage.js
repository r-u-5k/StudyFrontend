import { GuestListComponent } from '../components/GuestListComponent.js';
import { GuestApp } from '../GuestApp.js';

export const GuestListPage = async () => {
    const template = `
    <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td><br>
                    <table style="padding-left: 10px" border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td bgcolor="f4f4f4" height="22">&nbsp;&nbsp;<b>방명록 관리 - 리스트</b></td>
                            </tr>
                        </tbody>
                    </table>
                    ${(await GuestListComponent()).template}
                    <!-- button -->
                    <table border="0" cellpadding="0" cellspacing="1" width="590">
                        <tbody>
                            <tr>
                                <td align="right"><input type="button" data-navigate='#/guest_write_form' id="btn_guest_write_form" value="방명록 쓰기"></td>
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
        },
    };
    return pageObject;
};
