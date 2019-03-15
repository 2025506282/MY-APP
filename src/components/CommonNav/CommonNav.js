import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Nav extends Component {
  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        className="menu"
        style={{ width: 200, float: 'left', }}
      >
        <Menu.Item key="mail">
          <Link to="/"><Icon type="mail" />Home</Link>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Center</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">
              <Link to="/news"><Icon type="heat-map" />News</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/center"><Icon type="heat-map" />Center</Link>
            </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">
              <Link to="/contact"><Icon type="heat-map" />Contact</Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <Link to="/about"><Icon type="heat-map" />About</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Nav