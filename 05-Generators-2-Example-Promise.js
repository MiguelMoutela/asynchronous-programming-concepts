
/*  REST handler for "GET /products/{id}"  */
handler: function (request) {
    return new Promise((resolve, reject) => {
        /*  determine product id  */
        let id = request.params.id

        /*  load product information  */
        dm.Product.findOne({
            where: { productHandle: id }
        }).then((product) => {
            if (product === null)
                throw Boom.create(404, `product not found: "${id}"`)

            /*  load related information  */
            Promise.all([
                dm.ProductQuantity.findAll({
                    where: { productId: product.productId }
                }),
                product.getProductGroups(),
                product.getProductParams(),
                product.getProductVats(),
                product.getProductRedeems()
            ]).then(([
                productQuantities,
                productGroups,
                productParams,
                productVats,
                productRedeems
            ]) => {

                /*  produce response  */
                let response = { ... }
                resolve(response)
            })
        })
    })
}

