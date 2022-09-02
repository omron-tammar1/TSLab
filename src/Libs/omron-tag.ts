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
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  }
}

customElements.define(`omron-tag`, OmronTagComponent);

function init2(){
}

export {init2};