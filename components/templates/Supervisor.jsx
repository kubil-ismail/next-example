import React from "react";
import { useRouter } from "next/router";
import { Layout, Menu, Breadcrumb, Skeleton } from "antd";
import {
  PieChartOutlined,
  AreaChartOutlined,
  SlidersOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { master, reporting } from "config/supervisorMenu";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Supervisor extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { router } = this.props;
    return (
      <div id="supervisor">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            {!router.isReady ? (
              <>
                <Menu
                  theme="dark"
                  defaultSelectedKeys={
                    router.isReady
                      ? [router.asPath]
                      : [`/${router.query.tenant}/supervisor`]
                  }
                  mode="inline"
                >
                  <Menu.Item
                    key={`/${router.query.tenant}/supervisor`}
                    icon={<PieChartOutlined />}
                    onClick={() =>
                      router.push(`/${router.query.tenant}/supervisor`)
                    }
                  >
                    Dashboard
                  </Menu.Item>
                  <SubMenu
                    key="Master"
                    icon={<SlidersOutlined />}
                    title="Master"
                  >
                    {master.map((val, key) => (
                      <Menu.Item
                        key={`/${router.query.tenant}${val.url}`}
                        onClick={() =>
                          router.push(`/${router.query.tenant}${val.url}`)
                        }
                      >
                        {val.name}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                  <SubMenu
                    key="Reporting"
                    icon={<AreaChartOutlined />}
                    title="Reporting"
                  >
                    {reporting.map((val, key) => (
                      <Menu.Item
                        key={`/${router.query.tenant}${val.url}`}
                        onClick={() =>
                          router.push(`/${router.query.tenant}${val.url}`)
                        }
                      >
                        {val.name}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                  <Menu.Item
                    key={`/${router.query.tenant}/auth/login`}
                    icon={<LogoutOutlined />}
                    onClick={() =>
                      router.push(`/${router.query.tenant}/auth/login`)
                    }
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              </>
            ) : (
              <>
                <Skeleton />
              </>
            )}
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />

            <Content style={{ margin: "0 16px" }}>
              {this.props.breadcrumb && (
                <Breadcrumb style={{ margin: "24px 0" }}>
                  <Breadcrumb.Item>
                    {this.props.breadcrumb?.root}
                  </Breadcrumb.Item>
                  {this.props.breadcrumb?.subRoot && (
                    <Breadcrumb.Item>
                      {this.props?.breadcrumb?.subRoot}
                    </Breadcrumb.Item>
                  )}
                  <Breadcrumb.Item>
                    {this.props.breadcrumb?.current}
                  </Breadcrumb.Item>
                </Breadcrumb>
              )}
              <div
                className="site-layout-background"
                style={{ padding: 24, marginTop: 24 }}
              >
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              ONX ©2021 Created by Infomedia
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const MyClassWithRouter = (props) => {
  const router = useRouter();
  return <Supervisor {...props} router={router} />;
};

export default MyClassWithRouter;
