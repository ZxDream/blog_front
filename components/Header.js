import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Row, Col, Menu, Icon } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import '../static/style/components/header.css';

const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        setNavArray(res.data.data);
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);
  //跳转到列表页
  const handleClick = e => {
    if (e.key == 0) {
      Router.push('/index');
    } else {
      Router.push('/list?id=' + e.key);
    }
  };

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={13} xl={11}>
          <div className="header-left-wrap">
            <span className="header-logo">
              <Link href={{ pathname: '/index' }}>
                <span className="header-pointer">Only</span>
              </Link>
            </span>
            <span className="header-txt">心有猛虎，细嗅蔷薇</span>
          </div>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <Icon type="home" style={{ color: '#fff' }} />
              <span className="home-text">首页</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="message" style={{ color: '#fff' }} />
              <span className="home-text">学习笔记</span>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
