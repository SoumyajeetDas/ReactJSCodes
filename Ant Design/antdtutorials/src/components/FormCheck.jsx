import { Form, Input, Radio, Select, DatePicker, Checkbox, Button } from 'antd'
import React from 'react'
import { magenta } from '@ant-design/colors';

const FormCheck = () => {

    return (
        // The wapperCol prop given in the Form component determines the space allocated for the form control (input, button, etc.).
        // If we give it with FORM it will be global to all of them. We can also provide to each Form.Item.
        // If we give on Form as well as Form.Item the Form.Item wrapperCol will override the global one in the <Form>

        // Span in wrapperCol={{ offset:2, span: 24 }} means that the form control wrapper will occupy 14 out of 24 columns.
        // This 24 columns will be configured within 600 px width given. If not given it would have taken the whole viewport.

        // The offset in wrapperCol={{ offset:2, span: 24 }} property is used to add some space to the left of the wrapper column, 
        // creating a gap between the label and the input field. 

        // labelCol={{ span: 5 }} means that the label will occupy 5 out of 24 columns.
        <Form autoComplete='off' labelCol={{ span: 5 }} wrapperCol={{ offset: 2, span: 24 }} style={{ maxWidth: 600, marginTop: 50 }}>
            <Form.Item
                label="Username"
                name="username"

                // Overriding the global wrapperCol
                // wrapperCol={{ offset:2, span: 24 }}


                rules={[
                    {
                        required: true,
                        message:"Please enter the username"
                    },
                    {
                        // There should not be any whitespace
                        whitespace:true,
                        message:"Please enter a valid username"
                    },
                    {
                        min:3,
                        message:"Username should be atleast of 3 characters"
                    }

                ]}
                hasFeedback

    
            >
                <Input placeholder='Type your name' />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email">
                <Input placeholder='Type your email' />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password">
                <Input.Password placeholder='Type your password' />
            </Form.Item>
            <Form.Item
                label="Confirm Password"
                name="cnfpassword">
                <Input.Password placeholder='Type your password' />
            </Form.Item>
            <Form.Item
                label="Gender"
                name="gender">
                <Radio.Group>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="Hobby"
                name="hobby">
                <Select placeholder="Select your hobby">
                    <Select.Option value="cycling">Cycling</Select.Option>
                    <Select.Option value="drawing">Drawing</Select.Option>
                    <Select.Option value="reading">Reading</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="DOB"
                name="dob"
            >
                <DatePicker picker='date' style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Website"
                name="website">
                <Input placeholder='Add your website url' />
            </Form.Item>

            {/* <Form.Item
                name="agreement"

                // Putting the form item in middle:

                wrapperCol={{ offset:2, span: 24 }}

                // OR
                style={{textAlign:"center"}}
            >
                <Checkbox>Agree to our Terms and Conditions</Checkbox>
            </Form.Item> */}

            <Form.Item
                name="agreement"

                // The wrapper col needs to be given here to override the global one. The global contains offset:2 which is creatig an 
                // issue.
                wrapperCol={{ span: 24 }}
            >

                <Checkbox>
                    Agree to our Terms and Conditions</Checkbox>
            </Form.Item>

            {/* <Form.Item
                name="submit"
                wrapperCol={{ span: 24 }}

                // Putting the form item button in middle:

                wrapperCol={{ offset:2, span: 24 }}

                // OR
                style={{textAlign:"center"}}
            >
                <Button type="primary" htmlType='submit' style={{ backgroundColor: magenta[5] }} >Submit</Button>
            </Form.Item> */}

            <Form.Item
                name="submit"
                // The wrapper col needs to be given here to override the global one. The global contains offset:2 which is creatig an 
                // issue.
                wrapperCol={{ span: 24 }}
            >
                <Button block type="primary" htmlType='submit' style={{ backgroundColor: magenta[5] }} >Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default FormCheck
