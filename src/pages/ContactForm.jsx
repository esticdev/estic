import { Button, Form, Input, Typography } from 'antd';

const { Title } = Typography;
const ContactForm = () => {
    const [form] = Form.useForm();
    return (
        <>
            <Title level={1}>Contact Us</Title>
            <Form
                style={{ margin: "50px" }}
                form={form}
                layout="vertical"
            >
                <Form.Item label="Name" required>
                    <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                    required
                >
                    <Input placeholder='Enter Email' />
                </Form.Item>
                <Form.Item
                    name={['user', 'number']}
                    label="Phone No."
                    rules={[
                        {
                            type: 'mobile',
                        },
                    ]}
                    required
                >
                    <Input placeholder='Enter Phone No.' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default ContactForm;