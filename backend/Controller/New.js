
const New = require("./Newshema")


const generatelist=async(req,res) => {
    const {description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer, propertysize,phone,email,image,location,sell} = req.body
    const listingdata=New.create({
        description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer, propertysize,phone,email,image,location,sell
    })
    res.json(listingdata)
}


const getlist=async(req,res)=>{
    const collectionlist = await New.find()
    res.json(collectionlist)
}

module.exports = {generatelist,getlist}