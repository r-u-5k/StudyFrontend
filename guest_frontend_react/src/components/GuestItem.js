function GuestItem({ guest }) {
    return (
        <tr className="guest_item">
            <td width="50" align="center" bgcolor="ffffff" height="20">
                {guest.guestNo}
            </td>
            <td width="300" bgcolor="ffffff" style={{ paddingLeft: 10 }}>
                <a href={`#guest_view/${guest.guestNo}`} 
                className="user guest_item_a" guest_no={`${guest.guestNo}`}>
                    {guest.guestTitle}
                </a>
            </td>
            <td width="120" align="center" bgcolor="ffffff">
                {guest.guestName}
            </td>
            <td width="120" align="center" bgcolor="ffffff">
                {guest.guestDate.substring(0, guest.guestDate.indexOf('T'))}
            </td>
        </tr>
    );
}
export { GuestItem };
