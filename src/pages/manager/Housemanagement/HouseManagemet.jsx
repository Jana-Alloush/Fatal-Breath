import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Table,
  Row,
  Col,
  Tooltip,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  createHouse,
  loadHouses,
  deleteHouse,
} from "../../../root/api";
import AddHouseModal from "../../../components/modals/AddHouseModal";

const HouseManagement = () => {
  const [houses, setHouses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchHouses = useCallback(async () => {
    try {
      const { houses: rawHouses } = await loadHouses();
      const mapped = rawHouses.map((house) => ({
        ...house,
        key: house.id.toString(),
      }));
      setHouses(mapped);
    } catch (error) {
      console.error("Failed to load houses:", error.response?.data || error.message);
    }
  }, []);

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  const handleAddHouse = async (data) => {
    try {
      const { house } = await createHouse(data.name, data.city, data.country);
      setHouses((prev) => [
        ...prev,
        { ...house, key: house.id.toString() },
      ]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to add house:", error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHouse(id);
      setHouses((prev) => prev.filter((house) => house.key !== id));
    } catch (error) {
      console.error("Failed to delete house:", error.response?.data || error.message);
    }
  };

  const handleNavigateToRooms = (id) => {
    navigate(`/houses/${id}/rooms`);
  };

  const filteredData = houses.filter(({ name, city, country }) => {
    const query = searchText.toLowerCase();
    return (
      name.toLowerCase().includes(query) ||
      city.toLowerCase().includes(query) ||
      country.toLowerCase().includes(query)
    );
  });

  const columns = [
    {
      title: "House Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      className: "text-center",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.country.localeCompare(b.country),
      className: "text-center",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
      className: "text-center",
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      className: "text-center",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          <Tooltip title="View Rooms">
            <Button
              icon={<AppstoreOutlined />}
              size="small"
              onClick={() => handleNavigateToRooms(record.key)}
              className=""
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

  return (
    <div className="house-management-container">
      <Row className="house-management-header mb-3" gutter={[16, 16]}>
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
      </Row>

      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey="key"
      />

      <AddHouseModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddHouse={handleAddHouse}
      />
    </div>
  );
};

export default HouseManagement;
