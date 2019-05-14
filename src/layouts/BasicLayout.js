import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { withStyles, css } from "utils/withStyles";
import SiderMenu from "./SiderMenu";
import menuData from "./sideMenuData.js";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class BasicLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { children, styles } = this.props;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div {...css(styles.logo)} />
          <SiderMenu dataSource={menuData} />
        </Sider>
        <Layout
          style={{
            minHeight: "100vh"
          }}
        >
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              {...css(styles.trigger)}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const s = theme => {
  return {
    trigger: {
      "font-size": "18px",
      "line-height": "64px",
      padding: "0 24px",
      cursor: "pointer",
      transition: "color .3s"
    },
    logo: {
      height: "32px",
      background: "rgba(255,255,255,.2)",
      margin: "16px"
    }
  };
};

export default withStyles(s)(BasicLayout);
