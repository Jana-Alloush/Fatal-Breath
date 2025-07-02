import { Modal, Form, Input, Button } from "antd";

const InviteUserModal = ({ visible, onClose }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        console.log("Send invite to:", values.email);
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            title="Invite User"
            open={visible}
            onCancel={() => {
                form.resetFields();
                onClose();
            }}
            footer={null}
            centered
        >
            <Form layout="vertical" form={form} onFinish={handleFinish}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: "email" }]}
                >
                    <Input placeholder="example@email.com" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Send Invitation
                </Button>
            </Form>
        </Modal>
    );
};

export default InviteUserModal;
