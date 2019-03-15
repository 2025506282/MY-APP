import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'react-router-dom'

const breadcrumbNameMap = {
    '/news': '新闻',
    '/about': '关于我们',
    '/contact': '联系我们',
    '/center': '中心',
    '/': '首页'
}
const CommonBreadcrumb = withRouter((props) => {
    const { location } = props
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">首页</Link>
        </Breadcrumb.Item>
    )]
    return <Breadcrumb>{breadcrumbItems.concat(extraBreadcrumbItems)}</Breadcrumb>;
})
export default CommonBreadcrumb