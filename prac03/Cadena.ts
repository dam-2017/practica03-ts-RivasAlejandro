export class Cadena {
    
    public cadenita: string;

    constructor(cad: string){
        this.cadenita = cad;
    

}

    pal():boolean{
        var sinespacios: string = this.cadenita.replace(/ /g, "");
        sinespacios = sinespacios.toLowerCase();
        for (let i = 0, j=sinespacios.length-1; i < Math.floor(sinespacios.length/2); i++, j--){

            if (sinespacios[i] != sinespacios[j]){

                
                return false;
            }
        }
        return true;
    }

    vocales():string{
        let a:number = 0;
        let e:number = 0;
        let i:number = 0;
        let o:number = 0;
        let u:number = 0;
        let aux:string;
        for (let j = 0; j< this.cadenita.length; j++){
            aux = this.cadenita[j].toLowerCase();
            switch (aux){
                case "a":
                    a++;
                break;
                case "e":
                    e++;
                break;
                case "i":
                    i++;
                break;
                case "o":
                    o++;
                break;
                case "u":
                    u++;
                break;
            }
        }
        return `Vocales:
        a: ${a}
        e: ${e}
        i: ${i}
        o: ${o}
        u: ${u}`;
    }

    letras():number{
        let letters: number = this.cadenita.length;
        for (let i = 0; i < letters; i++){
            if (this.cadenita[i] == " "){
                letters --;
            }
        }
        return letters;
    }

    countWords():number{
        let cadenaSplit: any;
        cadenaSplit = this.cadenita.split(" ");
        return cadenaSplit.length;
    }
}












