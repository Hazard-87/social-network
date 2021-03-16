import classes from './Preloader.module.css'
import React from "react";
import { Spin, Space } from 'antd';

const Preloader = () => {
    return <Space size="middle">
        <Spin className={classes.spinner} size="large" />
    </Space>
}

export default Preloader;