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
/* harmony import */ var _Framework_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Framework/framework */ "./src/Framework/framework.ts");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _HomeComponent_HomeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent/HomeComponent */ "./src/HomeComponent/HomeComponent.ts");
/* harmony import */ var _KinematicComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KinematicComponent */ "./src/KinematicComponent.ts");




let frame = new _Framework_framework__WEBPACK_IMPORTED_MODULE_0__.framework();
frame.addComponent(new _HomeComponent_HomeComponent__WEBPACK_IMPORTED_MODULE_2__.HomeComponent());
frame.addComponent(new _KinematicComponent__WEBPACK_IMPORTED_MODULE_3__.KinematicComponent());
frame.render();
//init()
// console.log('¡Hola!');
// console.log('adios');
// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7O0FDeENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDO0FBQ3hDO0FBQ3RCLDRCQUE0Qiw2RUFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qm9FO0FBQzdELGlDQUFpQyw2RUFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUM5QjtBQUMwQztBQUNKO0FBQzFELGdCQUFnQiwyREFBUztBQUN6Qix1QkFBdUIsdUVBQWE7QUFDcEMsdUJBQXVCLG1FQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0ZyYW1ld29yay9mcmFtZXdvcmsuY3NzPzQ3MWUiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9Ib21lQ29tcG9uZW50L0hvbWVDb21wb25lbnQuY3NzPzgwMzQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvRnJhbWV3b3JrL2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0ZyYW1ld29yay9mcmFtZXdvcmtjb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9Ib21lQ29tcG9uZW50L0hvbWVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9LaW5lbWF0aWNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vZnJhbWV3b3JrLmNzc1wiO1xyXG5jbGFzcyBmcmFtZXdvcmsge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBhZGRDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbnNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBjLm5hbWU7XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihtYWluKTtcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYy5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvb2xiYXJidXR0b25zZWxlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgIGxldCBidXR0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBidXR0LmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXJidXR0b25zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1vdmVDaGlsZHJlbihtYWluKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuY29tcG9uZW50c1swXS5yZW5kZXIoKSk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICB3aGlsZSAocGFyZW50Lmxhc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHsgZnJhbWV3b3JrIH07XHJcbiIsImNsYXNzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfSBDb250ZW50YDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IGZyYW1ld29ya2NvbXBvbmVudCB9O1xyXG4iLCJpbXBvcnQgeyBmcmFtZXdvcmtjb21wb25lbnQgfSBmcm9tICcuLi9GcmFtZXdvcmsvZnJhbWV3b3JrY29tcG9uZW50JztcclxuaW1wb3J0IFwiLi9Ib21lQ29tcG9uZW50LmNzc1wiO1xyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignTXlIb21lJyk7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IE92ZXJyaWRlYDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdik7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdMb3JlbSc7XHJcbiAgICAgICAgZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgYWxlcnQoXCJIZWxsbyBXb3JsZCFcIilcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHRkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ZGl2Mi5pbm5lclRleHQgPSBgJHtpbmRleH0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXMgYXRxdWUgY3VtIGVzdCBvZmZpY2lhIHN1c2NpcGl0IG1hZ25pIGJsYW5kaXRpaXMuIEFtZXQgYWNjdXNhbXVzIGltcGVkaXQgYXNzdW1lbmRhIG9wdGlvLCBxdW9kIGRlbGVjdHVzLCBpbiBhYiBvYmNhZWNhdGkgZWxpZ2VuZGkgZXQgbmFtIGVhcXVlLmA7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZyYW1ld29ya2NvbXBvbmVudCB9IGZyb20gJy4vRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudCc7XHJcbmV4cG9ydCBjbGFzcyBLaW5lbWF0aWNDb21wb25lbnQgZXh0ZW5kcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ0tpbmVtYXRpYyBEZW1vJyk7XHJcbiAgICAgICAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gdGV4dGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IE92ZXJyaWRlYDtcclxuICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdilcclxuICAgICAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAvLyBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbicpXHJcbiAgICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9ICdDbGlja01lJ1xyXG4gICAgICAgIC8vIGRpdi5hcHBlbmQoYnV0dG9uKVxyXG4gICAgICAgIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICBhbGVydChcIkhlbGxvIFdvcmxkIVwiKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZnJhbWV3b3JrIH0gZnJvbSAnLi9GcmFtZXdvcmsvZnJhbWV3b3JrJztcclxuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9Ib21lQ29tcG9uZW50L0hvbWVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLaW5lbWF0aWNDb21wb25lbnQgfSBmcm9tICcuL0tpbmVtYXRpY0NvbXBvbmVudCc7XHJcbmxldCBmcmFtZSA9IG5ldyBmcmFtZXdvcmsoKTtcclxuZnJhbWUuYWRkQ29tcG9uZW50KG5ldyBIb21lQ29tcG9uZW50KCkpO1xyXG5mcmFtZS5hZGRDb21wb25lbnQobmV3IEtpbmVtYXRpY0NvbXBvbmVudCgpKTtcclxuZnJhbWUucmVuZGVyKCk7XHJcbi8vaW5pdCgpXHJcbi8vIGNvbnNvbGUubG9nKCfCoUhvbGEhJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdhZGlvcycpO1xyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmVhdGVOYW1lKCdUZXN0LCBpbmplY3RlZCB0ZXh0JykpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=