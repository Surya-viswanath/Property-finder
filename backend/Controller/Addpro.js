const Add = require("./Addproschema")


const Createlist=async(req,res) => {
    const {description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer, propertysize,phone,email,image,location} = req.body
    const listingdetails=Add.create({
        description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer, propertysize,phone,email,image,location
    })
    res.json(listingdetails)
}


const getcollection=async(req,res)=>{
    const collectionList = await Add.find()
    res.json(collectionList)
}

module.exports = {Createlist,getcollection}