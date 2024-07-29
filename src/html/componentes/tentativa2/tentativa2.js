import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";


export class CardTentativa extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"tentativa2.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-tentativa2', CardTentativa);