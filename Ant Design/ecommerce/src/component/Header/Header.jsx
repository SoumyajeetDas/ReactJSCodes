import { HomeFilled } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    return (
        <Menu mode="horizontal"
            onClick={(value)=>{
                const {key} = value;
                console.log(key)
                if(key==="home"){
                    navigate(`/`)
                    return;
                }
                navigate(`/${key}`)
            }}

            defaultSelectedKeys={[`${window.location.pathname==="/" ? 'home' : window.location.pathname.split("/")[1]}`]}
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
                            key: 'men-shirts',
                        },
                        {
                            label: 'Men\'s Shoes',
                            key: 'men-shoes'
                        },
                        {
                            label: 'Men\'s Watches',
                            key: 'men-watches'
                        }
                    ]
                },
                {
                    key: 'women',
                    label: 'Women',
                    children: [
                        {
                            label: 'Women\'s Dresses',
                            key: 'women-shirts',
                        },
                        {
                            label: 'Women\'s Shoes',
                            key: 'women-shoes'
                        },
                        {
                            label: 'Women\'s Watches',
                            key: 'women-watches'
                        },
                        {
                            label: 'Women\'s Bags',
                            key: 'women-bags'
                        }
                    ]
                },
                {
                    key: 'accessories',
                    label: 'Accessories',
                },
            ]}

        />
    )
}

export default Header
