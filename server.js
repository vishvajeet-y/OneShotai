require('./db/mongoose')
const express=require('express')
const app=new express()
const port=process.env.PORT||5000
const bodyParser=require('body-parser')
const companyRouter=require('./router/company')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/company',companyRouter)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port,()=>{
    console.log('server is connected ',port)
})