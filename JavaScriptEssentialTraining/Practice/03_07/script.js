/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const gardenBasket = {
    name: "Basket",
    shovels: {
        smallShovel: "smallShovel",
        mediumShovel: "mediumShovel",
        scoopShovel: "scoopShovel",
    },
    tools: {
        hoe: "hoe",
        miniRake: "miniRake",
        scissors: "scissors",
        twine: "twine",
    },
    color: "brown",
    material: "wicker",
    seeds: {
        squash: {
            zucchini: "zucchini",
            yellowneck: "yellowneck",
        },
        tomato: "tomato",
        pea: "pea",
    },
  };

  console.log(gardenBasket)