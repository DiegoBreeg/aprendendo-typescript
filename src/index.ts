function kgToLbs(weight:  number | string): number {
    //Narrowing
    if(typeof weight === 'number') 
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')