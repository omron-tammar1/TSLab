/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Framework/framework.css":
/*!*************************************!*\
  !*** ./src/Framework/framework.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/HomeComponent/HomeComponent.css":
/*!*********************************************!*\
  !*** ./src/HomeComponent/HomeComponent.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Framework/framework.ts":
/*!************************************!*\
  !*** ./src/Framework/framework.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "framework": () => (/* binding */ framework)
/* harmony export */ });
/* harmony import */ var _framework_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.css */ "./src/Framework/framework.css");

class framework {
    constructor() {
        this.components = new Array();
    }
    addComponent(component) {
        this.components.push(component);
    }
    render() {
        let header = document.querySelector('.header');
        let main = document.querySelector('.main');
        let buttons = new Array();
        let index = 0;
        this.components.forEach(c => {
            let button = document.createElement('button');
            if (index === 0) {
                button.classList.add('toolbarbuttonselected');
                index++;
            }
            button.classList.add('toolbarbutton');
            button.innerText = c.name;
            header.append(button);
            buttons.push(button);
            button.addEventListener('click', (e) => {
                removeChildren(main);
                main.appendChild(c.render());
                buttons.forEach(b => b.classList.remove('toolbarbuttonselected'));
                let butt = e.target;
                butt.classList.add('toolbarbuttonselected');
            });
        });
        removeChildren(main);
        main.appendChild(this.components[0].render());
    }
}
const removeChildren = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};



/***/ }),

/***/ "./src/Framework/frameworkcomponent.ts":
/*!*********************************************!*\
  !*** ./src/Framework/frameworkcomponent.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frameworkcomponent": () => (/* binding */ frameworkcomponent)
/* harmony export */ });
class frameworkcomponent {
    constructor(name) {
        this.name = name;
        this.view = document.createElement('div');
        this.view.innerText = `${this.name} Content`;
    }
    render() {
        return this.view;
    }
}



/***/ }),

/***/ "./src/HomeComponent/HomeComponent.ts":
/*!********************************************!*\
  !*** ./src/HomeComponent/HomeComponent.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Framework_frameworkcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Framework/frameworkcomponent */ "./src/Framework/frameworkcomponent.ts");
/* harmony import */ var _HomeComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.css */ "./src/HomeComponent/HomeComponent.css");


class HomeComponent extends _Framework_frameworkcomponent__WEBPACK_IMPORTED_MODULE_0__.frameworkcomponent {
    constructor() {
        super('MyHome');
        let div = document.createElement('div');
        let textdiv = document.createElement('div');
        textdiv.innerText = `${this.name} Override`;
        div.appendChild(textdiv);
        let button = document.createElement('button');
        button.classList.add('homebutton');
        button.innerText = 'Lorem';
        div.append(button);
        button.addEventListener('click', () => {
            //    alert("Hello World!")
            for (let index = 0; index < 100; index++) {
                let textdiv2 = document.createElement('div');
                textdiv2.innerText = `${index} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis atque cum est officia suscipit magni blanditiis. Amet accusamus impedit assumenda optio, quod delectus, in ab obcaecati eligendi et nam eaque.`;
                div.appendChild(textdiv2);
            }
        });
        this.view = div;
    }
}


/***/ }),

/***/ "./src/KinematicComponent.ts":
/*!***********************************!*\
  !*** ./src/KinematicComponent.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KinematicComponent": () => (/* binding */ KinematicComponent)
/* harmony export */ });
/* harmony import */ var _Framework_frameworkcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Framework/frameworkcomponent */ "./src/Framework/frameworkcomponent.ts");

class KinematicComponent extends _Framework_frameworkcomponent__WEBPACK_IMPORTED_MODULE_0__.frameworkcomponent {
    constructor() {
        super('Kinematic Demo');
        // let div = document.createElement('div');
        // let textdiv = document.createElement('div');
        // textdiv.innerText = `${this.name} Override`;
        // div.appendChild(textdiv)
        // let button = document.createElement('button')
        // button.classList.add('toolbarbutton')
        // button.innerText = 'ClickMe'
        // div.append(button)
        // button.addEventListener('click', () => {
        //    alert("Hello World!")
        // })
        // this.view = div;
    }
}


