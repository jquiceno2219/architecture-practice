class InventoryRepository {
    constructor () {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
    }

    findById(id) {
        return this.products.find(product => product.id === id);
    }
    
    editProduct(product) {
        const i = this.products.find(product => product.id === this.products.id);
        if (i !== -1){
            this.products[i] = product;
        }
    }

    showAllProducts() {
        console.log("Inventario:");
        this.products.forEach(product => {
            console.log(`${product.name}: ${product.stock} unidades`);
        });
    }
}

module.exports = InventoryRepository;