const listingItem = require("./Listingschema")


const Createlist=async(req,res) => {
    const {name,description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer, propertysize,phone,email,image,location} = req.body
    const listingdetails=listingItem.create({
        name,description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer, propertysize,phone,email,image,location
    })
    res.json(listingdetails)
}


const getcollection=async(req,res)=>{
    const collectionList = await listingItem.find()
    res.json(collectionList)
}

module.exports = {Createlist,getcollection}