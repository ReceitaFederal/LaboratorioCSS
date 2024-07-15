import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class CuboBrilhante extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"cubo_3d.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-cubo', CuboBrilhante);