const Ninja = require("./Ninja");

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre, 200)
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria=10; 
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        console.log("tienes +10 de salud")
    }


}
console.log("-----------------------------------")
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
console.log("-----------------------------------")
const superSensei2 = new Sensei("Mr. Miyagui");
superSensei2.speakWisdom();
superSensei2.speakWisdom();
superSensei2.speakWisdom();
superSensei2.showStats(); //segun lo anterioir uno puede llamar a un metodo de clase del padre sin tenerlo declarado en el hijo, ya que showStas solo esta en el padre
console.log("-----------------------------------")
const superSensei3 = new Sensei("Mr. Yoko");
superSensei3.speakWisdom();
superSensei3.speakWisdom();
superSensei3.speakWisdom();
superSensei3.speakWisdom();
superSensei3.speakWisdom();
superSensei3.speakWisdom();
superSensei3.showStats();

const superSensei4 = new Sensei("Mr. Lee");
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.speakWisdom();
superSensei4.showStats();

