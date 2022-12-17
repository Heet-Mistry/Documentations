function ok(id: number): undefined | string{
    if (id == 0) return undefined
    return id.toString();
}

const val = ok(0)
const aval = ok(1)

console.log(val?.toLowerCase())
console.log(aval?.toUpperCase())