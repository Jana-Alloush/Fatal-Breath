import  { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select, message, Popconfirm, Row, Col } from "antd";
import { PlusOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { createRoom, loadHouses, loadRooms,deleteRoom  } from "../../../root/api";

const { Option } = Select;

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [houses, setHouses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [search, setSearch] = useState("");

 useEffect(() => {
  const fetchData = async () => {
    try {
      const housesResponse = await loadHouses();
      if (housesResponse.status === "success") {
        setHouses(housesResponse.houses);
      } else {
        message.error("Failed to load houses");
      }

      const roomsResponse = await loadRooms();
      if (roomsResponse.status === "success") {
        setRooms(roomsResponse.rooms);
      } else {
        message.error("Failed to load rooms");
      }
    } catch (error) {
      message.error("Error loading data");
    }
  };

  fetchData();
}, []);

  const handleAddRoom = async (data) => {
    try {
      const response = await createRoom(data.name, data.house_id, data.type);

      if (response.status === "success") {
        // إضافة الغرفة إلى القائمة محليًا
        setRooms([...rooms, response.room]);
        form.resetFields();
        setIsModalVisible(false);
        message.success("Room added successfully");
      } else {
        message.error("Failed to add room");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Error adding room");
    }
  };

  const handleDelete = async (id) => {
  try {
    await deleteRoom(id);
    setRooms(rooms.filter((room) => room.id !== id));
    message.success("Room deleted successfully");
  } catch (error) {
    message.error(error.response?.data?.message || "Failed to delete room");
  }
};
  const filteredRooms = rooms.filter((room) => {
  const roomName = room.name?.toLowerCase() || "";
  const houseName = houses.find((h) => h.id === room.house_id)?.name?.toLowerCase() || "";
  const roomType = room.type?.toLowerCase() || "";
  const searchText = search.toLowerCase();

  return (
    roomName.includes(searchText) ||
    houseName.includes(searchText) ||
    roomType.includes(searchText)
  );
});


 const columns = [
  { title: "Room Name", dataIndex: "name", key: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
  {
    title: "House",
    key: "house_id",
    render: (_, record) => houses.find((h) => h.id === record.house_id)?.name || "N/A",
    sorter: (a, b) => {
      const houseA = houses.find(h => h.id === a.house_id)?.name || "";
      const houseB = houses.find(h => h.id === b.house_id)?.name || "";
      return houseA.localeCompare(houseB);
    }
  },
  { title: "Room Type", dataIndex: "type", key: "type", sorter: (a, b) => a.type.localeCompare(b.type) },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Popconfirm
        title="Are you sure to delete this room?"
        onConfirm={() => handleDelete(record.id)}
      >
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
          <Col xs={24} sm={12} style={{ textAlign: "right" }}>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>
              Add Room
            </Button>
          </Col>
        </Row>
      </div>

      <div className="room-table-wrapper">
        <Table dataSource={filteredRooms} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
      </div>

      <Modal
        title="Add New Room"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleAddRoom}>
          <Form.Item label="Room Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter room name" />
          </Form.Item>

          <Form.Item label="Select House" name="house_id" rules={[{ required: true }]}>
            <Select placeholder="Select a house" showSearch optionFilterProp="children">
              {houses.map((house) => (
                <Option key={house.id} value={house.id}>
                  {house.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Room Type" name="type" rules={[{ required: true }]}>
            <Select placeholder="Select room type">
              <Option value="Kitchen">Kitchen</Option>
              <Option value="Bedroom">Bedroom</Option>
              <Option value="Livingroom">Livingroom</Option>
              <Option value="Bathroom">Bathroom</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RoomManagement;
