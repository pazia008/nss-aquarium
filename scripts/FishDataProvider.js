const fishCollection = [{
        name: "Bart",
        species: "Betta-fish",
        length: 6,
        location: "random pond",
        food: "crustaceans",
        image: "redblue.png",
    },

    {
        name: "Wonda Sue",
        species: "Betta-fish",
        length: 12,
        location: "Neighbor 's backyard pond",
        food: "Candy",
        image: "yellowfish.png"
    },

    {
        name: "Flippy",
        species: "Triggerfish",
        length: 7,
        location: "Sewer",
        food: "Sewage",
        image: "trigger.png"

    },

    {
        name: "Big Bertha",
        species: "Silver Dollar fish",
        length: 3,
        location: "forest lake",
        food: "algae",
        image: "bertha.png"
    }

]
export const useFish = () => {
    return fishCollection.slice()
}






export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }


    return regularFish
}