import React from "react";
import '../Style/Component2.css';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
import {Form,Input,Button,ConfigProvider} from 'antd';

const Component2=()=>{
    return (
       <div className="Component2">
         <div className="formcontainer">
            <h1 style={{color:'black',marginBottom:'30px'}}>Create Account</h1>
             <Form>
               <div className="form1">
               <Form.Item>
                  <Input style={{width:'280px'}} placeholder="FirstName"/>
                </Form.Item>
                <Form.Item>
                  <Input style={{width:'280px'}} placeholder="LastName"/>
                </Form.Item>
               </div>
               <Form.Item>
                  <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Password"/>
                </Form.Item>
                <Button className="Button" type="primary">Create Account</Button>
             </Form>
             <p style={{color:'black',fontSize:'12px',marginTop:'5px',marginBottom:'20px'}}>Have you already have an account?{" "}<a style={{color:'blue',textDecoration:'none'}} href="">Login</a></p>
             <div className="comptLine">
                <div className="line"></div>
                or
                <div className="line"></div>
             </div>
             <div className="Buttonsignup">
                <Button style={{width:'40%'}} type="primary"><GoogleOutlined />Sign up with Google</Button>
                <Button style={{width:'40%'}} type="primary"><FacebookOutlined />Sign up with Facebook</Button>
             </div>
         </div>
       </div>
    )
}

export default Component2;