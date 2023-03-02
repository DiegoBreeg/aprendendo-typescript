"use strict";
function makeItem(name, output) {
    return name === '' ? null : { name: name, output: output, input: [] };
}
let carbonSubstrate = makeItem('', 20);
console.log(carbonSubstrate === null || carbonSubstrate === void 0 ? void 0 : carbonSubstrate.input);
//# sourceMappingURL=index.js.map