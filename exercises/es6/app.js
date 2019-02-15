// // Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").

// // John is the pet owner, and his name should be stored differently than the other names.

// let name = "John"
// let age = 101
// let pets = ["cat", "dog"]
// let petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             const name = "fluffy"
//         } else {
//             const name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// runForLoop()



// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
     arr.map(carrot) =>  
         type: "carrot", name: carrot 
    
}

