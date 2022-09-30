import { frameworkcomponent } from '../Framework/frameworkcomponent';
import "./HomeComponent.css";

import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class HomeComponent extends frameworkcomponent {

    constructor() {

        super('MyHome')
        let div = document.createElement('app-home')
        this.view = div
    }
}


export class HomeWebComponent extends HTMLElement {

    private renderer: THREE.WebGLRenderer

    constructor(){
        super();
        this.renderer = new THREE.WebGLRenderer()
    }

    connectedCallback() {

        let div = document.createElement('div')
        div.setAttribute('id', 'robotdiv')

        let canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'app')

        div.appendChild(canvas)

      this.appendChild(div);

      this.renderer.dispose()
      this.renderer = Create3DView(document.getElementById('app') as HTMLCanvasElement).renderer
    }

    disconnectedCallback() {
        this.renderer.dispose()
    }
}

customElements.define('app-home', HomeWebComponent);

//document.addEventListener('DOMContentLoaded', () => {

    //Create3DView(document.getElementById('app') as HTMLCanvasElement)
//})



function Create3DView(domElementQuery: HTMLCanvasElement) {

    THREE.Object3D.DefaultUp = new THREE.Vector3(0,0,1);

    const renderer = CreateRenderer(domElementQuery);

    // Create Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x484e51)

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

    CreateRobot(scene)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshPhongMaterial({color: 0xFFAD00})
    const cube = new THREE.Mesh(geometry, material)
    cube.position.z = 0.5
    cube.position.y = -3
    scene.add(cube)

    // Animate the scene
    Animate(scene, camera, renderer);

    //return {joints, scene, link};
    return { renderer, scene };


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

let step = 0;
let speed = 0.01;

function Animate(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {

    function animate(time:any) {

        if (robotParts.length > 1){

            //robotParts[0].rotation.z += 0.01;
            robotParts[1].rotation.z = Math.PI / 4 * Math.sin(step)
            robotParts[2].rotation.z = Math.PI / 4 * Math.sin(step);
            robotParts[3].rotation.z = -Math.PI / 3 - Math.PI / 4 * Math.sin(step);
            robotParts[4].rotation.z = Math.PI / 2 * Math.sin(step);
            robotParts[5].rotation.z = Math.PI / 2 * Math.sin(step);
        }
        step += speed
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
    let width = (document.querySelector('.main') as HTMLDivElement).clientWidth - 0
    console.log('width' + width)
    return  width //window.innerWidth;
}

function get3DHeight() {
    let height = (document.querySelector('.main') as HTMLDivElement).clientHeight - 10
    console.log('height' + height)
    return  height //window.innerWidth;
}






let robotParts: THREE.Group[] = [];

function CreateRobot(scene: THREE.Scene){


Promise.all([
    loadWavefront('./models/Viper 650 base.obj', "./models/Viper 650 base.mtl"),
    loadWavefront('models/Viper 650 joint 1.obj', "models/Viper 650 joint 1.mtl"),
    loadWavefront('models/Viper 650 joint 2.obj', "models/Viper 650 joint 2.mtl"),
    loadWavefront('models/Viper 650 joint 3.obj', "models/Viper 650 joint 3.mtl"),
    loadWavefront('models/Viper 650 joint 4.obj', "models/Viper 650 joint 4.mtl"),
    loadWavefront('models/Viper 650 joint 5.obj', "models/Viper 650 joint 5.mtl"),
    loadWavefront('models/Viper 650 joint 6.obj', "models/Viper 650 joint 6.mtl"),
]).then((result) => {
        console.log("Updating robot parts");

        robotParts = [...result];

        console.log(robotParts);

        robotParts[0].scale.x = 0.01;
        robotParts[0].scale.y = 0.01;
        robotParts[0].scale.z = 0.01;

        //robotParts[0].rotation.x = -Math.PI / 2;

        robotParts[1].position.z = 200;

        robotParts[2].rotation.x = -Math.PI / 2;
        robotParts[2].position.x = 75;
        robotParts[2].position.y = 75;
        robotParts[2].position.z = 130;

        robotParts[3].rotation.z = -Math.PI / 2;
        robotParts[3].position.x = 270;

        robotParts[4].rotation.x = -Math.PI / 2;
        robotParts[4].position.x = 90;
        robotParts[4].position.y = 105;
        robotParts[4].position.z = -70;

        robotParts[5].rotation.x = -Math.PI / 2;
        robotParts[5].position.z = 200;

        robotParts[6].rotation.x = Math.PI / 2;
        robotParts[6].position.y = -55;

        scene.add(robotParts[0])
        robotParts[0].add(robotParts[1]);
        robotParts[1].add(robotParts[2]);
        robotParts[2].add(robotParts[3]);
        robotParts[3].add(robotParts[4]);
        robotParts[4].add(robotParts[5]);
        robotParts[5].add(robotParts[6]);
});
}


function loadWavefront(objUrl: string, matUrl: string): Promise<THREE.Group> {

    return new Promise((res, rej) => {

        console.log("1");
        var mtlLoader2 = new MTLLoader();
        //mtlLoader.setBaseUrl( 'models/' );
        //mtlLoader.setPath( 'models/' );
        //var url2 = "models/Viper 650 joint 1.mtl";
        mtlLoader2.load( matUrl, function( materials ) {

            console.log("2");
            materials.preload();

            var objLoader = new OBJLoader();
            objLoader.setMaterials( materials );
            //objLoader.setPath( 'obj/male02/' );
            objLoader.load( objUrl, function ( object2 ) {

                // object2.scale.x = 0.01;
                // object2.scale.y = 0.01;
                // object2.scale.z = 0.01;

                //object2.rotation.x = -Math.PI / 2;
                //object2.position.z = 200;
                //object.add( object2 );
                console.log("Added second object");
                //robot = object2;
                res(object2);

            }, function(p){}, function(e){} );

        });


    })

}

