export const UserLeftMenuComponent = () => {
  const template = `
    <p>
        <strong>메뉴</strong>
    </p>
    <ul>
        <!-- 로그인전 -->
        <li><a href="#/user_login_form">로그인</a></li>
        <li><a href="#/user_write_form">회원가입</a></li>
    </ul>
    <ul>
        <!-- 로그인후 -->
        <!-- guard님 -->
        <li><a href="#/user_logout_action">로그아웃</a></li>
        <li><a href="#/user_view">회원정보</a></li>
    </ul>
    `;
  document.querySelector('#navigation').innerHTML = template;
};
