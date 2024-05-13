import "./css/styles.css";
import "./css/user.css";

function App() {
  return (
    <>
      <div id="header">
        <h1>
          <a href="#/user_main">회원관리 REACT FRONTEND</a>
        </h1>
      </div>
      <div id="navigation">
        <p>
          <strong>메뉴</strong>
        </p>
        <ul>
          {/* 로그인전 */}
          <li>
            <a href="/user_login_form">로그인</a>
          </li>
          <li>
            <a href="/user_write_form">회원가입</a>
          </li>
          {/*   로그인후 
          <li>
            <a href="/user_view/guard1">guard1 님</a>
          </li>
          <li>
            <a href="/user_view/guard1">내정보</a>
          </li>
          <li>
            <a href="/">로그아웃</a>
          </li>
          */}
        </ul>
      </div>
      <div id="wrapper">
        <div id="content">
          <img
            src="image/enter.png"
            alt="메인이미지"
            width="540"
            height="350px"
            style={{ margin: "10px" }}
          />
        </div>
      </div>
      <div id="footer">
        <p align="center">
          Copyright (©) By Kimkyoungho.[김경호] All rights reserved.
        </p>
      </div>
    </>
  );
}
export default App;
