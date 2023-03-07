


export function ExplicitTypes(): Array<any> {
    const a: number = 10
    const b: string = 'hello'
    const c: boolean[] = [true, false]
    const d: {} = { isTrue: true }

    return [a, b, c, d]
}

export function ImplicitTypes(): Array<any> {
    const a = 10
    const b = 'hello'
    const c = [true, false]
    const d = { isTrue: true }

    return [a, b, c, d]
}

