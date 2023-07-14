/**
 * Un pokemon solo puede realizar un ataque especial cada 3 ataques normales. 
 * 
 * Modifica el constructor para guardar la información necesaria para controlar cuando es que el pokemon puede usar su ataque especial
 * 
 * Deberás modificar el método 'atacar' para que, una vez ataque normal, cuente como carga del ataque especial.
 * 
 * Y a su vez, deberás modificar 'ataqueEspecial' para que 'resetee' el contador de ataques
 * 
 * Ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU3OV8xNTc3MzUwMQ
 *  
 * 
 */


class Pokemon {
    constructor(id, name, type, life, attack, defense, specialAttack) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.normalAttacks = 0;
    }

    atacar(pokemon) {
        let attackNumber = Math.floor(Math.random() * this.attack);
        let defenseNumber = Math.floor(Math.random() * pokemon.defense);

        let pokemonBLife = pokemon.life - (attackNumber - defenseNumber);

        console.log(`${this.name} ataca a ${pokemon.name}.`);
        console.log(`${this.name} ataca con ${attackNumber} puntos de daño.`);
        console.log(`${pokemon.name} consigue una defensa de ${defenseNumber} puntos.`);

        if (attackNumber < defenseNumber) {
            console.log(`${this.name} ha fallado el ataque!`);
        } else if (attackNumber > defenseNumber) {
            console.log(`${this.name} asesta ${attackNumber - defenseNumber} puntos de daño.`);
        };

        console.log(`La salud de ${pokemon.name} es ahora de ${pokemonBLife} puntos de vida.`);

        this.normalAttacks++;

        if (this.normalAttacks % 3 === 0) {
            this.ataqueEspecial(pokemon);
        }
    }

    ataqueEspecial(pokemon) {

        let attackNumber = Math.floor(Math.random() * this.attack) * this.specialAttack.incremento;
        let defenseNumber = Math.floor(Math.random() * pokemon.defense);
        let pokemonBLife = pokemon.life - (attackNumber - defenseNumber);

        console.log(`${this.name} ataca a ${pokemon.name}.`);
        console.log(`${this.name} ataca con ${attackNumber} puntos de daño.`);
        console.log(`${pokemon.name} consigue una defensa de ${defenseNumber} puntos.`);

        if (attackNumber < defenseNumber) {
            console.log(`${this.name} ha fallado el ataque!`);
        } else if (attackNumber > defenseNumber) {
            console.log(`${this.name} asesta ${attackNumber - defenseNumber} puntos de daño.`);
        };

        console.log(`La salud de ${pokemon.name} es ahora de ${pokemonBLife} puntos de vida.`);
        
        this.normalAttacks = 0;
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, { especial: "Hoja afilada", incremento: 10 });
let squirtle = new Pokemon(4, "Squirtle", ['Water'], 44, 48, 65);

console.log(bulbasaur);


// bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)


// TESTS: El primer araque especial deberia fallar tal y como se muestra en el ejemplo!

bulbasaur.ataqueEspecial(squirtle)
bulbasaur.atacar(squirtle)
bulbasaur.atacar(squirtle)
bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)





