require('./db/mongoose')
const express=require('express')
const app=new express()
const port=process.env.PORT||5000
const bodyParser=require('body-parser')
const companyRouter=require('./router/company')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/company',companyRouter)

app.listen(port,()=>{
    console.log('server is connected ',port)
})