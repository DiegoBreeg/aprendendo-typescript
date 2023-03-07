export function squareOf(n: number) {
    return n * n
}


function any() {
    let a: any = 666 //any
    let b: any = ['danger'] //any
    let c = a + b //any
}

function unknown() {
    let a: unknown = 30 //unknown
    let b = a === 123 //boolean
    //let c = a + 10  sem checagem o código gera erro
    if (typeof a === 'number') {
        let d = a + 10 //com checagem o código é permitido
    }
}

function boolean() {
    let a = true //boolean
    var b = false //boolean
    const c = true //true
    let d: boolean = true //boolean
    let e: true = true //true
    //let f: true = false Error TS2322: Type 'false' is not
    // to type 'true'
}

function number() {
    let a = 1234 //number
    var b = Infinity * 0.10 //number
    const c = 5678 //5678
    let d = a < b //boolean
    let e: number = 100 //number
    let f: 26.218 = 26.218 //26.218
    //let g: 26.128 = 10 Error TS2322: Type '10' is not assignable
    // to type '26.128'
}

