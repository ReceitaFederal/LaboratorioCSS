export class HexagonoAnimacao extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor hexagono_animacao.js");

        console.log(`URL do foco.js: ${import.meta.url}`)
        fetch('./componentes/hexagono_animacao/hexagono_animacao.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-hexagono', HexagonoAnimacao);