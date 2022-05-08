import nav from './nav';
import footer from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import './footer.css';
import './button.css';
import image from './webpack-logo.jpeg';
import makeImage from './image';
console.log(image);

const imageElement = makeImage(image);
document.body.append(imageElement);

const newButton = makeButton('Click me!!');
newButton.style = makeColorStyle('teal');
document.body.appendChild(newButton);

document.body.appendChild(footer);

console.log(nav(), makeButton('My first button!'), makeColorStyle('cyan'));
