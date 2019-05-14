import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

class SiderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1"
    };
  }

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={
              <Fragment>
                {item.icon && <Icon type={item.icon} />}
                {item.path ? (
                  <Link to={item.path} style={{ display: "inline-block" }}>
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </Fragment>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.id}>
          {item.icon && <Icon type={item.icon} />}
          {item.path ? (
            <Link to={item.path} style={{ display: "inline-block" }}>
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </Menu.Item>
      );
    });
  };

  render() {
    const { dataSource } = this.props;
    const { activeKey } = this.state;
    if (dataSource.length === 0) {
      return null;
    }
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {this.renderMenu(dataSource)}
      </Menu>
    );
  }
}

export default SiderMenu;
