const addToCartModel = require("../../models/cartProduct")

const deleteAddToCartProduct = async(req,res)=>{
    try{
        const currentUserId = req.userId
        const addtoCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({ _id : addtoCartProductId})

        res.json({
            message : "Product Deleted From Cart",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = deleteAddToCartProduct