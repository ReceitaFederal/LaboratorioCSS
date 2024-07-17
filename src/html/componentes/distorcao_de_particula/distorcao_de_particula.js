import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Distorcao extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"distorcao.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-distorcao', Distorcao);