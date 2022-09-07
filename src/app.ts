//import style from './main.css';
import component from './component';
import {init} from './Libs/name-tag';
import { frameworkcomponent } from './Framework/frameworkcomponent';
import { framework } from './Framework/framework';
import "./main.css";
import { HomeComponent } from './HomeComponent/HomeComponent';
import { KinematicComponent } from './KinematicComponent/KinematicComponent';
import { init2 } from './Libs/omron-tag';
import * as THREE from 'three'

let frame = new framework()
frame.addComponent(new HomeComponent())
frame.addComponent(new KinematicComponent())
frame.render()


init()
init2()


// console.log('¡Hola!');
// console.log('adios');

// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

const width = 300 // window.innerWidth
const height = 300 // window.innerHeight

const renerer = new THREE.WebGLRenderer({
    canvas: document.getElementById('app') as HTMLCanvasElement
})
renerer.setSize(width, height)
const mainCamera = new THREE.PerspectiveCamera(60, width/height, 0.1, 100)

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshPhongMaterial({color: 0xFFAD00})
const cube = new THREE.Mesh(geometry, material)
cube.position.z = -5
cube.position.y = -1
scene.add(cube)

const light = new THREE.DirectionalLight(0xFFFFFF, 1)
light.position.set(0,4,2)
scene.add(light)

renerer.render(scene, mainCamera)




