import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { register } from '../../store/action-creators/authActionCreators';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const onFinish = (values) => {
        setLoading(true)
        register(values).then(e => {
          setLoading(false)
          if(e.status === 200) {
            message.success(e.message);
            history.push('/login');
          } else {
            message.error(e.message);
          } 
      }).catch(console.error)
    };
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Full name"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Please input your full name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

export default Register;