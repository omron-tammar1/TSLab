/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        this.components.forEach(c => {
            let button = document.createElement('button');
            button.classList.add('toolbarbutton');
            button.innerText = c.name;
            header.append(button);
            button.addEventListener('click', () => {
                removeChildren(main);
                main.appendChild(c.render());
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

/***/ "./src/HomeComponent.ts":
/*!******************************!*\
  !*** ./src/HomeComponent.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Framework_frameworkcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Framework/frameworkcomponent */ "./src/Framework/frameworkcomponent.ts");

class HomeComponent extends _Framework_frameworkcomponent__WEBPACK_IMPORTED_MODULE_0__.frameworkcomponent {
    constructor() {
        super('MyHome');
        let div = document.createElement('div');
        let textdiv = document.createElement('div');
        textdiv.innerText = `${this.name} Override`;
        div.appendChild(textdiv);
        let button = document.createElement('button');
        button.classList.add('toolbarbutton');
        button.innerText = 'ClickMe';
        div.append(button);
        button.addEventListener('click', () => {
            alert("Hello World!");
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
/* harmony import */ var _HomeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent */ "./src/HomeComponent.ts");
/* harmony import */ var _KinematicComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KinematicComponent */ "./src/KinematicComponent.ts");




let frame = new _Framework_framework__WEBPACK_IMPORTED_MODULE_0__.framework();
frame.addComponent(new _HomeComponent__WEBPACK_IMPORTED_MODULE_2__.HomeComponent());
frame.addComponent(new _KinematicComponent__WEBPACK_IMPORTED_MODULE_3__.KinematicComponent());
frame.render();
// console.log('¡Hola!');
// console.log('adios');
// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7O0FDN0JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWc0M7QUFDN0QsNEJBQTRCLDZFQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCb0U7QUFDN0QsaUNBQWlDLDZFQUFrQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQzlCO0FBQzRCO0FBQ1U7QUFDMUQsZ0JBQWdCLDJEQUFTO0FBQ3pCLHVCQUF1Qix5REFBYTtBQUNwQyx1QkFBdUIsbUVBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL21haW4uY3NzPzc2YmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9GcmFtZXdvcmsvZnJhbWV3b3JrLnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0hvbWVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9LaW5lbWF0aWNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIGZyYW1ld29yayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIGFkZENvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBjLm5hbWU7XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obWFpbik7XHJcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGMucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1vdmVDaGlsZHJlbihtYWluKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuY29tcG9uZW50c1swXS5yZW5kZXIoKSk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICB3aGlsZSAocGFyZW50Lmxhc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHsgZnJhbWV3b3JrIH07XHJcbiIsImNsYXNzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnZpZXcuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfSBDb250ZW50YDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IGZyYW1ld29ya2NvbXBvbmVudCB9O1xyXG4iLCJpbXBvcnQgeyBmcmFtZXdvcmtjb21wb25lbnQgfSBmcm9tICcuL0ZyYW1ld29yay9mcmFtZXdvcmtjb21wb25lbnQnO1xyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignTXlIb21lJyk7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9IE92ZXJyaWRlYDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dGRpdik7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdDbGlja01lJztcclxuICAgICAgICBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkhlbGxvIFdvcmxkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBkaXY7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZnJhbWV3b3JrY29tcG9uZW50IH0gZnJvbSAnLi9GcmFtZXdvcmsvZnJhbWV3b3JrY29tcG9uZW50JztcclxuZXhwb3J0IGNsYXNzIEtpbmVtYXRpY0NvbXBvbmVudCBleHRlbmRzIGZyYW1ld29ya2NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignS2luZW1hdGljIERlbW8nKTtcclxuICAgICAgICAvLyBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gbGV0IHRleHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAvLyB0ZXh0ZGl2LmlubmVyVGV4dCA9IGAke3RoaXMubmFtZX0gT3ZlcnJpZGVgO1xyXG4gICAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZCh0ZXh0ZGl2KVxyXG4gICAgICAgIC8vIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIC8vIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uJylcclxuICAgICAgICAvLyBidXR0b24uaW5uZXJUZXh0ID0gJ0NsaWNrTWUnXHJcbiAgICAgICAgLy8gZGl2LmFwcGVuZChidXR0b24pXHJcbiAgICAgICAgLy8gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgIGFsZXJ0KFwiSGVsbG8gV29ybGQhXCIpXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLnZpZXcgPSBkaXY7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmcmFtZXdvcmsgfSBmcm9tICcuL0ZyYW1ld29yay9mcmFtZXdvcmsnO1xyXG5pbXBvcnQgXCIuL21haW4uY3NzXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL0hvbWVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLaW5lbWF0aWNDb21wb25lbnQgfSBmcm9tICcuL0tpbmVtYXRpY0NvbXBvbmVudCc7XHJcbmxldCBmcmFtZSA9IG5ldyBmcmFtZXdvcmsoKTtcclxuZnJhbWUuYWRkQ29tcG9uZW50KG5ldyBIb21lQ29tcG9uZW50KCkpO1xyXG5mcmFtZS5hZGRDb21wb25lbnQobmV3IEtpbmVtYXRpY0NvbXBvbmVudCgpKTtcclxuZnJhbWUucmVuZGVyKCk7XHJcbi8vIGNvbnNvbGUubG9nKCfCoUhvbGEhJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdhZGlvcycpO1xyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmVhdGVOYW1lKCdUZXN0LCBpbmplY3RlZCB0ZXh0JykpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=