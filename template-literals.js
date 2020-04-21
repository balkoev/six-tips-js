const horse = {
    name: 'Мартин 🐴',
    size: 'средний',
    skills: ['боевой', 'быстрый как пуля'],
    age: 7
}

'Плохой код 💩'

let bio = horse.name + ' имеет ' + horse.size + ' размер ' + ' и он ' + horse.skills.join(' и ')

'Хороший код ✅'
const { name, size, skills } = horse;
bio = `${name} имеет ${size} размер и он ${skills.join(' и ')}`
console.log(bio);


function horseAge(str, age) {
    
    const ageStr = age > 5 ? 'старая' : 'молодая';
    return `${str[0]}${ageStr} в ${age} лет`;
}

const bio2 = horseAge`Лошадь ${horse.age}`;
console.log(bio2);
