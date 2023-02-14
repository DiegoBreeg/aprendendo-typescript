"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
//# sourceMappingURL=index.js.map