import { useState } from "react";
import "./Form.css";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }
  function handleChange({ target }) {
    const { name, value } = target;

    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  return (
    <div className="general-info-flex">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>General Information</h2>
          <label htmlFor="name">Full name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Eg: Michael Ward"
            value={generalInfo.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Eg: Mike@email.com"
            value={generalInfo.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Eg: 03234 943211"
            value={generalInfo.phone}
            onChange={handleChange}
          />
          <input id="submit-button" type="submit" value="Submit Details" />
        </form>
      ) : (
        <div className="info-box">
          <p>{generalInfo.name}</p>
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
