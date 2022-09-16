import "./framework.css";

export type Type<T> = new (...args: any[]) => T;

class Page1Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page One';
  }
}

class Page2Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page Two';
  }
}

class Page3Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page Three';
  }
}

class Page4Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Page Four';
  }
}

class MainComponent extends HTMLElement {

  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
    <div class="container">
      <app-router-outlet>
      </app-router-outlet>
    </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}


class RouterOutletComponent extends HTMLElement {

  private routes: { [path: string]: Type<HTMLElement> }

  constructor() {
    super();
    this.routes = {
      // '': Page1Component,
      // '#page1': HomeWebComponent,
      // '#page2': KinematicWebComponent,
      // '#page3': Page3Component
    };
  }

  setRoutes(newroutes: { [path: string]: Type<HTMLElement> }) {
    this.routes = newroutes
  }

  connectedCallback() {
    window.addEventListener('hashchange',
      (e: HashChangeEvent) => this.locationHashChanged(e));
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange',
      (e: HashChangeEvent) => this.locationHashChanged(e));
  }

  locationHashChanged(e: HashChangeEvent) {
    const paths = Object.keys(this.routes);
    if (paths.some(r => r === window.location.hash)) {
      this.innerHTML = '';
      const type = this.routes[window.location.hash];
      const component = new type;
      this.insertAdjacentElement('afterbegin', component);
    }
  }

}

customElements.define('app-main', MainComponent);
customElements.define('app-router-outlet', RouterOutletComponent);
customElements.define('app-page1', Page1Component);
customElements.define('app-page2', Page2Component);
customElements.define('app-page3', Page3Component);
customElements.define('app-page4', Page4Component);








class MenuItemUpdate extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {

    const href = this.getAttribute('href')

    this.innerHTML = `
    <div>
      <a href="${href}" class="navtab">${this.textContent}</a>
    </div>
    `;
  }
}

class CustomMenuUpdate extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
              <div>
                  <slot name="item"></slot>
              </div>`;

              const slot = this.shadowRoot.querySelector<HTMLSlotElement>('slot[name="item"]')
              if (slot) {
                slot.assignedNodes()
                  .forEach((e: Node) => {
                    e.addEventListener('click', (el: Event) => 
                    {
                      const tabs2 = this.querySelectorAll('.navselected')
                      console.log(tabs2)
                      tabs2.forEach(b => {
                        (b as MenuItemUpdate).classList.remove('navselected')
                        console.log('Remove from: ', (b as MenuItemUpdate))
                      })
                      let butt = (el.target as MenuItemUpdate)
                      butt.classList.add('navselected')
                    })
                  })
              }
    }
  }
}


customElements.define('menu-item', MenuItemUpdate);
customElements.define('custom-menu', CustomMenuUpdate);

export {Page1Component, Page3Component, Page4Component, RouterOutletComponent }