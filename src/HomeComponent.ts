import { frameworkcomponent } from './Framework/frameworkcomponent';

export class HomeComponent extends frameworkcomponent {

    constructor() {

        super('MyHome');

        let div = document.createElement('div');

        let textdiv = document.createElement('div');
        textdiv.innerText = `${this.name} Override`;
        div.appendChild(textdiv)

        let button = document.createElement('button')
        button.classList.add('toolbarbutton')
        button.innerText = 'ClickMe'
        div.append(button)
        button.addEventListener('click', () => {
           alert("Hello World!")
        })

        this.view = div;
    }
}
