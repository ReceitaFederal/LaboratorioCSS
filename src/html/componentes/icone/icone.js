export class Icone extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do icone.js");

        console.log(`URL do icone.js: ${import.meta.url}`)
        fetch('./componentes/icone/icone.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-icone', Icone);