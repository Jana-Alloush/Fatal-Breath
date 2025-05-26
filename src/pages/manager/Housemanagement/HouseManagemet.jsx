import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
  Space,
  Row,
  Col
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  MailOutlined,
  SearchOutlined
} from '@ant-design/icons';
import './HouseManagement.css';

const HouseManagement = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [inviteForm] = Form.useForm();
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setHouses([
        { id: 1, name: 'Villa Rose', location: 'Beirut' },
        { id: 2, name: 'Skyline House', location: 'Tripoli' }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleAddHouse = () => {
    form.validateFields().then(values => {
      const newHouse = { id: houses.length + 1, ...values };
      setHouses([...houses, newHouse]);
      setIsAddModalVisible(false);
      form.resetFields();
      message.success('House added successfully');
    });
  };

  const handleDelete = (id) => {
    setHouses(houses.filter(h => h.id !== id));
    message.success('House deleted');
  };

  const showInviteModal = (house) => {
    setSelectedHouse(house);
    setIsInviteModalVisible(true);
  };

  const handleSendInvitation = () => {
    inviteForm.validateFields().then(values => {
      message.success(`Invitation sent to ${values.email} for "${selectedHouse.name}"`);
      inviteForm.resetFields();
      setIsInviteModalVisible(false);
    });
  };

  const filteredHouses = houses.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: 'House Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Popconfirm title="Are you sure to delete this house?" onConfirm={() => handleDelete(record.id)}>
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
          <Button type="primary" icon={<MailOutlined />} onClick={() => showInviteModal(record)}>
            Invite
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div className="house-page-wrapper">
      <div className="house-header">
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Input
              placeholder="Search by name or location"
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsAddModalVisible(true)}
            >
              Add House
            </Button>
          </Col>
        </Row>
      </div>

      <div className="house-table-wrapper">
        <Table
          dataSource={filteredHouses}
          columns={columns}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 5 }}
        />
      </div>

      {/* Add House Modal */}
      <Modal
        title="Add New House"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onOk={handleAddHouse}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="House Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter house name" />
          </Form.Item>
          <Form.Item label="Location" name="location" rules={[{ required: true }]}>
            <Input placeholder="Enter location" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Invite Modal */}
      <Modal
        title={`Invite User to ${selectedHouse?.name}`}
        open={isInviteModalVisible}
        onCancel={() => setIsInviteModalVisible(false)}
        onOk={handleSendInvitation}
      >
        <Form form={inviteForm} layout="vertical">
          <Form.Item
            label="User Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input placeholder="user@example.com" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default HouseManagement;