/***/ }),

/***/ "./src/Libs/name-tag.ts":
/*!******************************!*\
  !*** ./src/Libs/name-tag.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: darkolivegreen;
      margin: 1px;
    }
  </style>

  <div class="name-tag">
    <h3></h3>
  </div>
`;
class UserCard extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.attachShadow({ mode: 'open' });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.append(template.content.cloneNode(true));
    }
    connectedCallback() {
        var _a;
        const h3 = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('h3');
        const name = this.getAttribute('name');
        h3.innerText = name;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('registered component');
    //customElements.define('name-tag', UserCard)
    console.log('registered component');
});
function init() {
}
//  (() => {
customElements.define('name-tag', UserCard);
// })();
function CreateName(name) {
    console.log('Create name-tag!!!!');
    let m = document.createElement('div');
    let p = document.createElement('name-tag');
    p.setAttribute('name', name);
    m.append(p);
    return m;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Libs_name_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Libs/name-tag */ "./src/Libs/name-tag.ts");
/* harmony import */ var _Framework_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Framework/framework */ "./src/Framework/framework.ts");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _HomeComponent_HomeComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeComponent/HomeComponent */ "./src/HomeComponent/HomeComponent.ts");
/* harmony import */ var _KinematicComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KinematicComponent */ "./src/KinematicComponent.ts");





