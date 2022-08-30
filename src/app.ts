//import style from './main.css';
import component from './component';
import {init} from './Libs/name-tag';
import { frameworkcomponent } from './Framework/frameworkcomponent';
import { framework } from './Framework/framework';
import "./main.css";
import { HomeComponent } from './HomeComponent/HomeComponent';
import { KinematicComponent } from './KinematicComponent';

let frame = new framework()
frame.addComponent(new HomeComponent())
frame.addComponent(new KinematicComponent())
frame.render()


init()


// console.log('¡Hola!');
// console.log('adios');

// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

