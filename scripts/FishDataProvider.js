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