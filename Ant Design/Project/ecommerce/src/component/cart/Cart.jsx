import { ShoppingCartOutlined } from '@ant-design/icons'
import { Alert, Badge, Drawer, Flex, InputNumber, Spin, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import useShowCartData from '../../hooks/useShowCart';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const { data, isLoading, isFetching, isError, isPaused, error } = useShowCartData();


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (price) => <span>${price}</span>
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',

            // On changing the quantity, we need to update the total price of the item
            render: (quantity,record) => // Check the render prop for a table in my notes
            <InputNumber
                min={1}
                max={10}
                defaultValue={quantity}
                onChange={(value) => { 
                    setCartItems((prev) => {
                        return prev.map((item) => {
                            if(record.id === item.id) {
                                item.total = item.price * value;
                            }
                            return item
                        })
                    })
                }}
            />
        },
        {
            title: 'Total',
            dataIndex: 'total',
            render: (price) => <span>${price}</span>
        },
    ]
    
    useEffect(()=>{
        if(data) {
            setCartItems(data?.data?.products)
        }
    },[data])

    return (
        <>

            <Badge count={1}>
                <ShoppingCartOutlined style={{ fontSize: "30px", cursor: "pointer" }} onClick={showDrawer} />
            </Badge>
            <Drawer
                title="Cart"
                open={open}
                onClose={onClose}
                contentWrapperStyle={{ width: 500 }}
            >
                {(isLoading && isFetching) && <Flex justify='center' align='center' style={{ height: "100vh" }}><Spin size='large' /></Flex>}

                {isError && <Flex justify='center' align='center'><Alert style={{ marginTop: 10 }} message={error?.message} type="error" /></Flex>}

                {isPaused && <Flex justify='center' align='center'><Alert style={{ marginTop: 10 }} message="Please check your internet connection" type="error" /></Flex>}

                {(!isError && data) &&

                    <Table
                        columns={columns}
                        dataSource={cartItems}
                        pagination={false}

                        // Total price of all the items in the cart
                        summary={(data) => {
                            let total = data.reduce((acc, item) => acc + item.total, 0);
                            return (
                                <>
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell colSpan={3}>Total</Table.Summary.Cell>
                                        <Table.Summary.Cell colSpan={1}>${total}</Table.Summary.Cell>
                                    </Table.Summary.Row>
                                </>
                            )
                        }}
                    />}
            </Drawer>
        </>
    )
}

export default Cart
