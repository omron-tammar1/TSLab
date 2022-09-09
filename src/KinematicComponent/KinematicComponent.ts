import { frameworkcomponent } from '../Framework/frameworkcomponent';
import "./KinematicComponent.css";

export class KinematicComponent extends frameworkcomponent {

    constructor() {

        super('Kinematic Demo');

        let div = document.createElement('div');

        let textdiv = document.createElement('div');
        textdiv.innerText = `${this.name} Override`;
        div.appendChild(textdiv)

        let button = document.createElement('button')
        button.classList.add('homebutton')
        button.innerText = 'Lorem'
        div.append(button)
        button.addEventListener('click', () => {
        //    alert("Hello World!")

            for (let index = 0; index < 100; index++) {
                let textdiv2 = document.createElement('div');
                textdiv2.innerText = `${index} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis atque cum est officia suscipit magni blanditiis. Amet accusamus impedit assumenda optio, quod delectus, in ab obcaecati eligendi et nam eaque.`
                div.appendChild(textdiv2)          
            }
        })

        this.view = div;
    }
}
