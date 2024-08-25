import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import imageLogo from "../../assets/image/logo/logo-nit.png";
import imageProfile from "../../assets/image/logo/image-profile.jpg";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashabord", "/admin", <PieChartOutlined />),
  // getItem("Customer", "/admin/customer", <DesktopOutlined />),
  // getItem("Employee", "/admine/employee", <FileOutlined />),
  getItem("Role", "/admin/role", <FileOutlined />),
  getItem("Category", "/admin/category", <FileOutlined />),
  getItem("Product", "/admin/product", <FileOutlined />),
  getItem("Product", "product", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Setting", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
];

const MainLayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const onClickMenu = (item) => {
    navigate(item.key);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={onClickMenu}
        />
      </Sider>

      <Layout>
        <div></div>
        <div className="admin-header">
          <div style={{ display: "flex" }}>
            <img className="admin-logo" src={imageLogo} alt="" />
            <div>
              <label className="txt-brandname">NIT Cambodia</label>
              <div>Build IT Skill</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <label className="txt-username">Sok Dara</label>
              <div>Role: Admin</div>
            </div>
            <img className="admin-logo-profile" src={imageProfile} alt="" />
          </div>
        </div>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="admin-body"
            style={{
              marginTop: 10,
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayoutAdmin;
