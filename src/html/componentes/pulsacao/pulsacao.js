export class Pulsacao extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do pulsacao.js");

        console.log(`URL do pulsacao.js: ${import.meta.url}`)
        fetch('./componentes/pulsacao/pulsacao.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-pulsa', Pulsacao);