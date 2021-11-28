import React from "react";
import { Header as AndtHeader } from "antd/lib/layout/layout";
import classes from "./Header.module.css"

const Header = (props) => {
    return <AndtHeader className={classes["ant-layout-header"]}>
        {props.children}
    </AndtHeader>
}

export default Header;