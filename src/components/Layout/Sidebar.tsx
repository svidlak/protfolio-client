import React, {useState} from "react";
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";
import { childRoutes } from '../../utils/router';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const generateItemList: () => MenuItem[] = () => {
    return childRoutes.reduce((returnArray: MenuItem[] ,route, idx) => {
        if(idx < (childRoutes.length -1)) {
            const item: MenuItem = {
                key: idx,
                icon: route.icon,
                label: <Link to={route.link}>{route.label}</Link>
            }
            returnArray.push(item)
        }
        return returnArray
    }, [])
}

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const items: MenuItem[] = generateItemList();

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} />
        </Sider>
    )
}

export default Sidebar
