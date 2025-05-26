import React, { useState } from 'react';

const HouseManagement = () => {
  const [houses, setHouses] = useState([
    { id: 1, name: 'Main House', rooms: 3 },
    { id: 2, name: 'Vacation Home', rooms: 2 },
  ]);
  const [newHouseName, setNewHouseName] = useState('');

  const addHouse = () => {
    if (newHouseName.trim()) {
      const newHouse = {
        id: houses.length + 1,
        name: newHouseName,
        rooms: 0
      };
      setHouses([...houses, newHouse]);
      setNewHouseName('');
    }
  };

  const deleteHouse = (houseId) => {
    setHouses(houses.filter(house => house.id !== houseId));
  };

  return (
    <div>
      <h3>House Management</h3>
      <div>
        <input
          type="text"
          value={newHouseName}
          onChange={(e) => setNewHouseName(e.target.value)}
          placeholder="New house name"
        />
        <button onClick={addHouse}>Add House</button>
      </div>
      <ul>
        {houses.map(house => (
          <li key={house.id}>
            {house.name} (Rooms: {house.rooms})
            <button onClick={() => deleteHouse(house.id)}>Delete</button>
            <button>Manage Rooms</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseManagement;