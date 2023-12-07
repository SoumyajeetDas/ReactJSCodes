import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography } from 'antd';

const { Title } = Typography;

const Content = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Title level={4}>Home</Title>} />
                <Route path='/dashboard' element={<Title level={4}>Dashboard</Title>} />
                <Route path='/userslist' element={<Title level={4}>Users List</Title>} />
                <Route path='/profile' element={<Title level={4}>Profile</Title>} />
                <Route path='/signout' element={<Title level={4}>Sign Out</Title>} />
            </Routes>
        </>
    )
}

export default Content
