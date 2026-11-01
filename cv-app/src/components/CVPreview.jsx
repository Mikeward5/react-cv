import "./CVPreview.css";

function CVPreview({ generalInfo, education, work }) {
  return (
    <div className="CVPreview-layout">
      <div className="generalInfo">
        <h1>{generalInfo.name}</h1>
        <div className="email-phone">
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
        </div>
      </div>
      <hr />
      <div className="education">
        <h2>Education</h2>
        {education.map((item) => (
          <div className="education-box" key={item.id}>
            <div className="date-box">
              <p>
                {item.startDate} – {item.endDate}
              </p>
            </div>

            <div className="education-details">
              <h3>{item.school}</h3>
              <p>{item.qualification}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="work">
        <h2>Work Experience</h2>
        {work.map((item) => (
          <div className="work-box" key={item.id}>
            <div className="date-box">
              <p>
                {item.startDate} – {item.endDate}
              </p>
            </div>

            <div className="work-details">
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p>{item.responsibilities}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVPreview;
