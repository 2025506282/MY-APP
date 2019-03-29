import { withRouter, Link } from 'react-router-dom'
import React from 'react'
import { Row, Col, Icon, Dropdown, Menu, Tooltip, Button, Badge, Avatar } from 'antd';
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);
const CommonHeader = withRouter((props) => {
    return (
        <Row type="flex" justify="space-between" align="middle" className="header">
            <Row className="fold">
                <Col>
                    <Icon type="menu-fold" style={{ fontSize: '20px' }} />
                </Col>
            </Row>
            <Row type="flex" justify="space-between" align="middle" className="icons">
                <Col>
                    <Icon type="search" className="item" />
                </Col>
                <Col>
                    <Tooltip placement="bottom" title="help">
                        <Icon type="question-circle" />
                    </Tooltip>
                </Col>
                <Col>
                    <Badge count={4} ><Icon type="bell" className="head-example"/></Badge>
                </Col>
                <Col>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <span><Icon type="user" />   Kobe Sun</span>
                    </Dropdown>
                </Col>
            </Row>
        </Row>
    )
})
export default CommonHeader