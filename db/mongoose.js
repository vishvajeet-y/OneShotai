const mongoose=require('mongoose')
require('dotenv').config() 
const URI='mongodb+srv://vishvajeet:tipu%402720@company.nw46w.mongodb.net/company?retryWrites=true&w=majority'
//const URI='mongodb+srv://vishvajeet:tipu%402720@company.nw46w.mongodb.net/comapny'
mongoose.connect(URI, 
{
// mongoose.connect('mongodb://localhost:27017/Company', 
// {
    useNewUrlParser: true,   

    useUnifiedTopology: true,

},
(error,client)=>{
  if(error)
  return console.log('Not connected to mongoose',error)
  console.log('connected to mongoose')
});