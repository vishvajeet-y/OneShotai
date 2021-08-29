import React from 'react'
import { Card,Badge } from 'antd';

const SearchOption=(props)=> {
    const {company}=props
    const {Name,website}=company
    const {Meta}= Card
    return (
        <Card >
        <div style={{display:'flex'}}>
        <Meta title={Name} style={{marginRight:'1%'}} />
        <Badge color={'cyan'}/>
        <Badge color={'geekblue'}/>
        <Badge color={'yellow'}/>
        <Badge color={'red'}/>
        </div>
       
        <Meta description={website}/>
        </Card>
    )
}

export default SearchOption
