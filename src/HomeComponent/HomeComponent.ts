import { frameworkcomponent } from '../Framework/frameworkcomponent';
import "./HomeComponent.css";

export class HomeComponent extends frameworkcomponent {

    constructor() {

        super('MyHome');

        let div = document.createElement('div');

        let textdiv = document.createElement('div');
        textdiv.innerText = `${this.name} Override`;
        div.appendChild(textdiv)

        this.view = div;
    }
}