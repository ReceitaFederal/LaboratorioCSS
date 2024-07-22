import { ComponenteBase } from "../../bibliotecas/ultima/componente_base.js";

export class RadioButton extends ComponenteBase{
    
    constructor(){        
        super({templateURL:"radio_button.html", shadowDOM:false}, import.meta.url);        
    }
}
customElements.define('br-radiobutton', RadioButton);