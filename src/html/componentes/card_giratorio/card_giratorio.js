export class CardGiratorio extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do card_giratorio.js");

        console.log(`URL do card_giratorio.js: ${import.meta.url}`)
        fetch('./componentes/card_giratorio/card_giratorio.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-cardgiratorio', CardGiratorio);