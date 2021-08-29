import React from 'react'
import { Card } from 'antd';
import TagCard from './card/TagCard';
import {Link} from 'react-router-dom'
import { GlobalOutlined,TeamOutlined,SelectOutlined,LinkedinFilled} from '@ant-design/icons'
const ShowCompany=(props) =>{
    const {company}=props
    const {Name,website,Location,Owner,Description1,Description2
    ,Description3,Description4,Opportunity,EmployeeNumber,image}=company
    const {Meta}=Card
  
    return (
       <Card >
 
       <Card.Grid hoverable={false} style={{width:'50%',height:'80%',borderStyle:'none'}}>
       
    <div style={{display:'flex'}}>
    <div style={{background:'#1177F4',width:'12%',marginRight:'2%', border:'1px solid black', borderRadius:'5%'}}>
    <img src={image} alt=""/>
    </div>
   <div >
      <div style={{display:'flex',fontSize:'15px',color:'blue'}}>
      <Meta title={Name} />
      <Meta avatar={<SelectOutlined />  } style={{marginLeft:'2%'}} />
      </div>
      <div style={{display:'flex',justifyContent:'space-between',marginTop:'4%',marginRight:'-30%'}}>

      <div style={{color:'blue'}}>
      <div style={{display:'flex',fontSize:'15px'}}>
      <Link to="{website}"><Meta description={website}/> </Link>
      <Meta avatar={<GlobalOutlined /> } style={{marginLeft:'2%'}}/>
      </div>
      <div >
      <Meta description={'Location : '+Location } style={{marginTop:'2%'}}/>
      <Meta avatar={<LinkedinFilled /> } style={{marginTop:'2%'}}/>
      </div>
      </div>
      <div>
      <Meta title={EmployeeNumber}  description={'Employees'} avatar={<TeamOutlined />} style={{fontSize:'15px'}}/>
      </div>
        <div>
        <Meta title={'E-learning'}  description={'Industry'} avatar={<GlobalOutlined />} style={{fontSize:'15px'}}/>
        </div>
     
      </div>
      </div>
      </div>
       </Card.Grid>
       <Card.Grid hoverable={false} style={{width:'50%'}}>
       <TagCard value={'a year ago'} objkey={'Last Activity : '} color={"#2C4DCB"}/>
       <TagCard  value={Owner} objkey={'Owner : '} color={'black'}/>
       <TagCard value={Opportunity} objkey={'opportunities :'} color={'#CAB913'}/>
       <TagCard value={'Is Customer'} color={'#77F1C2'}/>
       <TagCard value={'Not in SalesLoft'} color={'#CAB913'}/>
   
       </Card.Grid>

     
      
     
       
  
       <Card.Grid hoverable={false} style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
      <div style={{display:'flex'}}>
       <TagCard value={Description1} color={'#A1A7FC'}/>
       <TagCard value={Description2} color={'#A1A7FC'}/>
       <TagCard value={Description3} color={'#A1A7FC'}/>
       <TagCard value={Description4} color={'#A1A7FC'}/>
       <TagCard value={Location} color={'#A1A7FC'}/>
       <TagCard value={'world'} color={'#A1A7FC'}/>
       </div>
       </Card.Grid>
        </Card>
  
    )
}

export default ShowCompany
