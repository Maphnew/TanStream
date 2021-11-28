import React from "react";
import { Layout as AntdLayout } from "antd";
import classes from "./Layout.module.scss"
const { Header: AndtHeader, Content: AntdContent, Sider: AntdSider } = AntdLayout;

const Layout = (props) => {
    return <AntdLayout className={classes["ant-layout"]} style={props.style}>{props.children}</AntdLayout>
}

export const Header = (props) => {
    return <AndtHeader style={props.style} className={classes["ant-layout-header"]}>
        {props.children}
    </AndtHeader>
}

export const Sider = (props) => {
    return <AntdSider style={props.style} className={classes["site-layout-background"]} {...props}>{props.children}</AntdSider>
}

export const Content = (props) => {
    return <AntdContent className={classes["site-layout-background"]} {...props}>{props.children}</AntdContent>
}

export default Layout;