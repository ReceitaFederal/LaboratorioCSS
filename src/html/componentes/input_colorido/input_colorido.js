import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class InputColorido extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"input_colorido.html", shadowDOM:false}, import.meta.url);        
    }

}
customElements.define('br-inputcolorido', InputColorido);