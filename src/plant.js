export const createPlant = (type) => {
    let waterLevel = 0;
    let growthLevel = 0;

    return {
        water(amount) {
            waterLevel += amount;
            growthLevel += amount / 2;
            return `Watered ${type} with ${amount}. Water level: ${waterLevel}, Growth level: ${growthLevel}`;
        },
        getStatus() {
            return { type, waterLevel, growthLevel };
        }
    };
};

export const createPlantWithAbilities = (type, abilities) => {
    const plant = createPlant(type);
    return { ...plant, ...abilities(plant) };
};
