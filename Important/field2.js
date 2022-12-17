"use strict";
function ok(id) {
    if (id == 0)
        return undefined;
    return id.toString();
}
const val = ok(0);
const aval = ok(1);
console.log(val === null || val === void 0 ? void 0 : val.toLowerCase());
console.log(aval === null || aval === void 0 ? void 0 : aval.toUpperCase());
