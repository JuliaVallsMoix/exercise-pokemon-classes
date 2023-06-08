// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque 
// pokemonA.atacar(PokemonB)

/**
 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"
 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ
 */

class Pokemon {
    constructor(id, name, type, life, attack, defense){
        this.id = id;
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
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
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49);
let squirtle = new Pokemon(4, "Squirtle", ['Water'], 44, 48, 65);

bulbasaur.atacar(squirtle)


