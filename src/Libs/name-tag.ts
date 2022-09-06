const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: darkolivegreen;
      margin: 1px;
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

 document.addEventListener('DOMContentLoaded', () => {
  console.log('registered component')
   //customElements.define('name-tag', UserCard)
  console.log('registered component')


  let footer = document.querySelector('[data-test]') as HTMLElement
  console.log(footer)
  console.log(footer?.dataset?.test)
  footer.dataset.test = "456"
  console.log(footer?.dataset?.test)

 })
  
 function init(){
 }

 

//  (() => {
  customElements.define('name-tag', UserCard)
  
// })();

  function CreateName(name: string) {
    console.log('Create name-tag!!!!');
    let m = document.createElement('div');
    let p = document.createElement('name-tag');
    p.setAttribute('name', name);
    m.append(p);
    return m;
  }




















  


  // export interface DateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  //   localeMatcher?: 'best fit' | 'lookup';
  //   weekday?: 'long' | 'short' | 'narrow';
  //   era?:  'long' | 'short' | 'narrow';
  //   year?: 'numeric' | '2-digit';
  //   month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  //   day?: 'numeric' | '2-digit';
  //   hour?: 'numeric' | '2-digit';
  //   minute?: 'numeric' | '2-digit';
  //   second?: 'numeric' | '2-digit';
  //   timeZoneName?: 'long' | 'short';
  //   formatMatcher?: 'best fit' | 'basic';
  //   hour12?: boolean;
  //   /**
  //    * Timezone string must be one of IANA. UTC is a universally required recognizable value
  //    */
  //   timeZone?: 'UTC' | string;
  //   dateStyle?: 'full' | 'long' | 'medium' | 'short',
  //   timeStyle?: 'full' | 'long' | 'medium' | 'short',
  //   calendar?: 'buddhist' | 'chinese' | ' coptic' | 'ethiopia' | 'ethiopic' | 'gregory' | ' hebrew' | 'indian' | 'islamic' | 'iso8601' | ' japanese' | 'persian' | 'roc',
  //   dayPeriod?: 'narrow' | 'short' | 'long',
  //   numberingSystem?: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | ' gujr' | 'guru' | 'hanidec' | 'khmr' | ' knda' | 'laoo' | 'latn' | 'limb' | 'mlym' | ' mong' | 'mymr' | 'orya' | 'tamldec' | ' telu' | 'thai' | 'tibt',
  //   hourCycle?: 'h11' | 'h12' | 'h23' | 'h24',
  //   /**
  //    * Warning! Partial support 
  //    */
  //   fractionalSecondDigits?: 0 | 1 | 2 | 3
  // }



  class TimeFormatted extends HTMLElement {

    connectedCallback() {
      let date = new Date(this.getAttribute('datetime') || Date.now());

    let options:Intl.DateTimeFormatOptions  = {
        year: this.getAttribute('year') as 'numeric' | '2-digit',
        month: this.getAttribute('month') as 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
        day: this.getAttribute('day') as 'numeric' | '2-digit',
        hour: this.getAttribute('hour') as 'numeric' | '2-digit',
        minute: this.getAttribute('minute') as 'numeric' | '2-digit',
        second: this.getAttribute('second') as 'numeric' | '2-digit',
        timeZoneName: this.getAttribute('time-zone-name') as 'long' | 'short',
      }

      this.innerHTML = new Intl.DateTimeFormat("default", options
      ).format(date);
    }
  
  }
  
  customElements.define("time-format", TimeFormatted);


  
  export {init};