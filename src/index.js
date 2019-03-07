import _ from 'lodash';
import './style.css';
import Icon from './lufei.png';
import Data from './data.xml';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello','webpack。中文'],' ');
	element.classList.add('hello');
	// 将图像添加到现有div
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	console.log(Data);

	return element;
}

document.body.appendChild(component());