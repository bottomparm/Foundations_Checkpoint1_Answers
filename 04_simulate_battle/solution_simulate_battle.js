class Pokemon {
    constructor(name, health, attackBonus){
        this.name = name;
        this.health = health;
        this.attackBonus = attackBonus;
    }

    biteAttack(){
        return this.attackBonus + 2;
    }

    isDefeated(){
        if (this.health > 0){
            return false;
        }else{
            return true;
        }
    }

}

let simulateBattle = (poke1, poke2, first) => {
    if (poke1.health <= 0){
        return `${poke2.name} Wins!`
    }

    if (poke2.health <= 0){
        return `${poke1.name} Wins!`
    }
    
    if (poke1.name === first){
        poke2.health = poke2.health - poke1.biteAttack();
        return simulateBattle(poke1, poke2, poke2.name);
    }

    if (poke2.name === first){
        poke1.health = poke1.health - poke2.biteAttack();
        return simulateBattle(poke1, poke2, poke1.name);
    }

}

let Krabby = new Pokemon("Krabby", 100, 50);
let Squirtle = new Pokemon("Squirtle", 50, 0);

console.log(Krabby, Squirtle);
console.log(simulateBattle(new Pokemon("Krabby", 100, 50), new Pokemon("Squirtle", 50, 0), "Krabby")); // returns `"Krabby Wins!"

