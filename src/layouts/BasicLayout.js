import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { withStyles, css } from "common/withStyles";

const { Header, Sider, Content } = Layout;

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
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
