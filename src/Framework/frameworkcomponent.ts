class frameworkcomponent {

    public view: HTMLElement

    constructor(public name: string){
        this.view = document.createElement('div')
        this.view.innerText = 'hello  ' + this.name
    }

    render() {
        return this.view
    }
}

export {frameworkcomponent}