import React from 'react'
import useProductData from '../../../hooks/useProductData'
import { Alert, Badge, Card, Flex, Image, List, Spin, Typography } from 'antd';

const Home = () => {
  const { isLoading, isError, isFetching, data, error } = useProductData();
  const { Paragraph, Text } = Typography

  // console.log(data?.data?.products)
  return (
    <div>
      {(isLoading && isFetching) && <Flex justify='center' align='center'><Spin size='large' /></Flex>}

      {isError && <Flex justify='center' align='center'><Alert message={error?.message} type="error" /></Flex>}

      {(!isError && data) &&
        <List
          grid={{
            gutter: 16, // This will work only when the content is wrapped inside the <List.Item>

            // Making it responsive
            xs: 1,
            sm: 2,
            md: 3,
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
                    cover={<Image height={300} src={product?.thumbnail} />}
                    style={{ height: 500 }}
                  >
                    <Card.Meta
                      title={
                        <Paragraph>${product?.price} &nbsp;
                          <Text type='danger' delete>${parseFloat((100 + product?.discountPercentage) * product?.price).toFixed(2)}</Text>
                        </Paragraph>
                      }
                      description={<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>{product?.description}</Paragraph>}
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
