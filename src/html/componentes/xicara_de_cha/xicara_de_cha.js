import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Xicara extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"xicara_de_cha.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-xicara', Xicara);