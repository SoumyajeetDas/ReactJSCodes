import { Button, Form, Input, Select, Space } from 'antd'
import React from 'react'
import {
    MinusCircleOutlined,
    PlusOutlined
} from '@ant-design/icons';

const DynamicForm = () => {

    return (
        <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ offset: 2, span: 24 }}
            style={{ maxWidth: 600, marginTop: 50 }}
            onFinish={(values) => console.log(values)}
        >
            <Form.Item
                label="Teacher Name"
                name="teacherName"
                rules={[
                    {
                        required: true,
                        message: "Please enter the Teacher Name"
                    }
                ]}
                hasFeedback
            >
                <Input placeholder="Type Teacher's name" />
            </Form.Item>

            <Form.Item
                label="Class Name"
                name="className"
                rules={[
                    {
                        required: true,
                        message: "Please enter the Class Name"
                    }
                ]}
                hasFeedback
            >
                <Input placeholder="Type Class name" />
            </Form.Item>

            <Form.List name="students">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field, index) => {
                            // console.log(field)
                            return (
                                <Space size={12} key={field.key}>


                                    <Form.Item
                                        label={`${index + 1}-first`}
                                        name={[field.name, "first"]} // name="students"(Name in Form.List) + field.name + "first"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter the Student First Name"
                                            }
                                        ]}
                                        hasFeedback
                                    >
                                        <Input placeholder="Type Students's First name" />
                                    </Form.Item>

                                    <Form.Item
                                        name={[field.name, "last"]} // name="students"(Name in Form.List) + field.name + "last"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter the Student last Name"
                                            }
                                        ]}
                                        hasFeedback
                                    >
                                        <Input placeholder="Type Students's Last name" />
                                    </Form.Item>
                                    <Form.Item
                                        name={[field.name, "hobby"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please select hobby"
                                            }
                                        ]}
                                        hasFeedback
                                    >
                                        <Select
                                            placeholder="Select your hobby"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={[
                                                {
                                                    value: "cycling",
                                                    label: "Cycling"
                                                },
                                                {
                                                    value: "drawing",
                                                    label: "Drawing"
                                                },
                                                {
                                                    value: "reading",
                                                    label: "Reading"
                                                }
                                            ]} />

                                    </Form.Item>

                                    <MinusCircleOutlined
                                        onClick={()=>remove(field.name)}
                                        style={{ height: 40, color: "red", marginBottom: 22 }} />
                                </Space>
                            )
                        })}
                        <Form.Item
                            wrapperCol={{ span: 24 }}
                        >
                            <Button onClick={() => add()} block icon={<PlusOutlined />}>Add a Student</Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item
                wrapperCol={{ offset: 10, span: 24 }}

            //  style={{display: 'flex', justifyContent: 'center'}}
            >
                <Button htmlType='submit' type='primary'>Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default DynamicForm
