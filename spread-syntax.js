// Objects

const pikachu = { name: 'Pikachu 🐹'  };
const stats = { hp: 40, attack: 60, defense: 45 }

'Плохой код 💩'

pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp: 45 })


'Хороший код ✅'

const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }


// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Плохой код 💩'

pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

'Хороший код ✅'

pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']
