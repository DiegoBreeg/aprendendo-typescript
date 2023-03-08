export function squareOf(n: number) {
    return n * n
}


export function any() {
    let a: any = 666 //any
    let b: any = ['danger'] //any
    let c = a + b //any
}

export function unknown() {
    let a: unknown = 30 //unknown
    let b = a === 123 //boolean
    //let c = a + 10  sem checagem o código gera erro
    if (typeof a === 'number') {
        let d = a + 10 //com checagem o código é permitido
    }
}

export function boolean() {
    let a = true //boolean
    var b = false //boolean
    const c = true //true
    let d: boolean = true //boolean
    let e: true = true //true
    //let f: true = false Error TS2322: Type 'false' is not
    // to type 'true'
}

export function number() {
    let a = 1234 //number
    var b = Infinity * 0.10 //number
    const c = 5678 //5678
    let d = a < b //boolean
    let e: number = 100 //number
    let f: 26.218 = 26.218 //26.218
    //let g: 26.128 = 10 Error TS2322: Type '10' is not assignable
    // to type '26.128'
}

export function bigInt() {
    let a = 1234n //bigint
    const b = 5678n //5678n
    var c = a + b // bigint
    let d = a < 1235 //boolean
    //let e = 88.5n Error TS1353: A bigint literal must be an integer
    let f: bigint = 100n //bigint
    let g: 100n = 100n //100n
    //let h: bigint = 100 Error TS2322: Type '100' is not assignable
    // to type 'bigint'
}

export function string() {
    let a = 'hello' //string
    var b = 'billy' //string
    const c = '!' //'!'
    let d = a + '' + b + c //string
    let e: string = 'zoom' //string
    let f: 'john' = 'john' //'john
    //let g: 'john' = 'zoe' Error TS2322: Type "zoe" is not assignable
    //to type "john"
}

export function symbol() {
    let a = Symbol('a') //symbol
    let b: symbol = Symbol('b') //symbol
    var c = a === b //bollean
    //let d = a + 'x' Error TS2469: The '+' operator cannot be applied
    //to type 'symbol
    const e = Symbol('e') //typeof e
    const f: unique symbol = Symbol('f') //f
    //let g: unique symbol = Symbol('f') Error TS1332: A variable whose
    //'unique symbol' type must be 'const'
    let h = e === e // boolean
    //let i = e === f Error TS2367: this condition will always
    //'false' since the types 'unique symbol'
}

function ObjectA() {
    let a: object = {
        b: 'x'
    }
}

function ObjectB() {
    let a = {
        b: 'x'
    }
}

function ObjectC() {
    let a: { b: number } = {
        b: 10
    }
}

function ClassObject() {
    class Person {
        constructor(
            public firstName: string,
            public lastName: string
        ){}
    }
    
    const c = new Person('diego', 'lucas')
    console.log(c)
}


