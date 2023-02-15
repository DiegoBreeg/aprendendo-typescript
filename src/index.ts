type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void    
}

let employee: Employee = {
    id: 1,
    name: 'Diego',
    retire: (date: Date) => {
        console.log(date)
    }
}