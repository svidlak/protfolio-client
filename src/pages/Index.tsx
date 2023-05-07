import React from 'react';
import { Layout } from 'antd';
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";
import Content from "../components/Layout/Content";

const Index: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout className="site-layout">
                <Content />
                <Footer />
            </Layout>
        </Layout>
    );
};

export default Index
