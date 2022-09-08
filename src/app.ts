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
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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






document.addEventListener('DOMContentLoaded', () => {

    
    Create3DView(document.getElementById('app') as HTMLCanvasElement)
})



function Create3DView(domElementQuery: HTMLCanvasElement) {

    THREE.Object3D.DefaultUp = new THREE.Vector3(0,0,1);

    const renderer = CreateRenderer(domElementQuery);

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = CreateCamera(renderer);

    // Create Orbit Controls
    CreateOrbitControls(camera, renderer);

    // Create Floor
    CreateFloor(scene);

    // Create Ambient Light
    CreateAmbientLight(scene);

    // Create Directional Light
    CreateDirectionalLight(scene);

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshPhongMaterial({color: 0xFFAD00})
    const cube = new THREE.Mesh(geometry, material)
    cube.position.z = 5
    cube.position.y = -1
    scene.add(cube)

    // Animate the scene
    Animate(scene, camera, renderer);

    //return {joints, scene, link};
    return { scene };


}

function CreateRenderer(domElementQuery: HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas: domElementQuery});
    renderer.shadowMap.enabled = true;
    renderer.setSize(get3DWidth(), get3DHeight());
    //const configurationTab = document.querySelector(domElementQuery);
    //configurationTab.appendChild(renderer.domElement);
    return renderer;
}

function CreateCamera(renderer: THREE.WebGLRenderer) {
    const camera = new THREE.PerspectiveCamera(50, get3DWidth() / get3DHeight(), 0.1, 1000);
    camera.position.set(-10, 30, 30);
    camera.up.set(0,0,1)
    return camera;
}

function CreateOrbitControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();
}

function CreateFloor(scene: THREE.Scene) {

    const planeGeometry = new THREE.PlaneGeometry(30, 30)
    const planeMaterial = new THREE.MeshStandardMaterial(
        {
            color: 0xCCCCCC,
            side: THREE.DoubleSide
        })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    scene.add(plane)
    plane.receiveShadow = true

    const gridHelper = new THREE.GridHelper(30)
    gridHelper.rotateX(Math.PI / 2)
    scene.add(gridHelper)
}

function CreateAmbientLight(scene: THREE.Scene) {
    const ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(ambientLight);
}

function CreateDirectionalLight(scene: THREE.Scene) {
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    scene.add(directionalLight);
    directionalLight.position.set(30, 50, 30);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 12;
    directionalLight.shadow.camera.left = -12;

    // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
    // scene.add(dLightHelper);

    // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(dLightShadowHelper);
}

function Animate(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
    function animate(time:any) {
        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', function() {
        camera.aspect = get3DWidth() / get3DHeight();
        camera.updateProjectionMatrix();
        renderer.setSize(get3DWidth(), get3DHeight());
    })
}

function get3DWidth() {
    return 400; //window.innerWidth;
}

function get3DHeight() {
    return 400; //window.innerHeight;
}

















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