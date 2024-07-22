import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";


export class Bolhas extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"bolhas.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-bolhas', Bolhas);