type Input = { name: string, amount: number }

type Item = {
    name: string,
    output: number,
    input: Input[]
}

const carbonSubstrate: Item = {
    name: "carbon Substrate",
    output: 20,
    input: [{
        name: "plant_fibers",
        amount: 16
    },
    {
        name: "Stone Dust",
        amount: 2
    }]
}

const crushedStone: Item = {
    name: "crushed Stone",
    output: 1,
    input: []
}

console.log(crushedStone)