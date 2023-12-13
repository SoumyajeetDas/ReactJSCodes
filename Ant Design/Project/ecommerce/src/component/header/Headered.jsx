import { HomeFilled } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    return (
        <Menu mode="horizontal"
            onClick={(value) => {
                const { key } = value;
                if (key === "home") {
                    navigate(`/`)
                    return;
                }
                navigate(`/product/${key}`)
            }}

            defaultSelectedKeys={[`${window.location.pathname === "/" ? 'home' : window.location.pathname.split("/")[1]}`]}
            items={[
                {
                    key: 'home',
                    label: <HomeFilled />,
                },
                {
                    key: 'men',
                    label: 'Men',
                    children: [
                        {
                            label: 'Men\'s Shirts',
                            key: 'mens-shirts',
                        },
                        {
                            label: 'Men\'s Watches',
                            key: 'mens-watches'
                        }
                    ]
                },
                {
                    key: 'women',
                    label: 'Women',
                    children: [
                        {
                            label: 'Women\'s Dresses',
                            key: 'womens-dresses',
                        },
                        {
                            label: 'Women\'s Shoes',
                            key: 'womens-shoes'
                        },
                    ]
                },
            ]}

        />
    )
}

export default Header
