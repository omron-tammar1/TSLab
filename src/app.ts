//import style from './main.css';
import component from './component';
import {init} from './Libs/name-tag';
import { frameworkcomponent } from './Framework/frameworkcomponent';
import { framework } from './Framework/framework';
import "./main.css";
import { HomeWebComponent } from './HomeComponent/HomeComponent';
import { KinematicWebComponent } from './KinematicComponent/KinematicComponent';
import { init2 } from './Libs/omron-tag';



let frame = new framework()
// frame.addComponent(new HomeComponent())
// frame.addComponent(new KinematicComponent())
// frame.render()


init()
init2()




export type Type<T> = new (...args: any[]) => T;

class Page1Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page One';
  }
}

class Page2Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page Two';
  }
}

class Page3Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page Three';
  }
}

class MainComponent extends HTMLElement {

  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
    <h1>Single Page Demo</h1>
    <nav>
      <a href="#page1">Home</a> |
      <a href="#page2">Kinematic</a> |
      <a href="#page3">Page 3</a> |
    </nav>
    <div class="container">
      <app-router-outlet></app-router-outlet>
    </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

class RouterOutletComponent extends HTMLElement {

  private routes: { [path: string]: Type<HTMLElement> }

  constructor() {
    super();
    this.routes = {
      '': Page1Component,
      '#page1': HomeWebComponent,
      '#page2': KinematicWebComponent,
      '#page3': Page3Component
    };
  }

  connectedCallback() {
    window.addEventListener('hashchange',
      (e: HashChangeEvent) => this.locationHashChanged(e));
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange',
      (e: HashChangeEvent) => this.locationHashChanged(e));
  }

  locationHashChanged(e: HashChangeEvent) {
    const paths = Object.keys(this.routes);
    if (paths.some(r => r === window.location.hash)) {
      this.innerHTML = '';
      const type = this.routes[window.location.hash];
      const component = new type;
      this.insertAdjacentElement('afterbegin', component);
    }
  }

}

customElements.define('app-main', MainComponent);
customElements.define('app-router-outlet', RouterOutletComponent);
customElements.define('app-page1', Page1Component);
customElements.define('app-page2', Page2Component);
customElements.define('app-page3', Page3Component);

















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