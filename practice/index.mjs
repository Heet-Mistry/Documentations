import obj from "./promise.mjs";

let spy = Object.getOwnPropertySymbols(obj);
console.log(spy)
obj[spy[0]] = "dhairya";

export default obj;