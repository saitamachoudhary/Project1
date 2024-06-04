import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, List ,Button} from 'antd';

const Details=()=>{
    const[value,setvalue]=React.useState([]);
    const location=useLocation();
    localStorage.setItem("formData",location.state);
    const data=JSON.parse(localStorage.getItem("formData"));
    React.useEffect(()=>{
     setvalue(prev=>[...value,data])
    },[]);
    const clearData=()=>{
      localStorage.clear();
      setvalue();
    }
    return (
        <div>
         <List 
         itemLayout="horizontal"
         dataSource={value}
         renderItem={(item,index)=>(
            <List.Item>
                <List.Item.Meta 
                 avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                 title={`${item.FirstName} ${item.LastName}`}
                 description={item.Email}
                />
            </List.Item>
         )}/>
         <Button onClick={clearData} type="primary">Clear</Button>
        </div>
    )
}

export default Details;