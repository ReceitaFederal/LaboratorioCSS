import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class FundoAnimado extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"fundo_animado.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-fundo', FundoAnimado);