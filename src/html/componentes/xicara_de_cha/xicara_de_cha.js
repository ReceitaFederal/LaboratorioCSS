export class Xicara extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do xicara_de_cha.js");

        console.log(`URL do xicara_de_cha.js: ${import.meta.url}`)
        fetch('./componentes/xicara_de_cha/xicara_de_cha.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-xicara', Xicara);