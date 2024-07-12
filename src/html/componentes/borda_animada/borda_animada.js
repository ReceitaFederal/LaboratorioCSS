import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";


export class BordaAnimada extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"borda_animada.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-bordaanimada', BordaAnimada);