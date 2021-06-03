import React from "react";
import Request from "utils/request";
import { useRouter } from "next/router";
// import { Result, Button } from "antd";

function Index() {
  const router = useRouter();
  return <h1>Tenant not valid</h1>;
}

export const getServerSideProps = async (context) => {
  // get current tenant id
  const { tenant } = context.params;

  // query the data based on the tenant and return as props
  const check = await Request().post("/auth/tenantValid", {
    tenant_code: `'${tenant}'`,
  });

  if (check?.data?.Record?.length > 0) {
    return {
      redirect: {
        destination: `/${tenant}/login`,
        permanent: true,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
};

export default Index;
