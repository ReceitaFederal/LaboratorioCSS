import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Tentativa extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"tentativa.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-tentativa', Tentativa);