export class InputColorido extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do input_colorido.js");

        console.log(`URL do input_colorido.js: ${import.meta.url}`)
        fetch('./componentes/input_colorido/input_colorido.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-inputcolorido', InputColorido);