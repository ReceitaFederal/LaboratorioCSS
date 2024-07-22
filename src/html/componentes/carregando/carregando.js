import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";


export class Carregando extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"carregando.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-carregando', Carregando);