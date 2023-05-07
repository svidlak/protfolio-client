import React from "react";
const { Content: ContentComp } = Layout;
import { Layout, theme } from 'antd';
import { Outlet } from "react-router-dom";

const Content: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <ContentComp style={{ margin: '0 16px' }}>
            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                <Outlet />
            </div>
        </ContentComp>
    )
}

export default Content
