export class FundoAnimado extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do fundo_animado.js");

        console.log(`URL do card_giratorio.js: ${import.meta.url}`)
        fetch('./componentes/fundo_animado/fundo_animado.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-fundo', FundoAnimado);