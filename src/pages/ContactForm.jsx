import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;
const ContactForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div style={{ backgroundColor: "#EAEAEA", padding: "50px" }}>
        <Title style={{ color: "#231f20" }} level={1}>
          Contact Us
        </Title>
        <Form onFinish={onFinish} form={form} layout="vertical">
          <Form.Item
            label="Name"
            name={["user", "name"]}
            rules={[
              {
                type: "text",
              },
            ]}
            required
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            style={{ color: "#231f20" }}
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
            required
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            style={{ color: "#231f20" }}
            name={["user", "number"]}
            label="Phone No."
            rules={[
              {
                type: "mobile",
              },
            ]}
            required
          >
            <Input placeholder="Enter Phone No." />
          </Form.Item>
          <Form.Item name={["user", "message"]} label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ color: "white", backgroundColor: "#AD974F" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default ContactForm;
