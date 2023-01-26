class Animal{
    #name = "Animal"

    give() {
        console.log(this);
        console.log(this.#name);
    }
}

class Rabbit extends Animal{
    #name = "dasdasd"

}

let r = new Rabbit()
r.give()