import { GuestListPage } from './pages/GuestListPage.js';
import { GuestMainPage } from './pages/GuestMainPage.js';
import { GuestViewPage } from './pages/GuestViewPage.js';
import { GuestWriteFormPage } from './pages/GuestWriteFormPage.js';
import { GuestModifyFormPage } from './pages/GuestModifyFormPage.js';

export const GuestApp = () => {
    /*
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        navigate(hash);
    });
    */
    $(window).on('hashchange', () => {
        const hash = window.location.hash;
        navigate(hash);
    });

    $(window).on('click', (e) => {
        if (e.target.matches('[data-navigate]')) {
            location.hash = e.target.dataset.navigate;
        }
    });

    async function navigate(hash) {
        let pageObject = {};
        if (hash === '#/guest_home') {
            pageObject = GuestMainPage();
            pageObject.render();
            // document.querySelector('#content').innerHTML = pageObject.template;
        } else if (hash === '#/guest_list') {
            pageObject = await GuestListPage();
            pageObject.render();
        } else if (hash.startsWith('#/guest_view')) {
            let guest_no = hash.substring(hash.lastIndexOf('/') + 1);
            pageObject = await GuestViewPage(guest_no);
            pageObject.render();
        } else if (hash === '#/guest_write_form') {
            pageObject = await GuestWriteFormPage();
            pageObject.render();
        } else if (hash.startsWith('#/guest_modify_form')) {
            let guest_no = hash.substring(hash.lastIndexOf('/') + 1);
            pageObject = await GuestModifyFormPage(guest_no);
            pageObject.render();
        }
    }

    window.addEventListener('load', () => {
        let hash = window.location.hash;
        if (hash == '' || hash == null) {
            hash = '#/guest_home';
        }
        navigate(hash);
    });

    const template = `
    <!-- header start -->
            <div id="header">
                <!-- include_common_top.jsp start-->
                <h1>
                    <a href="">방명록 JAVASCRIPT JQUERY</a>
                </h1>
                <!-- include_common_top.jsp end-->
            </div>
            <!-- header end -->
            <!-- navigation start-->
            <div id="navigation">
                <!-- include_common_left.jsp start-->
                <p>
                    <strong>메 뉴</strong>
                </p>
                <ul class="guest_menus">
                    <li><a id="menu_guest_home" href="#/guest_home">방명록홈</a></li>
                    <li><a id="menu_guest_list" href="#/guest_list">방명록리스트</a></li>
                    <li><a id="menu_guest_write_form" href="#/guest_write_form">방명록쓰기폼</a></li>
                    <li><a href="http://192.168.15.31:8080/swagger-ui/index.html" target="_blank">Swagger</a></li>
                </ul>
                <!-- include_common_left.jsp end-->
            </div>
            <!-- navigation end-->
            <!-- wrapper start -->
            <div id="wrapper">
                <!-- content start -->
                <!-- include_content start-->
                <div id="content"></div>
                <!-- include_content end-->
                <!-- content end -->
            </div>
            <!--wrapper end-->
            <div id="footer">
                <!-- include_common_bottom.jsp start-->
                <p align="center">Copyright (&copy;) By Kimkyoungho.[김경호] All rights reserved.</p>
                <!-- include_common_bottom.jsp end-->
            </div>
    `;
    return template;
};
