export class Carregando extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do carregando.js");

        console.log(`URL do carregando.js: ${import.meta.url}`)
        fetch('./componentes/carregando/carregando.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-carregando', Carregando);