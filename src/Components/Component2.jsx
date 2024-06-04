import React from "react";
import '../Style/Component2.css';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
import {Form,Input,Button,ConfigProvider} from 'antd';
import {useFormik} from 'formik';

const Component2=()=>{
   const formIK=useFormik({
      initialValues:{
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
      },
      onSubmit:values=>{
         alert(JSON.stringify(values,null,2));
         console.log(JSON.stringify(values,null,2));
      },
   });
    return (
       <div className="Component2">
         <div className="formcontainer">
            <h1 style={{color:'black',marginBottom:'30px'}}>Create Account</h1>
             <Form onFinish={formIK.handleSubmit}>
               <div className="form1">
               <Form.Item>
                  <Input style={{width:'280px'}} placeholder="FirstName"
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  onChange={formIK.handleChange}
                  value={formIK.values.FirstName}/>
                </Form.Item>
                <Form.Item>
                  <Input style={{width:'280px'}} placeholder="LastName"
                    id="LastName"
                    name="LastName"
                    type="text"
                    onChange={formIK.handleChange}
                    value={formIK.values.LastName}/>
                </Form.Item>
               </div>
               <Form.Item>
                  <Input placeholder="Email"
                    id="Email"
                    name="Email"
                    type="email"
                    onChange={formIK.handleChange}
                    value={formIK.values.Email}/>
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Password"
                    id="Password"
                    name="Password"
                    type="password"
                    onChange={formIK.handleChange}
                    value={formIK.values.Password}/>
                </Form.Item>
                <Button className="Button" type="primary" htmlType="submit">Create Account</Button>
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