export class CuboBrilhante extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do cubo_3d.js");

        console.log(`URL do cubo_3d.js: ${import.meta.url}`)
        fetch('./componentes/cubo_3d/cubo_3d.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-cubo', CuboBrilhante);