/* @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Dropdown, Space, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  SmileOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;

const topMenus = [
  "仓储管理",
  "配置中心",
  "数据平台",
  "主数据",
  "用户权限",
  "接口平台",
  "组织架构",
].map((str, sdx) => ({
  label: str,
  key: sdx,
  value: sdx,
}));

const applications: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const siderMenus: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }),
  };
});

const menuItems = [
  {
    key: "1",
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.alipay.com/'
      >
        General
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.taobao.com/'
      >
        Layout
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        Navigation
      </a>
    ),
  },
];

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      css={{
        width: "100%",
        height: "100%",
      }}
    >
      <Header css={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <div
          css={{
            color: "#fff",
            float: "left",
            minWidth: 150,
            fontWeight: "bold",
          }}
        >
          SWS WMS系统
        </div>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={["2"]}
          items={topMenus}
        />
      </Header>

      <Layout>
        <Sider
          collapsible
          width={202}
          css={{
            background: "#fff!important",
            overflow: "auto",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Dropdown menu={{ items: applications }}>
            <div
              onClick={(e) => e.preventDefault()}
              css={{
                height: "54px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Space>
                深圳倉
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <Menu
            mode='inline'
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              overflow: "auto",
              border: 0,
              paddingTop: "10px",
            }}
            items={siderMenus}
          />
        </Sider>
        <Layout css={{ padding: "0 24px 24px" }}>
          {/* <Sider>
          </Sider> */}
          <Breadcrumb
            css={{ margin: "16px 0" }}
            items={[
              {
                title: "SWMS",
              },
              {
                title: "深圳倉",
              },
              {
                title: "General",
                menu: { items: menuItems },
              },
              {
                title: "倉庫管理",
              },
            ]}
          />
          <Content
            css={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