let frame = new _Framework_framework__WEBPACK_IMPORTED_MODULE_1__.framework();
frame.addComponent(new _HomeComponent_HomeComponent__WEBPACK_IMPORTED_MODULE_3__.HomeComponent());
frame.addComponent(new _KinematicComponent__WEBPACK_IMPORTED_MODULE_4__.KinematicComponent());
frame.render();
(0,_Libs_name_tag__WEBPACK_IMPORTED_MODULE_0__.init)();
// console.log('¡Hola!');
// console.log('adios');
// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7O0FDeENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDO0FBQ3hDO0FBQ3RCLDRCQUE0Qiw2RUFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qm9FO0FBQzdELGlDQUFpQyw2RUFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7O1VDOUNoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNXO0FBQzlCO0FBQzBDO0FBQ0o7QUFDMUQsZ0JBQWdCLDJEQUFTO0FBQ3pCLHVCQUF1Qix1RUFBYTtBQUNwQyx1QkFBdUIsbUVBQWtCO0FBQ3pDO0FBQ0Esb0RBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvRnJhbWV3b3JrL2ZyYW1ld29yay5jc3M/NDcxZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0hvbWVDb21wb25lbnQvSG9tZUNvbXBvbmVudC5jc3M/ODAzNCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL21haW4uY3NzPzc2YmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9GcmFtZXdvcmsvZnJhbWV3b3JrLnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0hvbWVDb21wb25lbnQvSG9tZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0tpbmVtYXRpY0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0xpYnMvbmFtZS10YWcudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vZnJhbWV3b3JrLmNzc1wiO1xyXG5jbGFzcyBmcmFtZXdvcmsge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBhZGRDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbnNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBjLm5hbWU7XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihtYWluKTtcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYy5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvb2xiYXJidXR0b25zZWxlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgIGxldCBidXR0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBidXR0LmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXJidXR0b25zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1vdmVDaGlsZHJlbihtYWluKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuY29tcG9uZW50c1swXS5yZW5kZXIoKSk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICB3aGlsZSAocGFyZW50Lmxhc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHsgZnJhbWV3b3JrIH07XHJcbiIsImNsYXNzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfSBDb250ZW50YDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IGZyYW1ld29ya2NvbXBvbmVudCB9O1xyXG4iLCJpbXBvcnQgeyBmcmFtZXdvcmtjb21wb25lbnQgfSBmcm9tICcuLi9GcmFtZXdvcmsvZnJhbWV3b3JrY29tcG9uZW50JztcclxuaW1wb3J0IFwiLi9Ib21lQ29tcG9uZW50LmNzc1wiO1xyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignTXlIb21lJyk7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IE92ZXJyaWRlYDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdik7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdMb3JlbSc7XHJcbiAgICAgICAgZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgYWxlcnQoXCJIZWxsbyBXb3JsZCFcIilcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHRkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ZGl2Mi5pbm5lclRleHQgPSBgJHtpbmRleH0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXMgYXRxdWUgY3VtIGVzdCBvZmZpY2lhIHN1c2NpcGl0IG1hZ25pIGJsYW5kaXRpaXMuIEFtZXQgYWNjdXNhbXVzIGltcGVkaXQgYXNzdW1lbmRhIG9wdGlvLCBxdW9kIGRlbGVjdHVzLCBpbiBhYiBvYmNhZWNhdGkgZWxpZ2VuZGkgZXQgbmFtIGVhcXVlLmA7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZyYW1ld29ya2NvbXBvbmVudCB9IGZyb20gJy4vRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudCc7XHJcbmV4cG9ydCBjbGFzcyBLaW5lbWF0aWNDb21wb25lbnQgZXh0ZW5kcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ0tpbmVtYXRpYyBEZW1vJyk7XHJcbiAgICAgICAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gdGV4dGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IE92ZXJyaWRlYDtcclxuICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdilcclxuICAgICAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAvLyBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbicpXHJcbiAgICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9ICdDbGlja01lJ1xyXG4gICAgICAgIC8vIGRpdi5hcHBlbmQoYnV0dG9uKVxyXG4gICAgICAgIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICBhbGVydChcIkhlbGxvIFdvcmxkIVwiKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG4gIDxzdHlsZT5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xyXG4gICAgICBtYXJnaW46IDFweDtcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwibmFtZS10YWdcIj5cclxuICAgIDxoMz48L2gzPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5jbGFzcyBVc2VyQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICAvLyB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBoMyA9IChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgaDMuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyZWQgY29tcG9uZW50Jyk7XHJcbiAgICAvL2N1c3RvbUVsZW1lbnRzLmRlZmluZSgnbmFtZS10YWcnLCBVc2VyQ2FyZClcclxuICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmVkIGNvbXBvbmVudCcpO1xyXG59KTtcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxufVxyXG4vLyAgKCgpID0+IHtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCduYW1lLXRhZycsIFVzZXJDYXJkKTtcclxuLy8gfSkoKTtcclxuZnVuY3Rpb24gQ3JlYXRlTmFtZShuYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlIG5hbWUtdGFnISEhIScpO1xyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmFtZS10YWcnKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XHJcbiAgICBtLmFwcGVuZChwKTtcclxuICAgIHJldHVybiBtO1xyXG59XHJcbmV4cG9ydCB7IGluaXQgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9MaWJzL25hbWUtdGFnJztcclxuaW1wb3J0IHsgZnJhbWV3b3JrIH0gZnJvbSAnLi9GcmFtZXdvcmsvZnJhbWV3b3JrJztcclxuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9Ib21lQ29tcG9uZW50L0hvbWVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLaW5lbWF0aWNDb21wb25lbnQgfSBmcm9tICcuL0tpbmVtYXRpY0NvbXBvbmVudCc7XHJcbmxldCBmcmFtZSA9IG5ldyBmcmFtZXdvcmsoKTtcclxuZnJhbWUuYWRkQ29tcG9uZW50KG5ldyBIb21lQ29tcG9uZW50KCkpO1xyXG5mcmFtZS5hZGRDb21wb25lbnQobmV3IEtpbmVtYXRpY0NvbXBvbmVudCgpKTtcclxuZnJhbWUucmVuZGVyKCk7XHJcbmluaXQoKTtcclxuLy8gY29uc29sZS5sb2coJ8KhSG9sYSEnKTtcclxuLy8gY29uc29sZS5sb2coJ2FkaW9zJyk7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENyZWF0ZU5hbWUoJ1Rlc3QsIGluamVjdGVkIHRleHQnKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==