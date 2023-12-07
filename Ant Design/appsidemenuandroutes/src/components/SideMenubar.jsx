import React from 'react';
import { Menu } from 'antd';
import {
  HomeFilled,
  DashboardOutlined,
  UserOutlined,
  UnorderedListOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideMenubar = () => {

  const navigate = useNavigate();
  return (
    <Menu
      style={{ width: "100%", height:"50vh" }} mode="vertical"
      onClick={(value) => {

        const {key} = value;

        if (key === "/signout") { }

        else {
          // console.log(key?.key)
          navigate(key);
        }
      }}

      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label: 'Home', key: '/', icon: <HomeFilled /> },
        { label: 'Dashboard', key: '/dashboard', icon: <DashboardOutlined /> },
        { label: 'Users List', key: '/userslist', icon: <UnorderedListOutlined /> },
        { label: 'Profile', key: '/profile', icon: <UserOutlined /> },
        { label: 'SignOut', key: '/signout', icon: <LogoutOutlined />, danger:true },
      ]}
    >

    </Menu>
  )
}

export default SideMenubar
