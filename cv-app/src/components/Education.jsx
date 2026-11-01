import { useState } from "react";
import "./Form.css";

function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    school: "",
    qualification: "",
    startDate: "",
    endDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (editingId !== null) {
      // EDIT: Update the existing qualification
      setEducation((prev) =>
        prev.map((entry) =>
          entry.id === editingId ? { ...formData, id: editingId } : entry,
        ),
      );
    } else {
      // ADD: Create a new qualification
      const newEntry = {
        ...formData,
        id: crypto.randomUUID(),
      };

      setEducation((prev) => [...prev, newEntry]);
    }

    // Reset the form
    setFormData({
      school: "",
      qualification: "",
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
    setEducation((prev) => prev.filter((entry) => entry.id !== id));
  }

  function handleEdit(item) {
    setFormData(item);
    setEditingId(item.id);
    setIsEditing(true);
  }

  return (
    <div className="education-info-flex">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>Qualifications</h2>
          <label htmlFor="school">School / University</label>
          <input
            id="school"
            name="school"
            type="text"
            placeholder="Eg: University of Example"
            value={formData.school}
            onChange={handleChange}
          />
          <label htmlFor="qualification">Qualification</label>
          <input
            id="qualification"
            type="text"
            name="qualification"
            placeholder="Eg: BSc Computer Science"
            value={formData.qualification}
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
          {education.map((item) => (
            <div key={item.id}>
              <p>{item.school}</p>
              <p>{item.qualification}</p>
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

export default Education;
