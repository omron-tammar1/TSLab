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
// export interface DateTimeFormatOptions extends Intl.DateTimeFormatOptions {
//   localeMatcher?: 'best fit' | 'lookup';
//   weekday?: 'long' | 'short' | 'narrow';
//   era?:  'long' | 'short' | 'narrow';
//   year?: 'numeric' | '2-digit';
//   month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
//   day?: 'numeric' | '2-digit';
//   hour?: 'numeric' | '2-digit';
//   minute?: 'numeric' | '2-digit';
//   second?: 'numeric' | '2-digit';
//   timeZoneName?: 'long' | 'short';
//   formatMatcher?: 'best fit' | 'basic';
//   hour12?: boolean;
//   /**
//    * Timezone string must be one of IANA. UTC is a universally required recognizable value
//    */
//   timeZone?: 'UTC' | string;
//   dateStyle?: 'full' | 'long' | 'medium' | 'short',
//   timeStyle?: 'full' | 'long' | 'medium' | 'short',
//   calendar?: 'buddhist' | 'chinese' | ' coptic' | 'ethiopia' | 'ethiopic' | 'gregory' | ' hebrew' | 'indian' | 'islamic' | 'iso8601' | ' japanese' | 'persian' | 'roc',
//   dayPeriod?: 'narrow' | 'short' | 'long',
//   numberingSystem?: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | ' gujr' | 'guru' | 'hanidec' | 'khmr' | ' knda' | 'laoo' | 'latn' | 'limb' | 'mlym' | ' mong' | 'mymr' | 'orya' | 'tamldec' | ' telu' | 'thai' | 'tibt',
//   hourCycle?: 'h11' | 'h12' | 'h23' | 'h24',
//   /**
//    * Warning! Partial support 
//    */
//   fractionalSecondDigits?: 0 | 1 | 2 | 3
// }
class TimeFormatted extends HTMLElement {
    connectedCallback() {
        let date = new Date(this.getAttribute('datetime') || Date.now());
        let options = {
            year: this.getAttribute('year'),
            month: this.getAttribute('month'),
            day: this.getAttribute('day'),
            hour: this.getAttribute('hour'),
            minute: this.getAttribute('minute'),
            second: this.getAttribute('second'),
            timeZoneName: this.getAttribute('time-zone-name'),
        };
        this.innerHTML = new Intl.DateTimeFormat("default", options).format(date);
    }
}
customElements.define("time-format", TimeFormatted);



/***/ }),

/***/ "./src/Libs/omron-tag.ts":
/*!*******************************!*\
  !*** ./src/Libs/omron-tag.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init2": () => (/* binding */ init2)
/* harmony export */ });
const template = document.createElement(`template`);
template.innerHTML = `
<style>
svg { position:  height: 100%; }
</style>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.51 62.71">
<defs>
    <style>.cls-1{fill:#005eb8;}</style>
</defs>
<g id="レイヤー_2" data-name="レイヤー 2">
    <g id="レイヤー_1-2" data-name="レイヤー 1">
        <path class="cls-1" d="M31.35,49.57A18.22,18.22,0,1,1,49.57,31.35,18.21,18.21,0,0,1,31.35,49.57m0,13.14A31.36,31.36,0,1,0,0,31.35,31.36,31.36,0,0,0,31.35,62.71"/>
        <path class="cls-1" d="M234.71,62.71a31.36,31.36,0,1,1,31.36-31.35,31.36,31.36,0,0,1-31.36,31.35m0-13.14A18.22,18.22,0,1,0,216.5,31.36a18.21,18.21,0,0,0,18.21,18.21"/>
        <path class="cls-1" d="M69.58,1.9V61.22H82.72V12.84H97.05V61.22h13.14V12.84h5.08a9.25,9.25,0,0,1,9.25,9.26V61.22h13.14V22.4a20.91,20.91,0,0,0-20.9-20.91h-34Q76.13,1.49,69.58,1.9Z"/>
        <path class="cls-1" d="M272.33,1.9V61.22h13.14V12.84h14.63a9.26,9.26,0,0,1,9.26,9.26V61.22h13.14V22.4A20.91,20.91,0,0,0,301.6,1.49H285.46C281,1.49,276.68,1.63,272.33,1.9Z"/>
        <path class="cls-1" d="M147.82,1.9V61.22H161V12.84h15.53a9.26,9.26,0,1,1,0,18.51H165.14l20.3,29.87h16.13L187,39.73A19,19,0,0,0,198.88,22.1,20.61,20.61,0,0,0,178.27,1.49H160.94Q154.32,1.49,147.82,1.9Z"/>
    </g>
</g>
</svg>
</div>
`;
class OmronTagComponent extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.attachShadow({ mode: 'open' });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
        //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }
}
customElements.define(`omron-tag`, OmronTagComponent);
function init2() {
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
/* harmony import */ var _Libs_omron_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Libs/omron-tag */ "./src/Libs/omron-tag.ts");






