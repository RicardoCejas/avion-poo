import { Helice, TrendeAterrizaje, Alas, Cubierta } from './avion';

export class Aeroplano
{
    private  helice: Helice ;
    private  trenAterrizaje:TrendeAterrizaje;
    private  alas: Alas ;
    private  cubierta:Cubierta ;

    constructor( phelice:Helice,  pTrenAterrizaje:TrendeAterrizaje,  pAlas:Alas,  pCubierta:Cubierta)
    {
         this.helice = phelice;
         this.trenAterrizaje = pTrenAterrizaje;
         this.alas = pAlas;
         this.cubierta = pCubierta;
    }
    public  ToString()
    {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;

    }
}
