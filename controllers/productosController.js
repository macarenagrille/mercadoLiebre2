const products = require('../data/products')

const productosController = {
    detalle: (req,res)=>{

        let producto = products.find(producto => {
            return producto.id === +req.params.id //Con el "+" adelante convierte un string a Number
        })/* Realizar simpre comparaciones estrictas */

        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        res.render('detalle', {
            nombre: producto.name,
            descripcion: producto.description,
            imagen: producto.image,
            precio: producto.price,
            descuento: producto.discount,
            precioFinal : toThousand((producto.price - (producto.price * producto.discount / 100)).toFixed(0))
        })
    }
}

module.exports = productosController