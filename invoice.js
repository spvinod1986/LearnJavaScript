// Example for CommonJS Module Format for export (used in Node)

// Implementation Detail
const _amount = new WeakMap();

// public interface
class Invoice {
    constructor(amount) {
        _amount.set(this, amount);
    }

    generate() {
        console.log('Generating Invoice for amount' + _amount.get(this));
    }
}

// commonjs format of export (used in Node)
module.exports = Invoice;