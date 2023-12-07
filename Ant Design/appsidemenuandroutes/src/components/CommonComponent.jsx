import { ConfigProvider, Flex } from 'antd';
import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Header = (props) => {
  return (
    <ConfigProvider
    theme={{
        components:{
            Typography:{
                colorTextHeading:"red",
            },
           
        }
    }}
    >

    <Flex style={{width:"100vw", height:"200px", background:"blue"}} justify='center' align='center'>
      <Title level={3}>{props?.name}</Title>
    </Flex>
    </ConfigProvider>
  )
}

export default Header
