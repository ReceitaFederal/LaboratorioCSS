export class MenuHexagono extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do menu_hexagono.js");

        console.log(`URL do foco.js: ${import.meta.url}`)
        fetch('./componentes/menu_hexagono/menu_hexagono.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-menuhexagono', MenuHexagono);