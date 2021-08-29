const { default: axios } = require('axios')
const express=require('express')
const router=express.Router()

const Company=require('../model/Company')


router.get('/test',async(req,res)=>{
    res.json('test is working')
})


router.post('/insert',async(req,res)=>{
      const companyData=await axios.get('https://api.mockaroo.com/api/00baf2f0?count=1000&key=b1928be0')
      //console.log(companyData.data)
      const allData=companyData.data
      allData.map(async(data)=>{
        const newdata=new Company(data)
        await newdata.save()
      })
     
      res.json('data is inserted')
})

router.post('/autocomplete',async(req,res)=>{
    try{
 //  console.log('data is fetching')
    const searchField=req.body.Name
    if(searchField==='')
   return res.json([])
     const companydata=await Company.find({Name:{$regex:searchField,$options:'$i'}}).limit(100)
   
    if(!companydata)
    res.json('no data is present')
    //console.log(companydata.length)
    res.json(companydata)
    
    }
    catch(err){
        res.json(err)
    }
})

module.exports=router