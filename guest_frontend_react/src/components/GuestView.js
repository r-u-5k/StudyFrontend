import '../css/styles.css';
import '../css/guest.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as FetchGuest from '../api/fetchGuest';

function GuestView() {
    const { guest_no } = useParams();

    const [guest, setGuest] = useState({
        guestNo: 0,
        guestName: '',
        guestEmail: '',
        guestHomepage: '',
        guestTitle: '',
        guestContent: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const responseJsonObject = await FetchGuest.viewGuest(guest_no);
            setGuest(responseJsonObject.data[0]);
        })();
    }, [guest_no]);

    const guestRemoveAction = async () => {
        await FetchGuest.removeGuest(guest_no);
        navigate('../guest_list');
    };

    return (
        <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
                <tr>
                    <td>
                        <br />
                        <table style={{ paddingLeft: 10 }} border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td bgcolor="f4f4f4" height="22">
                                        &nbsp;&nbsp;<b>방명록 관리 - 방명록 상세보기</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <form name="f" method="post">
                            <input type="hidden" name="guest_no" value="3" />
                            <table border="0" cellPadding="0" cellSpacing="1" width="590" bgcolor="BBBBBB">
                                <tbody>
                                    <tr>
                                        <td width="100" align="center" bgcolor="E6ECDE" height="22">
                                            번호
                                        </td>
                                        <td width="490" bgcolor="ffffff" align="left" style={{ paddingLeft: 10 }}>
                                            {guest.guestNo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="100" align="center" bgcolor="E6ECDE" height="22">
                                            이름
                                        </td>
                                        <td width="490" bgcolor="ffffff" align="left" style={{ paddingLeft: 10 }}>
                                            {guest.guestName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="100" align="center" bgcolor="E6ECDE" height="22">
                                            날짜
                                        </td>
                                        <td width="490" bgcolor="ffffff" align="left" style={{ paddingLeft: 10 }}>
                                            {guest.guestDate?.substring(0, guest.guestDate.indexOf('T'))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="100" align="center" bgcolor="E6ECDE" height="22">
                                            홈페이지
                                        </td>
                                        <td width="490" bgcolor="ffffff" align="left" style={{ paddingLeft: 10 }}>
                                            {guest.guestHomepage}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="100" align="center" bgcolor="E6ECDE" height="22">
                                            제목
                                        </td>
                                        <td width="490" bgcolor="ffffff" align="left" style={{ paddingLeft: 10 }}>
                                            {guest.guestTitle}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="100" align="center" bgcolor="E6ECDE" height="110">
                                            내용
                                        </td>
                                        <td width="490" bgcolor="ffffff" align="left" style={{ paddingLeft: 10 }}>
                                            {guest.guestContent}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        <br />
                        <table width="590" border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <Link to={`/guest_modify_form/${guest.guestNo}`}>
                                            <input type="button" value="수정" id="btn_guest_modify_form" guest_no={guest_no} />
                                        </Link>
                                        <input type="button" value="삭제" onClick={guestRemoveAction} />
                                        <Link to="../guest_list">
                                            <input type="button" value="목록" id="btn_guest_list" />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export { GuestView };
