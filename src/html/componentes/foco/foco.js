import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Foco extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"foco.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-foco', Foco);