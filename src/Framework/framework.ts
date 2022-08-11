import { frameworkcomponent } from "./frameworkcomponent";
import "./framework.css";

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
        let buttons: Array<HTMLButtonElement> = new Array<HTMLButtonElement>()

        let index = 0
        this.components.forEach(c => {
            let button = document.createElement('button')
            if (index === 0) {
                button.classList.add('toolbarbuttonselected')
                index++
            }
            button.classList.add('toolbarbutton')
            button.innerText = c.name
            header.append(button)
            buttons.push(button)

            button.addEventListener('click', (e: MouseEvent) => {
                removeChildren(main)
                main.appendChild(c.render())
                buttons.forEach(b => b.classList.remove('toolbarbuttonselected'))
                let butt = (e.target as HTMLButtonElement)
                butt.classList.add('toolbarbuttonselected')
            })
        })

        removeChildren(main)
        main.appendChild(this.components[0].render())
    }
}

    const removeChildren = (parent: Element) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild)
        }
    };

export {framework}