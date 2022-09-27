class Ninja{
    constructor(nombre, salud=0){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3; 
        this.fuerza = 3;
    }
    sayName(){
        console.log("El Nija se llama"+" "+this.nombre);
    }
    showStats(){
        console.log("El Nija se llama"+" "+this.nombre);
        console.log("Este Nija tiene una fuerza de"+" "+this.fuerza);
        console.log("Este Nija tiene una velocidad de"+" "+this.velocidad);
        console.log("Este Nija tiene una salud de"+" "+this.salud);
    } 
    drinkSake(){
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
console.log("-----------------------------------")
const ninja2 = new Ninja("Yoko", 25);
ninja2.sayName();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.showStats();
console.log("-----------------------------------")
const ninja3 = new Ninja("Chihiro", 455);
ninja3.sayName();
ninja3.drinkSake();
ninja3.drinkSake();
ninja3.drinkSake();
ninja3.showStats();

module.exports = Ninja;