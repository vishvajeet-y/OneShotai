const mongoose=require('mongoose')

const CompanySchema=mongoose.Schema({

    Name:{
       type:String
    },
      website:{
        type:String
     },
     Location:{
        type:String
     },
     Zipcode:{
         type:String
     },
   
     Owner:{
        type:String,
     },
     Established:{
        type:String
     },
     EmployeeNumber:{
        type:Number
     },
     Description1:{
      type:String
  },
   Description2:{
      type:String
   },
   Description3:{
      type:String
   },
   Description4:{
      type:String
   },
   Opportunity:{
      type:Number
   },
   image:{
      type:String
   }
})


const Company=mongoose.model('company',CompanySchema)

module.exports=Company