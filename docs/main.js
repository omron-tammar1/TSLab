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
        button.innerText = 'ClickMe';
        div.append(button);
        button.addEventListener('click', () => {
            alert("Hello World!");
        });
        for (let index = 0; index < 100; index++) {
            let textdiv2 = document.createElement('div');
            textdiv2.innerText = `${index} Hi`;
            div.appendChild(textdiv2);
        }
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
// console.log('¡Hola!');
// console.log('adios');
// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7O0FDeENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDO0FBQ3hDO0FBQ3RCLDRCQUE0Qiw2RUFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEIsYUFBYTtBQUN6QztBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qm9FO0FBQzdELGlDQUFpQyw2RUFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUM5QjtBQUMwQztBQUNKO0FBQzFELGdCQUFnQiwyREFBUztBQUN6Qix1QkFBdUIsdUVBQWE7QUFDcEMsdUJBQXVCLG1FQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9GcmFtZXdvcmsvZnJhbWV3b3JrLmNzcz80NzFlIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvSG9tZUNvbXBvbmVudC9Ib21lQ29tcG9uZW50LmNzcz84MDM0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0ZyYW1ld29yay9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9GcmFtZXdvcmsvZnJhbWV3b3JrY29tcG9uZW50LnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvSG9tZUNvbXBvbmVudC9Ib21lQ29tcG9uZW50LnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvS2luZW1hdGljQ29tcG9uZW50LnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2ZyYW1ld29yay5jc3NcIjtcclxuY2xhc3MgZnJhbWV3b3JrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXJidXR0b25zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gYy5uYW1lO1xyXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obWFpbik7XHJcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGMucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCd0b29sYmFyYnV0dG9uc2VsZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnV0dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnV0dC5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obWFpbik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGlzLmNvbXBvbmVudHNbMF0ucmVuZGVyKCkpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IHJlbW92ZUNoaWxkcmVuID0gKHBhcmVudCkgPT4ge1xyXG4gICAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7IGZyYW1ld29yayB9O1xyXG4iLCJjbGFzcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy52aWV3LmlubmVyVGV4dCA9IGAke3RoaXMubmFtZX0gQ29udGVudGA7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBmcmFtZXdvcmtjb21wb25lbnQgfTtcclxuIiwiaW1wb3J0IHsgZnJhbWV3b3JrY29tcG9uZW50IH0gZnJvbSAnLi4vRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudCc7XHJcbmltcG9ydCBcIi4vSG9tZUNvbXBvbmVudC5jc3NcIjtcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgZXh0ZW5kcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ015SG9tZScpO1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHRkaXYuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfSBPdmVycmlkZWA7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHRkaXYpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZWJ1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2tNZSc7XHJcbiAgICAgICAgZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJIZWxsbyBXb3JsZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGV4dGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGV4dGRpdjIuaW5uZXJUZXh0ID0gYCR7aW5kZXh9IEhpYDtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHRkaXYyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZyYW1ld29ya2NvbXBvbmVudCB9IGZyb20gJy4vRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudCc7XHJcbmV4cG9ydCBjbGFzcyBLaW5lbWF0aWNDb21wb25lbnQgZXh0ZW5kcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ0tpbmVtYXRpYyBEZW1vJyk7XHJcbiAgICAgICAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gdGV4dGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IE92ZXJyaWRlYDtcclxuICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdilcclxuICAgICAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAvLyBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbicpXHJcbiAgICAgICAgLy8gYnV0dG9uLmlubmVyVGV4dCA9ICdDbGlja01lJ1xyXG4gICAgICAgIC8vIGRpdi5hcHBlbmQoYnV0dG9uKVxyXG4gICAgICAgIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICBhbGVydChcIkhlbGxvIFdvcmxkIVwiKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gdGhpcy52aWV3ID0gZGl2O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZnJhbWV3b3JrIH0gZnJvbSAnLi9GcmFtZXdvcmsvZnJhbWV3b3JrJztcclxuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9Ib21lQ29tcG9uZW50L0hvbWVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLaW5lbWF0aWNDb21wb25lbnQgfSBmcm9tICcuL0tpbmVtYXRpY0NvbXBvbmVudCc7XHJcbmxldCBmcmFtZSA9IG5ldyBmcmFtZXdvcmsoKTtcclxuZnJhbWUuYWRkQ29tcG9uZW50KG5ldyBIb21lQ29tcG9uZW50KCkpO1xyXG5mcmFtZS5hZGRDb21wb25lbnQobmV3IEtpbmVtYXRpY0NvbXBvbmVudCgpKTtcclxuZnJhbWUucmVuZGVyKCk7XHJcbi8vIGNvbnNvbGUubG9nKCfCoUhvbGEhJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdhZGlvcycpO1xyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmVhdGVOYW1lKCdUZXN0LCBpbmplY3RlZCB0ZXh0JykpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=