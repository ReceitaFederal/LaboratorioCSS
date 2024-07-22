import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class BotaoNeon extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"botao_neon.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-botaoneon', BotaoNeon);