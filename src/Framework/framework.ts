import { frameworkcomponent } from "./frameworkcomponent";

class framework {

    private components: Array<frameworkcomponent> = new Array<frameworkcomponent>()

    constructor(){
    }

    addComponent(component: frameworkcomponent){
        this.components.push(component)
    }

    render() {

        let header = document.querySelector('.header')!
        let main = document.querySelector('.main')!

        this.components.forEach(c => {
            let button = document.createElement('button')
            button.classList.add('toolbarbutton')
            button.innerText = c.name
            header.append(button)
            button.addEventListener('click', () => main.innerHTML = c.render())
        })

    }
}

export {framework}