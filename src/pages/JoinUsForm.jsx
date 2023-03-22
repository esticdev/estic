import { Button, Form, Input, Typography } from 'antd';

const { Title } = Typography;
const JoinUsForm = () => {
    const [form] = Form.useForm();
    return (
        <>
            <Title level={1}>Join Us</Title>
        </>
    );
};
export default JoinUsForm;