import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  Input,
  Form,
  Table,
  Space,
  message,
} from "antd";
import { PlusOutlined, UserAddOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";

const HouseManagement = () => {
  const [houses, setHouses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [inviteForm] = Form.useForm();

  const handleAddHouse = (values) => {
    setHouses([...houses, { key: Date.now(), name: values.houseName }]);
    form.resetFields();
    setIsModalVisible(false);
    message.success("House added successfully");
  };

  const handleDeleteHouse = (key) => {
    setHouses(houses.filter(h => h.key !== key));
    message.success("House deleted");
  };

  const handleInviteUser = (values) => {
    console.log("Inviting user:", values);
    inviteForm.resetFields();
    setIsInviteModalVisible(false);
    message.success("User invited successfully");
  };

  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "House Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button icon={<UserAddOutlined />} onClick={() => setIsInviteModalVisible(true)}>
            Invite
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteHouse(record.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="house-management">
      <Card
        title="House Management"
        extra={
          <Space>
            <Input
              placeholder="Search Houses"
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>
              Add House
            </Button>
          </Space>
        }
      >
        <Table columns={columns} dataSource={filteredHouses} pagination={{ pageSize: 5 }} />
      </Card>

      {/* Add House Modal */}
      <Modal
        title="Add New House"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddHouse}>
          <Form.Item
            name="houseName"
            rules={[{ required: true, message: "Please enter house name" }]}
          >
            <Input placeholder="House Name" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form>
      </Modal>

      {/* Invite User Modal */}
      <Modal
        title="Invite User"
        open={isInviteModalVisible}
        onCancel={() => setIsInviteModalVisible(false)}
        footer={null}
      >
        <Form form={inviteForm} onFinish={handleInviteUser}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Enter email" }]}
          >
            <Input placeholder="User Email" />
          </Form.Item>
          <Form.Item
            name="role"
            rules={[{ required: true, message: "Enter user role" }]}
          >
            <Input placeholder="User Role" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Invitation
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default HouseManagement;
