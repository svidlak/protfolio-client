import React from "react";
const { Content: ContentComp } = Layout;
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";

const Content: React.FC = () => {
    return (
        <ContentComp style={{padding: 50, margin: 50, minHeight: 360}}>
            <Outlet />
        </ContentComp>
    )
}

export default Content
