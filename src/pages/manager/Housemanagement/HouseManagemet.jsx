import React, { useState } from 'react';
import { Button, Input, Modal, Table, Form, Row, Col } from 'antd';
import { PlusOutlined, DeleteOutlined, UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import '../../../styles/pages/manager/_housemanagement.scss';

const HouseManagement = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [form] = Form.useForm();

  const [houses, setHouses] = useState([
    { key: '1', name: 'Sunset Villa', owner: 'Ahmed Karim' },
    { key: '2', name: 'Palm Residency', owner: 'Sara Ali' },
  ]);

  const handleAddHouse = (newHouse) => {
    const key = Date.now().toString();
    setHouses([...houses, { ...newHouse, key }]);
    form.resetFields(); 
    setIsModalOpen(false); 
  };

  
  const handleDelete = (key) => {
    const newData = houses.filter((item) => item.key !== key);
    setHouses(newData);
  };

  const columns = [
    {
      title: 'House Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      sorter: (a, b) => a.owner.localeCompare(b.owner),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 100,
      render: (_, record) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          size="small"
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

 
  const filteredData = houses.filter((house) =>
    house.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="house-management-container">
      <Row className="house-management-header" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Input
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
            allowClear
          />
        </Col>
        <Col xs={12} sm={6}>
          <Button type="primary" icon={<PlusOutlined />} block onClick={() => setIsModalOpen(true)}>
            Add House
          </Button>
        </Col>
        <Col xs={12} sm={6}>
          <Button icon={<UserAddOutlined />} block onClick={() => setIsInviteOpen(true)}>
            Invite User
          </Button>
        </Col>
      </Row>

      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey="key"
      />

      {/* modal lnzed bet*/}
      <Modal
        title="Add House"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <Form layout="vertical" form={form} onFinish={handleAddHouse}>
          <Form.Item name="name" label="House Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Sunset Estate" />
          </Form.Item>
          <Form.Item name="owner" label="Owner Name" rules={[{ required: true }]}>
            <Input placeholder="e.g. Ahmed Karim" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form>
      </Modal>

      {/* Modal invite */}
      <Modal
        title="Invite User"
        open={isInviteOpen}
        onCancel={() => setIsInviteOpen(false)}
        footer={null}
        centered
      >
        <Form layout="vertical">
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="example@email.com" />
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
