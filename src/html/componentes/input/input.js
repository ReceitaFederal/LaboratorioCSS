import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";
export class Input extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"./input.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-input', Input);