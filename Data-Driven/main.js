const InventoryRepository = require("./inventoryReposity");
const Product = require("./product");

const product1 = new Product(1, "Producto1", "Decripcion", 10);
const product2 = new Product(2, "Producto2", "Test 2", 20);
const product3 = new Product(3, "Producto3", "Test3", 15);

const inventory = new InventoryRepository();

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

inventory.showAllProducts();