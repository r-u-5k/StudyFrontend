import { hello } from './hello.js';
import $ from 'jquery';
import _ from 'lodash';
import './css/style.css';
import logo from './image/logo.png';
import './image/background.png';

function component() {
    const element = document.createElement('div');
    // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
    element.innerHTML = _.join(['Hello', 'webpack[lodash]<br><br>'], ' ');
    element.innerHTML += hello();
    element.classList.add('class3');
    // 원래 있던 div에 이미지를 추가합니다.
    const myIcon = new Image();
    myIcon.src = logo;
    element.appendChild(myIcon);
    return element;
}
document.body.appendChild(component());
