import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class MenuHexagono extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"menu_hexagono.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-menuhexagono', MenuHexagono);