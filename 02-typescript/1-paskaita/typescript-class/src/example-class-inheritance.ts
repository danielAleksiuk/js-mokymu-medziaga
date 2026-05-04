abstract class MenuItem {
    title: string;
    price: number;
    isAvailable: boolean;

    constructor(t: string, p: number, is: boolean) {
        this.title = t;
        this.price = p;
        this.isAvailable = is;
    }

    changeAvailability(): void {
        this.isAvailable = !this.isAvailable;
    }
}

class Burger extends MenuItem {
    constructor(t: string, p: number, is: boolean) {
        super(t, p ,is);
    }

    recipePrice(): number {
        return this.price * 123;
    }
}

class Pizza extends MenuItem {
    constructor(t: string, p: number, is: boolean) {
        super(t, p, is);
    }
}

const randomProduct = new MenuItem('pvz', 1, false);
console.log(randomProduct);

const cheeseBurger = new Burger('big mac', 1, true);
const margarita = new Pizza('margarita', 2, false);

console.log(cheeseBurger);
console.log(cheeseBurger.recipePrice());
cheeseBurger.changeAvailability();
console.log(cheeseBurger);
console.log(margarita);