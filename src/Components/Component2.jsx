import React from "react";
import '../Style/Component2.css';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
   const errors = {};
   if (!values.FirstName) {
      errors.FirstName = 'Required';
   } else if (values.FirstName.length > 15) {
      errors.FirstName = 'Must be 15 characters or less';
   }

   if (!values.LastName) {
      errors.LastName = 'Required';
   } else if (values.LastName.length > 20) {
      errors.LastName = 'Must be 20 characters or less';
   }

   if (!values.Email) {
      errors.Email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
      errors.Email = 'Invalid email address';
   }
   if (!values.Password) {
      errors.Password = 'Required';
   } 
   // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Password)) {
   //    errors.Password = 'Invalid password'
   // }
   return errors;
}

const Component2 = () => {
   const navigate = useNavigate();
   const formIK = useFormik({
      initialValues: {
         FirstName: '',
         LastName: '',
         Email: '',
         Password: '',
      },
      validate,
      onSubmit: values => {
         navigate('/details', { state: JSON.stringify(values, null, 2) });
      },
   });
   return (
      <div className="Component2">
         <div className="formcontainer">
            <h1 style={{ color: 'black', marginBottom: '30px' }}>Create Account</h1>
            <Form onFinish={formIK.handleSubmit} >
               <div className="form1">
                  <Form.Item>
                     <Input style={{ width: '280px' }} placeholder="FirstName"
                        id="FirstName"
                        name="FirstName"
                        type="text"
                        onChange={formIK.handleChange}
                        value={formIK.values.FirstName} />
                     {formIK.errors.FirstName?<p style={{color:'red'}}>{formIK.errors.FirstName}</p>:null}
                  </Form.Item>
                  <Form.Item>
                     <Input style={{ width: '280px' }} placeholder="LastName"
                        id="LastName"
                        name="LastName"
                        type="text"
                        onChange={formIK.handleChange}
                        value={formIK.values.LastName} />
                        {formIK.errors.LastName?<p style={{color:'red'}}>{formIK.errors.LastName}</p>:null}
                  </Form.Item>
               </div>
               <Form.Item>
                  <Input placeholder="Email"
                     id="Email"
                     name="Email"
                     type="email"
                     onChange={formIK.handleChange}
                     value={formIK.values.Email} />
                     {formIK.errors.Email?<p style={{color:'red'}}>{formIK.errors.Email}</p>:null}
               </Form.Item>
               <Form.Item>
                  <Input.Password placeholder="Password"
                     id="Password"
                     name="Password"
                     type="password"
                     onChange={formIK.handleChange}
                     value={formIK.values.Password} />
                     {formIK.errors.Password?<p style={{color:'red'}}>{formIK.errors.Password}</p>:null}
               </Form.Item>
               <Button style={{width:'100%', backgroundColor: 'black', borderColor: 'black', color: 'white' }} type="primary" htmlType="submit">Create Account</Button>
            </Form>
            <p style={{ color: 'black', fontSize: '12px', marginTop: '5px', marginBottom: '20px' }}>Have you already have an account?{" "}<a style={{ color: 'blue', textDecoration: 'none' }} href="">Login</a></p>
            <div className="comptLine">
               <div className="line"></div>
               or
               <div className="line"></div>
            </div>
            <div className="Buttonsignup">
               <Button style={{ width: '40%' }} type="primary"><GoogleOutlined />Sign up with Google</Button>
               <Button style={{ width: '40%' }} type="primary"><FacebookOutlined />Sign up with Facebook</Button>
            </div>
         </div>
      </div>
   )
}

export default Component2;