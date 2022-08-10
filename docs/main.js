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

/***/ "./src/Libs/name-tag.ts":
/*!******************************!*\
  !*** ./src/Libs/name-tag.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: darkolivegreen;
      margin: 10px;
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
customElements.define('name-tag', UserCard);
function CreateName(name) {
    console.log('Create name-tag!!!!');
    let m = document.createElement('div');
    let p = document.createElement('name-tag');
    p.setAttribute('name', name);
    m.append(p);
    return m;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateName);


/***/ }),

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import logo from './logo.svg';
function component() {
    let m = document.createElement('main');
    let p = document.createElement('p');
    let img = document.createElement('img');
    m.append(p);
    p.append(img);
    //img.src = logo;
    img.alt = 'sample logo';
    return m;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);


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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.ts");
/* harmony import */ var _Libs_name_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Libs/name-tag */ "./src/Libs/name-tag.ts");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
//import style from './main.css';



console.log('¡Hola!');
console.log('adios');
document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_0__["default"])());
document.body.appendChild((0,_Libs_name_tag__WEBPACK_IMPORTED_MODULE_1__["default"])('Test, injected text'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQ1h6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNvQztBQUNLO0FBQ3JCO0FBQ3BCO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVM7QUFDbkMsMEJBQTBCLDBEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvTGlicy9uYW1lLXRhZy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbiAgPHN0eWxlPlxyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogZGFya29saXZlZ3JlZW47XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwibmFtZS10YWdcIj5cclxuICAgIDxoMz48L2gzPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5jbGFzcyBVc2VyQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICAvLyB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBoMyA9IChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgaDMuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ25hbWUtdGFnJywgVXNlckNhcmQpO1xyXG5mdW5jdGlvbiBDcmVhdGVOYW1lKG5hbWUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGUgbmFtZS10YWchISEhJyk7XHJcbiAgICBsZXQgbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYW1lLXRhZycpO1xyXG4gICAgcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcclxuICAgIG0uYXBwZW5kKHApO1xyXG4gICAgcmV0dXJuIG07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTmFtZTtcclxuIiwiLy9pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28uc3ZnJztcclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG0uYXBwZW5kKHApO1xyXG4gICAgcC5hcHBlbmQoaW1nKTtcclxuICAgIC8vaW1nLnNyYyA9IGxvZ287XHJcbiAgICBpbWcuYWx0ID0gJ3NhbXBsZSBsb2dvJztcclxuICAgIHJldHVybiBtO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCBzdHlsZSBmcm9tICcuL21haW4uY3NzJztcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCBDcmVhdGVOYW1lIGZyb20gJy4vTGlicy9uYW1lLXRhZyc7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuY29uc29sZS5sb2coJ8KhSG9sYSEnKTtcclxuY29uc29sZS5sb2coJ2FkaW9zJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENyZWF0ZU5hbWUoJ1Rlc3QsIGluamVjdGVkIHRleHQnKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==