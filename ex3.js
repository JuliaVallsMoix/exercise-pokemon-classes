/**
 * Los pokemons pueden realizar un ataque especial cada cierto tiempo.
 * Implementa un nuevo método de nombre "ataqueEspecial". 
 * 
 * Modifica el constructor para que ahora podamos pasarle otro parámetro que es un OBJETO. Dicho objeto tiene dos propiedades. Por ejemplo: 
 * 
 * {
 *   especial: "Hoja afilada",
 *   incremento: 1.5
 * }
 *  
 * Implementa un nuevo método además de nombre "ataqueEspecial". 
 * Este método de momento hará exactamente lo msimo que el método "ataque"; pero multiplica el daño producido por el valor de la propiedad 'incremento'
 * 
 * PIENSA BIEN como puedes reprovechar el método "atacar" para modificarlo de tal manera que ahora tenga en cuenta el modificador 'incremento'
 */

class Pokemon {
    constructor(id, name, type, life, attack, defense, specialAttack){
        this.id = id;
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
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
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, {especial: "Hoja afilada", incremento: 10});
let squirtle = new Pokemon(4, "Squirtle", ['Water'], 44, 48, 65);

console.log(bulbasaur);


// bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)



