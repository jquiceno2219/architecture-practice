class Product{
    constructor(id, name, description, stock) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.stock = stock
    }
}

module.exports = Product;

// Testing
//const product1 = new Product(1, "Producto 1", "Desc", 10);
//console.log(product1);