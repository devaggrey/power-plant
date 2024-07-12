import { createPlant, createPlantWithAbilities } from './plant';

const cactus = createPlant('Cactus');
console.log(cactus.water(5));
console.log(cactus.getStatus());

const rose = createPlantWithAbilities('Rose', (plant) => ({
    bloom() {
        return `The ${plant.getStatus().type} is blooming!`;
    }
}));

console.log(rose.water(10));
console.log(rose.bloom());
console.log(rose.getStatus());
