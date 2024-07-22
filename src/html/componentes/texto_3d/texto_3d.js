import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class Texto3d extends ComponenteBase{

    constructor(){        
        super({templateURL:"texto_3d.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-texto', Texto3d);