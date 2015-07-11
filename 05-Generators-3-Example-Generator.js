
/*  REST handler for "GET /products/{id}"  */
handler: co(function * (request) {
    /*  determine product id  */
    let id = request.params.id

    /*  load product information  */
    let product = yield dm.Product.findOne({
        where: { productHandle: id }
    })
    if (product === null)
        throw Boom.create(404, `product not found: "${id}"`)

    /*  load related information  */
    let [
        productQuantities,
        productGroups,
        productParams,
        productVats,
        productRedeems
    ] = yield Promise.all([
        dm.ProductQuantity.findAll({
            where: { productId: product.productId }
        })
        product.getProductGroups()
        product.getProductParams()
        product.getProductVats()
        product.getProductRedeems()
    ])

    /*  produce response  */
    let response = { ... }
    return response
})

