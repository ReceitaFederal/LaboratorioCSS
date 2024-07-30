import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";


export class MapaInterativo extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"mapa_interativo.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-mapainterativo', MapaInterativo);