import React, { useState } from 'react';


const AnnouncementCenter = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'System Maintenance',
      date: '2025-06-01',
      content: 'Scheduled maintenance will occur on June 5th at 12:00 PM.',
      createdBy: 'admin',
    },
    {
      id: 2,
      title: 'New Feature Released',
      date: '2025-05-28',
      content: 'Real-time gas alerts and room analytics are now live!',
      createdBy: 'manager',
    },
  ]);

  const [form, setForm] = useState({ title: '', content: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      id: announcements.length + 1,
      title: form.title,
      date: new Date().toISOString().split('T')[0],
      content: form.content,
      createdBy: 'manager',
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setForm({ title: '', content: '' });
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const announcement = announcements.find((item) => item.id === id);
    setEditId(id);
    setEditForm({ title: announcement.title, content: announcement.content });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setAnnouncements(
      announcements.map((item) =>
        item.id === editId ? { ...item, ...editForm } : item
      )
    );
    setEditId(null);
    setEditForm({ title: '', content: '' });
  };

  const filteredAnnouncements = announcements.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="announcement-center">
      <h2>📢 Announcement Center</h2>

      <form className="create-form" onSubmit={handleSubmit}>
        <h3>Create a New Announcement</h3>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        ></textarea>
        <button type="submit">Post Announcement</button>
      </form>

      <input
        type="text"
        className="search-input"
        placeholder="Search announcements..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="announcement-list">
        {filteredAnnouncements.map((item) => (
          <div key={item.id} className="announcement-card">
            <div className="header">
              <h4>{item.title}</h4>
              <span className="date">{item.date}</span>
            </div>
            <p>{item.content}</p>
            {item.createdBy === 'manager' && (
              <div className="actions">
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
            {editId === item.id && (
              <form className="edit-form" onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm({ ...editForm, title: e.target.value })
                  }
                  required
                />
                <textarea
                  value={editForm.content}
                  onChange={(e) =>
                    setEditForm({ ...editForm, content: e.target.value })
                  }
                  required
                ></textarea>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditId(null)}>
                  Cancel
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCenter;
