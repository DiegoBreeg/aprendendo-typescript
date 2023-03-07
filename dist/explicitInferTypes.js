"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferTypes = exports.ExplicitTypes = void 0;
class ExplicitTypes {
    constructor() {
        this.a = 10;
        this.b = 'hello';
        this.c = [true, false];
        this.d = { isTrue: true };
    }
}
exports.ExplicitTypes = ExplicitTypes;
class InferTypes {
    constructor() {
        this.a = 1;
        this.b = 'hello';
        this.c = [true, false];
        this.d = { name: 'diego' };
    }
}
exports.InferTypes = InferTypes;
//# sourceMappingURL=explicitInferTypes.js.map