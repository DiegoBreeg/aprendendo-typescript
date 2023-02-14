function calculateTax( income: number):number  {
    let x
    
    if (income <50_000)
        return income * 1.2
    return income * 1.3
}

calculateTax(0)