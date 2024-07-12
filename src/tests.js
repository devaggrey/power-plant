import { createPlant, createPlantWithAbilities } from './plant';

const testCreatePlant = () => {
    const plant = createPlant('Test Plant');
    console.assert(plant.water(10) === 'Watered Test Plant with 10. Water level: 10, Growth level: 5', 'Test Failed: createPlant water');
    console.assert(plant.getStatus().waterLevel === 10, 'Test Failed: createPlant getStatus waterLevel');
    console.assert(plant.getStatus().growthLevel === 5, 'Test Failed: createPlant getStatus growthLevel');
    console.log('All createPlant tests passed.');
};

const testCreatePlantWithAbilities = () => {
    const plant = createPlantWithAbilities('Test Plant', (p) => ({
        bloom() {
            return `The ${p.getStatus().type} is blooming!`;
        }
    }));
    console.assert(plant.water(10) === 'Watered Test Plant with 10. Water level: 10, Growth level: 5', 'Test Failed: createPlantWithAbilities water');
    console.assert(plant.bloom() === 'The Test Plant is blooming!', 'Test Failed: createPlantWithAbilities bloom');
    console.assert(plant.getStatus().waterLevel === 10, 'Test Failed: createPlantWithAbilities getStatus waterLevel');
    console.assert(plant.getStatus().growthLevel === 5, 'Test Failed: createPlantWithAbilities getStatus growthLevel');
    console.log('All createPlantWithAbilities tests passed.');
};

testCreatePlant();
testCreatePlantWithAbilities();
