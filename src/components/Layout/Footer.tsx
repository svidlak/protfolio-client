import React from "react";
import { Layout } from 'antd';
const { Footer: FooterComp } = Layout;

const Footer: React.FC = () => {
    return (
        <FooterComp style={{ textAlign: 'center' }}>Created by Max Svidlo @{new Date().getFullYear()}</FooterComp>
    )
}

export default Footer
