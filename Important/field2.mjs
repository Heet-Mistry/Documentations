let x = 20;

function a() {
    let func = new Function('console.log(x)')
    return func;
}

a()()

