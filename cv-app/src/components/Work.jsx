import { useState } from "react";
import "./Form.css";

function Work({ work, setWork }) {
  const [isEditing, setIsEditing] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (editingId !== null) {
      // EDIT: Update the existing job
      setWork((prev) =>
        prev.map((entry) =>
          entry.id === editingId ? { ...formData, id: editingId } : entry,
        ),
      );
    } else {
      // ADD: Create a new job
      const newEntry = {
        ...formData,
        id: crypto.randomUUID(),
      };

      setWork((prev) => [...prev, newEntry]);
    }

    // Reset the form
    setFormData({
      company: "",
      role: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });

    setEditingId(null);
    setIsEditing(false);
  }

  function handleChange({ target }) {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleDelete(id) {
    setWork((prev) => prev.filter((entry) => entry.id !== id));
  }

  function handleEdit(item) {
    setFormData(item);
    setEditingId(item.id);
    setIsEditing(true);
  }

  return (
    <div className="work-info-flex">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>Work Experience</h2>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Eg: Example Ltd"
            value={formData.company}
            onChange={handleChange}
          />
          <label htmlFor="role">Role</label>
          <input
            id="role"
            type="text"
            name="role"
            placeholder="Eg: Frontend Developer"
            value={formData.role}
            onChange={handleChange}
          />
          <label htmlFor="responsibilities">Responsibilities</label>
          <input
            id="responsibilities"
            type="text"
            name="responsibilities"
            placeholder="Eg: Developed User Interfaces"
            value={formData.responsibilities}
            onChange={handleChange}
          />
          <label htmlFor="start">Start Date</label>
          <input
            id="start"
            type="date"
            name="startDate"
            placeholder="Eg: Sep 2019"
            value={formData.startDate}
            onChange={handleChange}
          />
          <label htmlFor="end">End Date</label>
          <input
            id="end"
            type="date"
            name="endDate"
            placeholder="Eg: Sep 2021"
            value={formData.endDate}
            onChange={handleChange}
          />
          <input id="submit-button" type="submit" value="Submit Details" />
        </form>
      ) : (
        <div>
          {work.map((item) => (
            <div key={item.id}>
              <p>{item.company}</p>
              <p>{item.role}</p>
              <p>{item.responsibilities}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
          ))}

          <button
            onClick={() => {
              setEditingId(null);
              setIsEditing(true);
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default Work;
