/**
 * Para aumentar el realistmo del combate, vamos a implementar las debilidades y fortalezas entre los diferentes tipos de pokemon.
 * 
 * Por ejemplo, es bien sabido que los pokemon tipo 'Grass' son fuertes contra los pokemon tipo 'Water'.
 * 
 * Implementa una CLASE NUEVA de nombre PokemonPedia. 
 * 
 * Esta clase tan solo implementa un método de clase o método estático.
 * El método toma por parámetro un tipo de pokemon (string), y devuelve para contra que tipos este es inmune, es débil o bien es fuerte. Como sugerencia de nombre del método puede ser 'obtenerSinergiasPokemon'
 * 
 * Puedes obtener los datos de aquí: https://raw.githubusercontent.com/filipekiss/pokemon-type-chart/master/types.json
 * 
 * Para no complicar mucho las cosas, copia este JSON y guardalo todo entero dentro de una variable que usarás en el mismo método estático 'obtenerSinergiasPokemon' 
 * 
 * Ejemplo de resultado: https://oscarm.tinytake.com/tt/NTAxMzU5OF8xNTc3MzY1NQ
 * 
 * Como paso final, cuando el pokemon realice el ataque especial, debe consultar la PokemonPedia. Si resulta que elpokemon que relize el ataque especial, es "fuerte" contra el pokemon objetivo, debemos multiplicar el incremento POR DOS. En caso contrario, si es un pokemon DEBIL contra el pokemon contra el que realiza el ataque, debemos multiplicar el incremento por 0.5. S
 * 
 * NOTA: Para simplicar la lógica, hemos considerado que un pokemon solo va a ser de un tipo, un array de un solo elemento. Además, no tendremos en cuenta la inmunida de los pokemon. Ten cuidado a la hora de manipular el campo "tipos"; porque no deja de ser un array de una posición.
 * 
 * Ejemplo comate y uso de PokemonPedia: https://pastebin.com/raw/rbMVZq9t
 */


class PokemonPedia {
    static async obtenerSinergiasPokemon(type) {
      const response = await fetch('https://raw.githubusercontent.com/filipekiss/pokemon-type-chart/master/types.json');
      const typeChart = await response.json();
  
      const sinergias = {
        fuerte: [],
        debil: [],
      };
  
      Object.entries(typeChart).forEach(([key, value]) => {
        if (value.fortalezas.includes(type)) {
          sinergias.fuerte.push(key);
        }
        if (value.debilidades.includes(type)) {
          sinergias.debil.push(key);
        }
      });
  
      if (sinergias.fuerte.length === 0) {
        sinergias.fuerte = [];
      }
  
      if (sinergias.debil.length === 0) {
        sinergias.debil = [];
      }
  
      return sinergias;
    }
  }
  
  class Pokemon {
    constructor(id, name, types, life, attack, defense, specialAttack) {
      this.id = id;
      this.name = name;
      this.types = types;
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
      }
  
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
      }
  
      console.log(`La salud de ${pokemon.name} es ahora de ${pokemonBLife} puntos de vida.`);
  
      this.normalAttacks = 0;
  
      const sinergias = PokemonPedia.obtenerSinergiasPokemon(this.types[0].toLowerCase());
  
      let typeMatch = false;
      for (const type of this.types) {
        if (sinergias.fuerte.includes(type)) {
          this.specialAttack.incremento *= 2;
          typeMatch = true;
          break;
        } else if (sinergias.debil.includes(type)) {
          this.specialAttack.incremento *= 0.5;
          typeMatch = true;
          break;
        }
      }
  
      if (!typeMatch) {
        this.specialAttack.incremento = 1.0;
      }
    }
  }
  
  // Test PokemonPedia
  PokemonPedia.obtenerSinergiasPokemon('Grass')
    .then(result => console.log(result))
    .catch(error => console.error(error));
  
  // Test Combat
  let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass'], 45, 49, 49, {
    especial: "Hoja afilada",
    incremento: 1.5
  });
  
  let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
    especial: "Pistola agua",
    incremento: 1.65
  });
  
  bulbasaur.ataqueEspecial(squirtle);
  bulbasaur.atacar(squirtle);
  bulbasaur.atacar(squirtle);
  bulbasaur.atacar(squirtle);
  bulbasaur.ataqueEspecial(squirtle);
  
  
  
  
  
  


