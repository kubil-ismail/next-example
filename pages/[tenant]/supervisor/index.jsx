import React from "react";
import Head from "next/head";
import Supervisor from "components/templates/Supervisor";
import { Typography, Table, Tag, Space } from "antd";

function Index() {
  return (
    <>
      <Head>
        <title>ON 5 - Dashboard</title>
      </Head>
      <Supervisor>
        <div>
          <Typography.Title>Welcome Back, Deza SPV</Typography.Title>
          <Typography.Paragraph>
            Now You're on5 Agent. The Active Channels are :Voice, Email, Live
            Chat, SMS, Telegram, Facebook, Facebook Messenger, Twitter, Video
            Call, Instagram, Whatsapp, Twitter DM, Walk-in
          </Typography.Paragraph>
          <Typography.Paragraph>
            “Words are singularly the most powerful force available to humanity.
            We can choose to use this force constructively with words of
            encouragement, or destructively using words of despair. Words have
            energy and power with the ability to help, to heal, to hinder, to
            hurt, to harm, to humiliate and to humble”
          </Typography.Paragraph>

          <Table columns={columns} dataSource={data} />
        </div>
      </Supervisor>
    </>
  );
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default Index;
