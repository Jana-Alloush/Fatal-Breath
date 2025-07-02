import { loadRoomsFromAdminHouses, createRoom, deleteRoom } from "../../../root/api";
import AddRoomModal from "../../../components/modals/AddRoomModal";
import { Table, Button, Popconfirm, message, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RoomManagement = () => {
  const { houseId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchRoomsAndHouse = async () => {
      try {
        const roomsData = await loadRoomsFromAdminHouses(houseId);
        console.log(roomsData);

        setRooms(roomsData);

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
      title: "Sensor Level (%)",
      key: "sensor",
      render: (_, record) => {
        if (record.hasSensor && record.sensor && record.sensor.co_level !== undefined) {
          const level = record.sensor.co_level;
          let color = level < 50 ? "green" : level < 75 ? "orange" : "red";
          return <Tag color={color}>{level}%</Tag>;
        }
        return "N/A";
      },
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
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          className="add-room-button"
        >
          Add Room
        </Button>
      </div>

      <Table
        dataSource={rooms}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        size="large"
      />

      <AddRoomModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddRoom}
      />
    </div>
  );
};

export default RoomManagement;
