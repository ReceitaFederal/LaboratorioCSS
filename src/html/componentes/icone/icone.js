import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Icone extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"icone.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-icone', Icone);