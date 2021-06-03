import Head from "next/head";
import { useRouter } from "next/router";
import { Result, Button } from "antd";

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
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>ON 5 - Something Error</title>
      </Head>
      <div style={boxStyle}>
        <Result
          status="500"
          title="Something wrong"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" onClick={() => router.back()}>
              Go Back
            </Button>
          }
        />
      </div>
    </div>
  );
}
