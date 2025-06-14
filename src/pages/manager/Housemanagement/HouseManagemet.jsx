import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Modal,
  Table,
  Form,
  Row,
  Col,
  Tooltip,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  UserAddOutlined,
  SearchOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { createHouse, loadHouses, deleteHouse } from "../../../root/api";

const HouseManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await loadHouses();

        const loadedHouses = response.houses.map((house) => ({
          ...house,
          key: house.id.toString(),
        }));

        setHouses(loadedHouses);
      } catch (error) {
        console.error(
          "Failed to load house:",
          error.response?.data || error.message
        );
      }
    };

    fetchHouses();
  }, []);

  const handleAddHouse = async (data) => {
    try {
      const response = await createHouse(data.name, data.city, data.country);

      console.log(response);
      const addedHouse = {
        ...response.house,
        key: response.house.id.toString(),
      };

      setHouses([...houses, addedHouse]);
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.error(
        "Failed to add house:",
        error.response?.data || error.message
      );
    }
  };

  const handleDelete = async (key) => {
    try {
      await deleteHouse(key);
      const newData = houses.filter((item) => item.key !== key);
      setHouses(newData);
    } catch (error) {
      console.error(
        "Failed to delete house:",
        error.response?.data || error.message
      );
    }
  };
  const handleShowRooms = (houseId) => {
  navigate(`/houses/${houseId}/rooms`);
};


  const columns = [
    {
      title: "House Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },

    {
      title: "country",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.country.localeCompare(b.country),
    },
    {
      title: "city",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Tooltip title="View Rooms">
            <Button
              icon={<AppstoreOutlined />}
              size="small"
              onClick={() => handleShowRooms(record.key)}
              style={{
                color: "#1890ff",
                backgroundColor: "#f0f5ff",
                borderColor: "#91d5ff",
              }} // Light blue
            />
          </Tooltip>
          <Popconfirm
            title="Are you sure to delete this house?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const filteredData = houses.filter((house) => {
    const lowerSearch = searchText.toLowerCase();
    return (
      house.name.toLowerCase().includes(lowerSearch) ||
      house.city.toLowerCase().includes(lowerSearch) ||
      house.country.toLowerCase().includes(lowerSearch)
    );
  });

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
          <Button
            type="primary"
            icon={<PlusOutlined />}
            block
            onClick={() => setIsModalOpen(true)}
          >
            Add House
          </Button>
        </Col>
        <Col xs={12} sm={6}>
          <Button
            icon={<UserAddOutlined />}
            block
            onClick={() => setIsInviteOpen(true)}
          >
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

      {/* Modal: Add House */}
      <Modal
        title="Add House"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <Form layout="vertical" form={form} onFinish={handleAddHouse}>
          <Form.Item
            name="name"
            label="House Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. Sunset Estate" />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. Lebanon" />
          </Form.Item>
          <Form.Item name="city" label="city" rules={[{ required: true }]}>
            <Input placeholder="e.g. Beirut" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form>
      </Modal>

      {/* Modal: Invite User */}
      <Modal
        title="Invite User"
        open={isInviteOpen}
        onCancel={() => setIsInviteOpen(false)}
        footer={null}
        centered
      >
        <Form layout="vertical">
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
    </div>
  );
};

export default HouseManagement;
