class ProductManager {
    constructor() {
      this.productos = [];
      this.productoContadorId = 1;
    }
  
    agregarProducto(producto) {
      if (!this.productoValido(producto)) {
        console.log("Producto Invalido");
        return;
      }
  
      if (this.codigoDuplicado(producto.codigo)) {
        console.log("Codigo del producto ya existe");
        return;
      }
  
      producto.id = this.productoContadorId++;
      this.productos.push(producto);
    }
  
    getProducts() {
      return this.productos;
    }
  
    getProductById(id) {
      const producto = this.productos.find(prod => prod.id === id);
      if (!producto) {
        console.log("Producto no encontrado");
      }
      return producto;
    }
  
    productoValido(producto) {
      return (
        producto.titulo &&
        producto.descripcion &&
        producto.precio &&
        producto.imagen &&
        producto.codigo &&
        producto.stock !== undefined
      );
    }
  
    codigoDuplicado(codigo) {
      return this.productos.some(prod => prod.codigo === codigo);
    }
  }
  
 
  const productManager = new ProductManager();
  
  productManager.agregarProducto({
    titulo: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: 100,
    imagen: "ruta/imagen1.jpg",
    codigo: "abc123",
    stock: 10
  });
  
  productManager.agregarProducto({
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: 200,
    imagen: "ruta/imagen2.jpg",
    codigo: "abc124",
    stock: 5
  });
  
  console.log("Lista de productos:", productManager.getProducts());
  console.log("Producto con ID 1:", productManager.getProductById(1));
  console.log("Producto con ID 2:", productManager.getProductById(2));
  console.log("Producto con ID 3:", productManager.getProductById(3));
  