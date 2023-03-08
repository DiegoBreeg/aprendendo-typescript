"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbol = exports.string = exports.bigInt = exports.number = exports.boolean = exports.unknown = exports.any = exports.squareOf = void 0;
function squareOf(n) {
    return n * n;
}
exports.squareOf = squareOf;
function any() {
    let a = 666;
    let b = ['danger'];
    let c = a + b;
}
exports.any = any;
function unknown() {
    let a = 30;
    let b = a === 123;
    if (typeof a === 'number') {
        let d = a + 10;
    }
}
exports.unknown = unknown;
function boolean() {
    let a = true;
    var b = false;
    const c = true;
    let d = true;
    let e = true;
}
exports.boolean = boolean;
function number() {
    let a = 1234;
    var b = Infinity * 0.10;
    const c = 5678;
    let d = a < b;
    let e = 100;
    let f = 26.218;
}
exports.number = number;
function bigInt() {
    let a = 1234n;
    const b = 5678n;
    var c = a + b;
    let d = a < 1235;
    let f = 100n;
    let g = 100n;
}
exports.bigInt = bigInt;
function string() {
    let a = 'hello';
    var b = 'billy';
    const c = '!';
    let d = a + '' + b + c;
    let e = 'zoom';
    let f = 'john';
}
exports.string = string;
function symbol() {
    let a = Symbol('a');
    let b = Symbol('b');
    var c = a === b;
    const e = Symbol('e');
    const f = Symbol('f');
    let h = e === e;
}
exports.symbol = symbol;
function ObjectA() {
    let a = {
        b: 'x'
    };
}
function ObjectB() {
    let a = {
        b: 'x'
    };
}
function ObjectC() {
    let a = {
        b: 10
    };
}
//# sourceMappingURL=chapter-3.js.map