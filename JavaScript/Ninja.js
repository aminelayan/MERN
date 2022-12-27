class Ninja{
    constructor(ninjaName) {
        this.ninjaName=ninjaName;
        this.health=100;
        this.speed=3;
        this.strength=3
    }
     sayName(){
        console.log("name :"+this.ninjaName);
        console.log("--------------------------------------")
}
     showStats(){
        console.log("name: ",this.ninjaName,"\n", "Strength: ",this.strength,"\n","speed: ",this.speed,"\n","health: ",this.health)
         console.log("--------------------------------------")
     }
    drinkSake(){
        this.health +=10;
        console.log(this.health)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{

    constructor(sensiName) {
        super(sensiName);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("Tanas")
        console.log("--------------------------------------")
    }
    showStats() {
        // super.showStats();
        console.log("name: ",this.ninjaName,"\n", "Strength: ",this.strength,"\n","speed: ",this.speed,"\n","health: ",this.health,"\n","wisdom:",this.wisdom)
        console.log("--------------------------------------")
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats()