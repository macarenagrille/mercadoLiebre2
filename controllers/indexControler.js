const products = require('../data/products')

const indexController = {
    index: (req, res) => {

        const saleProducts = products.filter(product => {
            return product.category === 'in-sale'
        })

        const visitedProducts = products.filter(product => {
            return product.category === 'visited'
        })

        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        /* lo que se pasa por parametra lo convierte a string y usa la funcion replace con una expresion regular que dice que al parametro se le ponga un punto cada 3 caracteres desde atras para adelante. */

        res.render('index', {
            saleProducts,
            visitedProducts,
            toThousand
        })
    }
}

module.exports = indexController