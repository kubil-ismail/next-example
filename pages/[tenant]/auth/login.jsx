import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login() {
  const router = useRouter();
  const onFinish = () => router.push(`/${router.query.tenant}/supervisor`);

  return (
    <div id="login">
      <Head>
        <title>ON 5 - Login</title>
      </Head>
      <div className="login_box">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
          <Typography.Text>
            Forgot password ?{" "}
            <Link href="forgot-password">
              <a className="login-form-forgot">Forgot</a>
            </Link>
          </Typography.Text>
        </Form>
      </div>
    </div>
  );
}

export default Login;