let frame = new _Framework_framework__WEBPACK_IMPORTED_MODULE_1__.framework();
frame.addComponent(new _HomeComponent_HomeComponent__WEBPACK_IMPORTED_MODULE_3__.HomeComponent());
frame.addComponent(new _KinematicComponent__WEBPACK_IMPORTED_MODULE_4__.KinematicComponent());
frame.render();
(0,_Libs_name_tag__WEBPACK_IMPORTED_MODULE_0__.init)();
(0,_Libs_omron_tag__WEBPACK_IMPORTED_MODULE_5__.init2)();
// console.log('¡Hola!');
// console.log('adios');
// document.body.appendChild(component());
// document.body.appendChild(CreateName('Test, injected text'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQyx1QkFBdUIsbUVBQWtCO0FBQ3pDO0FBQ0Esb0RBQUk7QUFDSixzREFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9GcmFtZXdvcmsvZnJhbWV3b3JrLmNzcz80NzFlIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvSG9tZUNvbXBvbmVudC9Ib21lQ29tcG9uZW50LmNzcz84MDM0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0ZyYW1ld29yay9mcmFtZXdvcmsudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9GcmFtZXdvcmsvZnJhbWV3b3JrY29tcG9uZW50LnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvSG9tZUNvbXBvbmVudC9Ib21lQ29tcG9uZW50LnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvS2luZW1hdGljQ29tcG9uZW50LnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvTGlicy9uYW1lLXRhZy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL0xpYnMvb21yb24tdGFnLnRzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2ZyYW1ld29yay5jc3NcIjtcclxuY2xhc3MgZnJhbWV3b3JrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXJidXR0b25zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbGJhcmJ1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gYy5uYW1lO1xyXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obWFpbik7XHJcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGMucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCd0b29sYmFyYnV0dG9uc2VsZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnV0dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnV0dC5jbGFzc0xpc3QuYWRkKCd0b29sYmFyYnV0dG9uc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obWFpbik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGlzLmNvbXBvbmVudHNbMF0ucmVuZGVyKCkpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IHJlbW92ZUNoaWxkcmVuID0gKHBhcmVudCkgPT4ge1xyXG4gICAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7IGZyYW1ld29yayB9O1xyXG4iLCJjbGFzcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy52aWV3LmlubmVyVGV4dCA9IGAke3RoaXMubmFtZX0gQ29udGVudGA7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBmcmFtZXdvcmtjb21wb25lbnQgfTtcclxuIiwiaW1wb3J0IHsgZnJhbWV3b3JrY29tcG9uZW50IH0gZnJvbSAnLi4vRnJhbWV3b3JrL2ZyYW1ld29ya2NvbXBvbmVudCc7XHJcbmltcG9ydCBcIi4vSG9tZUNvbXBvbmVudC5jc3NcIjtcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgZXh0ZW5kcyBmcmFtZXdvcmtjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ015SG9tZScpO1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHRkaXYuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfSBPdmVycmlkZWA7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHRkaXYpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZWJ1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnTG9yZW0nO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgIGFsZXJ0KFwiSGVsbG8gV29ybGQhXCIpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDA7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGV4dGRpdjIuaW5uZXJUZXh0ID0gYCR7aW5kZXh9IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzIGF0cXVlIGN1bSBlc3Qgb2ZmaWNpYSBzdXNjaXBpdCBtYWduaSBibGFuZGl0aWlzLiBBbWV0IGFjY3VzYW11cyBpbXBlZGl0IGFzc3VtZW5kYSBvcHRpbywgcXVvZCBkZWxlY3R1cywgaW4gYWIgb2JjYWVjYXRpIGVsaWdlbmRpIGV0IG5hbSBlYXF1ZS5gO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHRkaXYyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlldyA9IGRpdjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmcmFtZXdvcmtjb21wb25lbnQgfSBmcm9tICcuL0ZyYW1ld29yay9mcmFtZXdvcmtjb21wb25lbnQnO1xyXG5leHBvcnQgY2xhc3MgS2luZW1hdGljQ29tcG9uZW50IGV4dGVuZHMgZnJhbWV3b3JrY29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdLaW5lbWF0aWMgRGVtbycpO1xyXG4gICAgICAgIC8vIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAvLyBsZXQgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIHRleHRkaXYuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfSBPdmVycmlkZWA7XHJcbiAgICAgICAgLy8gZGl2LmFwcGVuZENoaWxkKHRleHRkaXYpXHJcbiAgICAgICAgLy8gbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgLy8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXJidXR0b24nKVxyXG4gICAgICAgIC8vIGJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2tNZSdcclxuICAgICAgICAvLyBkaXYuYXBwZW5kKGJ1dHRvbilcclxuICAgICAgICAvLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgYWxlcnQoXCJIZWxsbyBXb3JsZCFcIilcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMudmlldyA9IGRpdjtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuICA8c3R5bGU+XHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxuICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cIm5hbWUtdGFnXCI+XHJcbiAgICA8aDM+PC9oMz5cclxuICA8L2Rpdj5cclxuYDtcclxuY2xhc3MgVXNlckNhcmQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaGFkb3dSb290LmFwcGVuZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgaDMgPSAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCdoMycpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgICAgIGgzLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmVkIGNvbXBvbmVudCcpO1xyXG4gICAgLy9jdXN0b21FbGVtZW50cy5kZWZpbmUoJ25hbWUtdGFnJywgVXNlckNhcmQpXHJcbiAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJlZCBjb21wb25lbnQnKTtcclxufSk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbn1cclxuLy8gICgoKSA9PiB7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbmFtZS10YWcnLCBVc2VyQ2FyZCk7XHJcbi8vIH0pKCk7XHJcbmZ1bmN0aW9uIENyZWF0ZU5hbWUobmFtZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZSBuYW1lLXRhZyEhISEnKTtcclxuICAgIGxldCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hbWUtdGFnJyk7XHJcbiAgICBwLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xyXG4gICAgbS5hcHBlbmQocCk7XHJcbiAgICByZXR1cm4gbTtcclxufVxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIERhdGVUaW1lRm9ybWF0T3B0aW9ucyBleHRlbmRzIEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zIHtcclxuLy8gICBsb2NhbGVNYXRjaGVyPzogJ2Jlc3QgZml0JyB8ICdsb29rdXAnO1xyXG4vLyAgIHdlZWtkYXk/OiAnbG9uZycgfCAnc2hvcnQnIHwgJ25hcnJvdyc7XHJcbi8vICAgZXJhPzogICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93JztcclxuLy8gICB5ZWFyPzogJ251bWVyaWMnIHwgJzItZGlnaXQnO1xyXG4vLyAgIG1vbnRoPzogJ251bWVyaWMnIHwgJzItZGlnaXQnIHwgJ2xvbmcnIHwgJ3Nob3J0JyB8ICduYXJyb3cnO1xyXG4vLyAgIGRheT86ICdudW1lcmljJyB8ICcyLWRpZ2l0JztcclxuLy8gICBob3VyPzogJ251bWVyaWMnIHwgJzItZGlnaXQnO1xyXG4vLyAgIG1pbnV0ZT86ICdudW1lcmljJyB8ICcyLWRpZ2l0JztcclxuLy8gICBzZWNvbmQ/OiAnbnVtZXJpYycgfCAnMi1kaWdpdCc7XHJcbi8vICAgdGltZVpvbmVOYW1lPzogJ2xvbmcnIHwgJ3Nob3J0JztcclxuLy8gICBmb3JtYXRNYXRjaGVyPzogJ2Jlc3QgZml0JyB8ICdiYXNpYyc7XHJcbi8vICAgaG91cjEyPzogYm9vbGVhbjtcclxuLy8gICAvKipcclxuLy8gICAgKiBUaW1lem9uZSBzdHJpbmcgbXVzdCBiZSBvbmUgb2YgSUFOQS4gVVRDIGlzIGEgdW5pdmVyc2FsbHkgcmVxdWlyZWQgcmVjb2duaXphYmxlIHZhbHVlXHJcbi8vICAgICovXHJcbi8vICAgdGltZVpvbmU/OiAnVVRDJyB8IHN0cmluZztcclxuLy8gICBkYXRlU3R5bGU/OiAnZnVsbCcgfCAnbG9uZycgfCAnbWVkaXVtJyB8ICdzaG9ydCcsXHJcbi8vICAgdGltZVN0eWxlPzogJ2Z1bGwnIHwgJ2xvbmcnIHwgJ21lZGl1bScgfCAnc2hvcnQnLFxyXG4vLyAgIGNhbGVuZGFyPzogJ2J1ZGRoaXN0JyB8ICdjaGluZXNlJyB8ICcgY29wdGljJyB8ICdldGhpb3BpYScgfCAnZXRoaW9waWMnIHwgJ2dyZWdvcnknIHwgJyBoZWJyZXcnIHwgJ2luZGlhbicgfCAnaXNsYW1pYycgfCAnaXNvODYwMScgfCAnIGphcGFuZXNlJyB8ICdwZXJzaWFuJyB8ICdyb2MnLFxyXG4vLyAgIGRheVBlcmlvZD86ICduYXJyb3cnIHwgJ3Nob3J0JyB8ICdsb25nJyxcclxuLy8gICBudW1iZXJpbmdTeXN0ZW0/OiAnYXJhYicgfCAnYXJhYmV4dCcgfCAnYmFsaScgfCAnYmVuZycgfCAnZGV2YScgfCAnZnVsbHdpZGUnIHwgJyBndWpyJyB8ICdndXJ1JyB8ICdoYW5pZGVjJyB8ICdraG1yJyB8ICcga25kYScgfCAnbGFvbycgfCAnbGF0bicgfCAnbGltYicgfCAnbWx5bScgfCAnIG1vbmcnIHwgJ215bXInIHwgJ29yeWEnIHwgJ3RhbWxkZWMnIHwgJyB0ZWx1JyB8ICd0aGFpJyB8ICd0aWJ0JyxcclxuLy8gICBob3VyQ3ljbGU/OiAnaDExJyB8ICdoMTInIHwgJ2gyMycgfCAnaDI0JyxcclxuLy8gICAvKipcclxuLy8gICAgKiBXYXJuaW5nISBQYXJ0aWFsIHN1cHBvcnQgXHJcbi8vICAgICovXHJcbi8vICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0cz86IDAgfCAxIHwgMiB8IDNcclxuLy8gfVxyXG5jbGFzcyBUaW1lRm9ybWF0dGVkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKSB8fCBEYXRlLm5vdygpKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgeWVhcjogdGhpcy5nZXRBdHRyaWJ1dGUoJ3llYXInKSxcclxuICAgICAgICAgICAgbW9udGg6IHRoaXMuZ2V0QXR0cmlidXRlKCdtb250aCcpLFxyXG4gICAgICAgICAgICBkYXk6IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXknKSxcclxuICAgICAgICAgICAgaG91cjogdGhpcy5nZXRBdHRyaWJ1dGUoJ2hvdXInKSxcclxuICAgICAgICAgICAgbWludXRlOiB0aGlzLmdldEF0dHJpYnV0ZSgnbWludXRlJyksXHJcbiAgICAgICAgICAgIHNlY29uZDogdGhpcy5nZXRBdHRyaWJ1dGUoJ3NlY29uZCcpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZU5hbWU6IHRoaXMuZ2V0QXR0cmlidXRlKCd0aW1lLXpvbmUtbmFtZScpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImRlZmF1bHRcIiwgb3B0aW9ucykuZm9ybWF0KGRhdGUpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRpbWUtZm9ybWF0XCIsIFRpbWVGb3JtYXR0ZWQpO1xyXG5leHBvcnQgeyBpbml0IH07XHJcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgdGVtcGxhdGVgKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48c3R5bGU+XHJcbnN2ZyB7IHBvc2l0aW9uOiAgaGVpZ2h0OiAxMDAlOyB9XHJcbjwvc3R5bGU+XHJcbjxkaXY+XHJcbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIyLjUxIDYyLjcxXCI+XHJcbjxkZWZzPlxyXG4gICAgPHN0eWxlPi5jbHMtMXtmaWxsOiMwMDVlYjg7fTwvc3R5bGU+XHJcbjwvZGVmcz5cclxuPGcgaWQ9XCLjg6zjgqTjg6Tjg7xfMlwiIGRhdGEtbmFtZT1cIuODrOOCpOODpOODvCAyXCI+XHJcbiAgICA8ZyBpZD1cIuODrOOCpOODpOODvF8xLTJcIiBkYXRhLW5hbWU9XCLjg6zjgqTjg6Tjg7wgMVwiPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTMxLjM1LDQ5LjU3QTE4LjIyLDE4LjIyLDAsMSwxLDQ5LjU3LDMxLjM1LDE4LjIxLDE4LjIxLDAsMCwxLDMxLjM1LDQ5LjU3bTAsMTMuMTRBMzEuMzYsMzEuMzYsMCwxLDAsMCwzMS4zNSwzMS4zNiwzMS4zNiwwLDAsMCwzMS4zNSw2Mi43MVwiLz5cclxuICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk0yMzQuNzEsNjIuNzFhMzEuMzYsMzEuMzYsMCwxLDEsMzEuMzYtMzEuMzUsMzEuMzYsMzEuMzYsMCwwLDEtMzEuMzYsMzEuMzVtMC0xMy4xNEExOC4yMiwxOC4yMiwwLDEsMCwyMTYuNSwzMS4zNmExOC4yMSwxOC4yMSwwLDAsMCwxOC4yMSwxOC4yMVwiLz5cclxuICAgICAgICA8cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk02OS41OCwxLjlWNjEuMjJIODIuNzJWMTIuODRIOTcuMDVWNjEuMjJoMTMuMTRWMTIuODRoNS4wOGE5LjI1LDkuMjUsMCwwLDEsOS4yNSw5LjI2VjYxLjIyaDEzLjE0VjIyLjRhMjAuOTEsMjAuOTEsMCwwLDAtMjAuOS0yMC45MWgtMzRRNzYuMTMsMS40OSw2OS41OCwxLjlaXCIvPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTI3Mi4zMywxLjlWNjEuMjJoMTMuMTRWMTIuODRoMTQuNjNhOS4yNiw5LjI2LDAsMCwxLDkuMjYsOS4yNlY2MS4yMmgxMy4xNFYyMi40QTIwLjkxLDIwLjkxLDAsMCwwLDMwMS42LDEuNDlIMjg1LjQ2QzI4MSwxLjQ5LDI3Ni42OCwxLjYzLDI3Mi4zMywxLjlaXCIvPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTE0Ny44MiwxLjlWNjEuMjJIMTYxVjEyLjg0aDE1LjUzYTkuMjYsOS4yNiwwLDEsMSwwLDE4LjUxSDE2NS4xNGwyMC4zLDI5Ljg3aDE2LjEzTDE4NywzOS43M0ExOSwxOSwwLDAsMCwxOTguODgsMjIuMSwyMC42MSwyMC42MSwwLDAsMCwxNzguMjcsMS40OUgxNjAuOTRRMTU0LjMyLDEuNDksMTQ3LjgyLDEuOVpcIi8+XHJcbiAgICA8L2c+XHJcbjwvZz5cclxuPC9zdmc+XHJcbjwvZGl2PlxyXG5gO1xyXG5jbGFzcyBPbXJvblRhZ0NvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIChfYSA9IHRoaXMuc2hhZG93Um9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICAvL3RoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVyVGV4dCA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGBvbXJvbi10YWdgLCBPbXJvblRhZ0NvbXBvbmVudCk7XHJcbmZ1bmN0aW9uIGluaXQyKCkge1xyXG59XHJcbmV4cG9ydCB7IGluaXQyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vTGlicy9uYW1lLXRhZyc7XHJcbmltcG9ydCB7IGZyYW1ld29yayB9IGZyb20gJy4vRnJhbWV3b3JrL2ZyYW1ld29yayc7XHJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vSG9tZUNvbXBvbmVudC9Ib21lQ29tcG9uZW50JztcclxuaW1wb3J0IHsgS2luZW1hdGljQ29tcG9uZW50IH0gZnJvbSAnLi9LaW5lbWF0aWNDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpbml0MiB9IGZyb20gJy4vTGlicy9vbXJvbi10YWcnO1xyXG5sZXQgZnJhbWUgPSBuZXcgZnJhbWV3b3JrKCk7XHJcbmZyYW1lLmFkZENvbXBvbmVudChuZXcgSG9tZUNvbXBvbmVudCgpKTtcclxuZnJhbWUuYWRkQ29tcG9uZW50KG5ldyBLaW5lbWF0aWNDb21wb25lbnQoKSk7XHJcbmZyYW1lLnJlbmRlcigpO1xyXG5pbml0KCk7XHJcbmluaXQyKCk7XHJcbi8vIGNvbnNvbGUubG9nKCfCoUhvbGEhJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdhZGlvcycpO1xyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDcmVhdGVOYW1lKCdUZXN0LCBpbmplY3RlZCB0ZXh0JykpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=