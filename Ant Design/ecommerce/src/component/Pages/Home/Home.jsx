import React from 'react'
import useProductData from '../../../hooks/useProductData'
import { Alert, Badge, Card, Flex, Image, List, Rate, Spin, Typography } from 'antd';
import AddToCart from '../../addToCart/AddToCart';

const Home = () => {
  const { isLoading, isError, isFetching, data, error, isPaused } = useProductData();

  const { Paragraph, Text } = Typography


  return (
    <div>
      {(isLoading && isFetching) && <Flex justify='center' align='center' style={{ height: "100vh" }}><Spin size='large' /></Flex>}

      {isError && <Flex justify='center' align='center'><Alert style={{ marginTop: 10 }} message={error?.message} type="error" /></Flex>}

      {isPaused && <Flex justify='center' align='center'><Alert style={{ marginTop: 10 }} message="Please check your internet connection" type="error" /></Flex>}

      {(!isError && data) &&
        <List
          grid={{
            gutter: 16, // This will work only when the content is wrapped inside the <List.Item>

            // Making it responsive
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data?.data?.products}
          renderItem={(product) => {
            return (
              <List.Item>
                <Badge.Ribbon text={`${product?.discountPercentage.toFixed(0)}% OFF`} color='pink'>
                  <Card
                    hoverable
                    key={product?.id}
                    title={product?.title}
                    style={{ height: "100%" }}
                    cover={<Image height={300} src={product?.thumbnail} />}
                    actions={[
                      <Rate disabled allowHalf defaultValue={product?.rating} />,
                      <AddToCart item={product} />
                    ]}
                  >
                    <Card.Meta
                      title={
                        <Paragraph>${product?.price} &nbsp;
                          <Text type='danger' delete>${parseFloat((100 + product?.discountPercentage) * product?.price).toFixed(2)}</Text>
                        </Paragraph>
                      }
                      description={<Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}>{product?.description}</Paragraph>}
                    />
                  </Card>
                </Badge.Ribbon>
              </List.Item>
            )
          }}
        />
      }


    </div>
  )
}

export default Home
