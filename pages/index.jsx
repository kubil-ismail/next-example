import Head from "next/head";
import { Result } from "antd";

/*
  --------------------------------
  Default page if tenant not found
  --------------------------------
*/

const boxStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>ON 5 - Tenant Not Found</title>
      </Head>
      <div style={boxStyle}>
        <Result
          status="404"
          title="Tenant ID Not Found"
          subTitle="Sorry, the page you visited does not exist."
        />
      </div>
    </div>
  );
}
