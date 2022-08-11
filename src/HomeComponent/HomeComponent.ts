import { frameworkcomponent } from '../Framework/frameworkcomponent';
import "./HomeComponent.css";

export class HomeComponent extends frameworkcomponent {

    constructor() {

        super('MyHome');

        let div = document.createElement('div');

        let textdiv = document.createElement('div');
        textdiv.innerText = `${this.name} Override`;
        div.appendChild(textdiv)

        let button = document.createElement('button')
        button.classList.add('homebutton')
        button.innerText = 'ClickMe'
        div.append(button)
        button.addEventListener('click', () => {
           alert("Hello World!")
        })

        for (let index = 0; index < 100; index++) {
            let textdiv2 = document.createElement('div');
            textdiv2.innerText = `${index} Hi`;
            div.appendChild(textdiv2)          
        }

        this.view = div;
    }
}