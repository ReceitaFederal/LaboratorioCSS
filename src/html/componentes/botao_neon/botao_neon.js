export class BotaoNeon extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do botao_neon.js");

        console.log(`URL do botao_neon.js: ${import.meta.url}`)
        fetch('./componentes/botao_neon/botao_neon.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-botaoneon', BotaoNeon);