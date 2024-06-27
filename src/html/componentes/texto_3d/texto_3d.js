export class Texto3d extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do texto_3d.js");

        console.log(`URL do texto_3d.js: ${import.meta.url}`)
        fetch('./componentes/texto_3d/texto_3d.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-texto', Texto3d);