import { Button, message } from 'antd'
import React, { useEffect } from 'react'
import useAddCartData from '../../hooks/useAddCartData'

const AddToCart = ({ item }) => {
    const { mutate: addCart, isPending, isSuccess, isError, failureReason, isPaused } = useAddCartData();

    const [messageApi, contextHolder] = message.useMessage()


    const addToCart = () => {

        addCart({
            userId: 1,
            products: [
                {
                    id: 1,
                    quantity: 1,
                },
                {
                    id: 50,
                    quantity: 2,
                },
            ]
        });
    }

    // Error
    useEffect(() => {
        if (isError) {
            messageApi.error(failureReason?.message);
        }
        // eslint-disable-next-line
    }, [isError]);

    // Successfully Adeed to Cart
    useEffect(() => {
        if (isSuccess) {
            messageApi.success(`${item?.title} added successfully to cart!!`);
        }
        // eslint-disable-next-line
    }, [isSuccess]);

    // Internet Connection Lost
    useEffect(() => {
        if (isPaused) {
            messageApi.error("Please check your internet connection");
        }
        // eslint-disable-next-line
    }, [isPaused]);

    return (
        <>
            {contextHolder}

            {/* Loading will show only when the request is pending and not paused due to internet connection */}
            <Button loading={isPending && !isPaused} type='link' onClick={addToCart}>Add to Cart</Button>
        </>
    )
}

export default AddToCart
