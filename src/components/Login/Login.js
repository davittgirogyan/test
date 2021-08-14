import { Form, Input, Button, message } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/action-creators/authActionCreators';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isLoggedIn, loading, isError} = useSelector(state => state.auth)
  const onFinish = (values) => {
    dispatch(login(values))
  };

  if (isLoggedIn) {
      history.push('/products')
  }
  useEffect(() => {
    if (isError) {
      message.error('Login or password is wrong');
    }
  },[isError])
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
export default Login;