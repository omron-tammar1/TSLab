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
    this.innerHTML = 'Page Four!';
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



class MenuComponent extends HTMLElement {

  private routes: [{name: string, link: string}]

  constructor() {
    super();
    this.routes = [{name: "link", link: ""}]
  }

  setRoutes(newroutes: [{name: string, link: string}]) {
    this.routes = newroutes

    const div = document.querySelector('.menucontainer') as HTMLDivElement
    div.innerHTML=''

    this.routes.forEach(r => {
      let d = document.createElement('a')
      d.innerText = r.name
      d.setAttribute('href', r.link)
      d.classList.add('navtab')
      div.appendChild(d)

        d.addEventListener('click', (el: Event) => 
        {
          const tabs2 = this.querySelectorAll('.navselected')
          tabs2.forEach(b => {
            (b as HTMLLinkElement).classList.remove('navselected')
            // console.log('Remove from: ', (b as HTMLLinkElement))
          })
          let butt = (el.target as HTMLLinkElement)
          butt.classList.add('navselected')

          const menuoutercontainer = document.querySelector('.menuoutercontainer') as HTMLDivElement
          const toggleButt = document.querySelector('.toggle') as HTMLDivElement
          const btnStyles = window.getComputedStyle(toggleButt);
          if (btnStyles.display != 'none') menuoutercontainer.classList.add('hidemenucontainer')
        })
    })

    const toggle = document.querySelector('.toggle') as HTMLDivElement
    toggle.addEventListener('click', (el: Event) => 
    {
      const div = document.querySelector('.menuoutercontainer') as HTMLDivElement
      if (div.classList.contains('hidemenucontainer'))
      {
        div.classList.remove('hidemenucontainer')
      }
      else{
        div.classList.add('hidemenucontainer')
      }
      //console.log('Clicked toggle butt')
      //toggle.setAttribute('mark', 'fred')
    })

    // //var targetNode = document.getElementById('elementId');
    // let observer = new MutationObserver(function(mutations){
    //     if (toggle.style.display != 'none') {
    //         // doSomething
    //       }
    //       console.log('Clicked toggle butt "' + toggle.style.display + '"')
    // });
    // observer.observe(toggle, { attributes: true, childList: true });


    function respondToVisibility(element: HTMLElement, callback: (visible: boolean) => void ) {
      var options = {
        root: document.documentElement,
      };
    
      var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          callback(entry.intersectionRatio > 0);
        });
      }, options);
    
      observer.observe(element);
    }

    respondToVisibility(toggle, (visible) => 
    {
      const div = document.querySelector('.menuoutercontainer') as HTMLDivElement
      
      if (visible){
        div.classList.add('hidemenucontainer')
      }
      else {
        div.classList.remove('hidemenucontainer')
      }
      //console.log('Toggle visible: ' + visible)
    })

    //console.log('Registered mutation observer!', observer)
  }

  render() {
    this.innerHTML = `
    <div>
      <div class='toggle'>  
      <svg>
      <line x1="20%" y1="50%" x2="80%" y2="50%"/>
       <line x1="20%" y1="50%" x2="80%" y2="50%"/>
       <line x1="20%" y1="50%" x2="80%" y2="50%"/>
      
    </svg></div>
      <div class="menuoutercontainer">
        <div class="menucontainer">
        </div>
      </div>
    </div>
    `;
  }

  connectedCallback() {
    this.render();
  }

  // disconnectedCallback() {
  //   window.removeEventListener('hashchange',
  //     (e: HashChangeEvent) => this.locationHashChanged(e));
  // }

  // locationHashChanged(e: HashChangeEvent) {
  //   const paths = Object.keys(this.routes);
  //   if (paths.some(r => r === window.location.hash)) {
  //     this.innerHTML = '';
  //     const type = this.routes[window.location.hash];
  //     const component = new type;
  //     this.insertAdjacentElement('afterbegin', component);
  //   }
  // }

}

customElements.define('app-main', MainComponent);
customElements.define('app-router-outlet', RouterOutletComponent);
customElements.define('app-menu', MenuComponent);
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

              this.classList.add('menugrid')

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

export {Page1Component, Page3Component, Page4Component, RouterOutletComponent, MenuComponent }