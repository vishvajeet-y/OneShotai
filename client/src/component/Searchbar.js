import React,{useState} from 'react'
import '../css/searchbar.css'
import SearchOption from './SearchOption'
import 'antd/dist/antd.css'
import {Layout,AutoComplete} from 'antd'
import ShowCompany from './ShowCompany'

import axios from 'axios'
const {Header} =Layout
const {Option} =AutoComplete
const Searchbar=()=> {
   const [result,setResult]=useState([])
   const [company,setCompany]=useState({})
     const handleSearch=(value)=>{
      // console.log(value)
       const data={
           Name:value
       }
     axios.post('/company/autocomplete',data).then(res=>{
         //let result=res.data
       // console.log(res.data)
        setResult(res.data)
       }).catch(err=>{
           console.log(err)
       })
    
     }

     const handleSelect=(value,option)=>{
        // console.log(option.company)
         setCompany(option.company)
     }
   
     const isEmpty=(data)=>{
         if(Object.keys(data).length>0)
         {

            return true
         }

         return false
     }

    return (
        <Layout >
        <Header >
       <AutoComplete   className="searchbox" onSearch={handleSearch} onSelect={(value,option)=>{handleSelect(value,option)}}>
       
      {result.length>0&&result.map(company=>(
           
           <Option key={company._id} value={company.Name} company={company}>
           <SearchOption company={company}/>
           </Option>
      
       ))}
       </AutoComplete>
        </Header>
        {isEmpty(company) && <ShowCompany company={company}/>}
        </Layout>
    )
}

export default Searchbar
