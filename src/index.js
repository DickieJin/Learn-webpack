import {cube} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
	// var element = document.createElement('div');
	var element = document.createElement('pre');

	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');

	return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

// if(module.hot){
// 	module.hot.accept('./print.js',function() {
// 		console.log('Accepting the updated printMe module!');
// 		document.body.removeChild(element);
// 		element = component();
// 		document.body.appendChild(element);
// 	})
// }