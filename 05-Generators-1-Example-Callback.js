
/*  REST handler for "GET /products/{id}"  */
handler: function (request, onSuccess, onError) {
    /*  determine product id  */
    let id = request.params.id

    /*  load product information  */
    dm.Product.findOne({
        where: { productHandle: id }
    }, (product) => {
        if (product === null)
            onError(Boom.create(404, `product not found: "${id}"`))

        /*  load related information  */
        dm.ProductQuantity.findAll({
            where: { productId: product.productId }
        }, (productQuantities) => {

            /*  load aggregated information  */
            product.getProductGroups((productGroups) => {
                product.getProductParams((productParams) => {
                    product.getProductVats((productVats) => {
                        product.getProductRedeems((productRedeems) => {

                            /*  produce response  */
                            let response = { ... }
                            onSuccess(response)
                        })
                    })
                })
            })
        })
    })
}

