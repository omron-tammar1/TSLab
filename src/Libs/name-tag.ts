const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: darkolivegreen;
      margin: 10px;
    }
  </style>

  <div class="name-tag">
    <h3></h3>
  </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.append(template.content.cloneNode(true));
    }

    connectedCallback(){
       const h3 = this.shadowRoot?.querySelector('h3')!;
       const name = this.getAttribute('name')!;
      h3.innerText = name;
    }
  }

 
  
  customElements.define('name-tag', UserCard);


  function CreateName(name: string) {
    console.log('Create name-tag!!!!');
    let m = document.createElement('div');
    let p = document.createElement('name-tag');
    p.setAttribute('name', name);
    m.append(p);
    return m;
  }
  
  export default CreateName;