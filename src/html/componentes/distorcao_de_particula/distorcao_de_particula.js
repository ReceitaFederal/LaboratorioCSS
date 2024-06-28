export class Distorcao extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do distorcao_de_particula.js");

        console.log(`URL do card_giratorio.js: ${import.meta.url}`)
        fetch('./componentes/distorcao_de_particula/distorcao_de_particula.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-distorcao', Distorcao);