import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Pulsacao extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"pulsacao.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-pulsa', Pulsacao);