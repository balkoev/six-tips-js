const eagle = {
    name: 'Мартин 🦅',
    legs: 2,
    type: 'Летающий',
    meal: 10,
    diet: 'Мясо'
}

'Плохой код 💩';

function feed(animal) {
    return `Накормить ${animal.name} ${animal.meal} киллограм ${animal.diet}`;
}

'Хороший код ✅';

function feed({ name, meal, diet }) {
    return `Накормить ${name} ${meal} киллограм ${diet}`;
}

// ИЛИ

function feed(animal) {
    const { name, meal, diet } = animal;
    return `Накормить ${name} ${meal} киллограм ${diet}`;
}

console.log(feed(eagle))