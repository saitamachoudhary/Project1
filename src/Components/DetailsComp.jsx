import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, List } from 'antd';

const Details=()=>{
    const arr=[];
    const location=useLocation();
    const data=JSON.parse(location.state);
    // console.log(data);
    arr.push(data)
    return (
        <div>
         <List 
         itemLayout="horizontal"
         dataSource={arr}
         renderItem={(item,index)=>(
            <List.Item>
                <List.Item.Meta 
                 avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                 title={`${item.FirstName} ${item.LastName}`}
                 description={item.Email}
                />
            </List.Item>
         )}/>
        </div>
    )
}

export default Details;