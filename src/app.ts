//import style from './main.css';
import component from './component';
import CreateName from './Libs/name-tag';
import { frameworkcomponent } from './Framework/frameworkcomponent';
import { framework } from './Framework/framework';
import "./main.css";



let frame = new framework()
frame.addComponent(new frameworkcomponent('Home'))
frame.addComponent(new frameworkcomponent('Kinematic Demo'))
frame.render()



// console.log('¡Hola!');
// console.log('adios');

// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

