// Example for CES6 Module Format for export

// Implementation Detail
const _amount = new WeakMap();

// public interface
export class Cart {
    constructor(amount) {
        _amount.set(this, amount);
    }

    checkout() {
        console.log('Checking out Cart for amount' + _amount.get(this));
    }
}