import React from 'react'
import 'antd/dist/antd.css'
import { Tag } from 'antd'
const UpperCard=(props)=> {

   const {objkey,value,color}=props
  
    
    return (
        <Tag   color={color}>
        {objkey}{value}
      </Tag>
    )
}

export default UpperCard
