import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login() {
  const onFinish = (val) => console.log(val);

  return (
    <div id="login">
      <Head>
        <title>ON 5 - Forgot Password</title>
      </Head>
      <div className="login_box">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userId"
            rules={[{ required: true, message: "Please input your user id!" }]}
          >
            <Input placeholder="User ID" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email address!" }]}
          >
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item
            name="newPass"
            rules={[{ required: true, message: "Please input your new password!" }]}
          >
            <Input placeholder="New Password" />
          </Form.Item>
          <Form.Item
            name="confirmPass"
            rules={[{ required: true, message: "Please input your confirm password!" }]}
          >
            <Input placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>{" "}
          </Form.Item>
          <Typography.Text>
            Remember password ?{" "}
            <Link href="login">
              <a className="login-form-forgot">Login</a>
            </Link>
          </Typography.Text>
        </Form>
      </div>
    </div>
  );
}

export default Login;
