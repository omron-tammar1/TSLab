//import style from './main.css';
import component from './component';
import {init} from './Libs/name-tag';
import { frameworkcomponent } from './Framework/frameworkcomponent';
import { framework } from './Framework/framework';
import "./main.css";
import { HomeComponent } from './HomeComponent/HomeComponent';
import { KinematicComponent } from './KinematicComponent/KinematicComponent';
import { init2 } from './Libs/omron-tag';



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









// const width = 300 // window.innerWidth
// const height = 300 // window.innerHeight

// const renderer = new THREE.WebGLRenderer({
//     canvas: document.getElementById('app') as HTMLCanvasElement
// })
// renderer.setSize(width, height)
// const mainCamera = new THREE.PerspectiveCamera(60, width/height, 0.1, 100)

// const orbit = new OrbitControls(mainCamera, renderer.domElement);
// orbit.update();

// const scene = new THREE.Scene()
// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshPhongMaterial({color: 0xFFAD00})
// const cube = new THREE.Mesh(geometry, material)
// cube.position.z = -5
// cube.position.y = -1
// scene.add(cube)

// CreateFloor(scene)

// const light = new THREE.DirectionalLight(0xFFFFFF, 1)
// light.position.set(0,4,2)
// scene.add(light)

// //renderer.render(scene, mainCamera)

// function animate(time:any) {
//     renderer.render(scene, mainCamera);
// }


// document.addEventListener('DOMContentLoaded', () => {

//     renderer.setAnimationLoop(animate);
// })

// function CreateFloor(scene:THREE.Scene) {

//     const planeGeometry = new THREE.PlaneGeometry(30, 30)
//     const planeMaterial = new THREE.MeshStandardMaterial(
//         {
//             color: 0xCCCCCC,
//             side: THREE.DoubleSide
//         })
//     const plane = new THREE.Mesh(planeGeometry, planeMaterial)
//     scene.add(plane)
//     plane.receiveShadow = true

//     const gridHelper = new THREE.GridHelper(30)
//     gridHelper.rotateX(Math.PI / 2)
//     scene.add(gridHelper)
// }