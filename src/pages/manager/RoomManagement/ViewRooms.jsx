import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Table,
  Modal,
  Form,
  Input,
  Select,
  Button,
  Popconfirm,
  message,
} from "antd";
import {
  loadRoomsFromAdminHouses,
  createRoom,
  deleteRoom,
  loadHouses,
} from "../../../root/api";
import { DeleteOutlined } from "@ant-design/icons";

const RoomView = () => {
  const { houseId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [houseName, setHouseName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchRoomsAndHouse = async () => {
      try {
        const roomsData = await loadRoomsFromAdminHouses(houseId);
        setRooms(roomsData);

        const houseData = await loadHouses();
        setHouseName(houseData.name);
      } catch (error) {
        console.error("Error loading rooms or house name:", error);
      }
    };

    fetchRoomsAndHouse();
  }, [houseId]);

  const handleAddRoom = async (values) => {
    try {
      const newRoom = await createRoom(values.name, houseId, values.type);
      setRooms((prev) => [...prev, newRoom]);
      form.resetFields();
      setIsModalOpen(false);
      message.success("Room added successfully!");
    } catch (error) {
      console.error("Error adding room:", error);
      message.error("Failed to add room.");
    }
  };

  const handleDeleteRoom = async (roomId) => {
    try {
      await deleteRoom(roomId);
      setRooms((prev) => prev.filter((room) => room.id !== roomId));
      message.success("Room deleted successfully!");
    } catch (error) {
      console.error("Error deleting room:", error);
      message.error("Failed to delete room.");
    }
  };

  const columns = [
    {
      title: "Room Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Has Sensor",
      dataIndex: "hasSensor",
      key: "hasSensor",
      render: (val) => (val ? "Yes" : "No"),
    },
    {
      title: "House Name",
      dataIndex: "houseName",
      key: "houseName",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this room?"
          onConfirm={() => handleDeleteRoom(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined className="delete-icon" />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="room-view-container">
      <h2>Rooms in House: {houseName || `#${houseId}`}</h2>

      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        className="add-room-button"
      >
        Add Room
      </Button>

      <Table
        dataSource={rooms}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        size="large"
      />

      <Modal
        title="Add Room"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <Form layout="vertical" form={form} onFinish={handleAddRoom}>
          <Form.Item name="name" label="Room Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Room Type" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="Bedroom">Bedroom</Select.Option>
              <Select.Option value="Livingroom">Living Room</Select.Option>
              <Select.Option value="Kitchen">Kitchen</Select.Option>
              <Select.Option value="Bathroom">Bathroom</Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Room
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default RoomView;
