import React, { useEffect, useState } from 'react';
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  Popconfirm,
  Space,
  Row,
  Col,
} from 'antd';
import { PlusOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import './RoomManagement.css';

const { Option } = Select;

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [houses, setHouses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Mock existing houses
    setHouses([
      { id: 1, name: 'Villa Rose' },
      { id: 2, name: 'Skyline House' },
    ]);

    // Mock room data
    setRooms([
      { id: 1, name: 'Living Room', houseId: 1 },
      { id: 2, name: 'Master Bedroom', houseId: 1 },
      { id: 3, name: 'Kitchen', houseId: 2 },
    ]);
  }, []);

  const handleAddRoom = () => {
    form.validateFields().then(values => {
      const newRoom = {
        id: rooms.length + 1,
        name: values.name,
        houseId: values.houseId,
      };
      setRooms([...rooms, newRoom]);
      message.success('Room added successfully');
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleDelete = (id) => {
    setRooms(rooms.filter(room => room.id !== id));
    message.success('Room deleted');
  };

  const filteredRooms = rooms.filter(room => {
    const houseName = houses.find(h => h.id === room.houseId)?.name || '';
    return (
      room.name.toLowerCase().includes(search.toLowerCase()) ||
      houseName.toLowerCase().includes(search.toLowerCase())
    );
  });

  const columns = [
    {
      title: 'Room Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'House',
      key: 'houseId',
      render: (_, record) => houses.find(h => h.id === record.houseId)?.name || 'N/A',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Popconfirm title="Are you sure to delete this room?" onConfirm={() => handleDelete(record.id)}>
          <Button danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="room-page-wrapper">
      <div className="room-header">
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Input
              placeholder="Search by room or house"
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>
              Add Room
            </Button>
          </Col>
        </Row>
      </div>

      <div className="room-table-wrapper">
        <Table
          dataSource={filteredRooms}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </div>

      <Modal
        title="Add New Room"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddRoom}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Room Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter room name" />
          </Form.Item>
          <Form.Item label="Select House" name="houseId" rules={[{ required: true }]}>
            <Select placeholder="Select a house">
              {houses.map((house) => (
                <Option key={house.id} value={house.id}>
                  {house.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RoomManagement;
