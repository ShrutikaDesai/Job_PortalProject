// import React from "react";

// const JobCard = ({ job }) => {
//   return (
//     <div className="job-card">
//       <h3>{job.title}</h3>
//       <p><strong>Company:</strong> {job.company}</p>
//       <p><strong>Location:</strong> {job.location}</p>
//       <p><strong>Description:</strong> {job.description}</p>
//       <p><strong>Package:</strong> {job.package}</p>
//     </div>
//   );
// };

// export default JobCard;


import React from "react";

const JobCard = ({ job, onSelect }) => {
  return (
    <div 
      className="job-card" 
      onClick={() => onSelect(job)} 
      style={styles.card}
    >
      <img src={job.logo} alt={`${job.company} Logo`} style={styles.logo} />
      <h4 style={styles.title}>{job.title}</h4>
      <p style={styles.company}>{job.company}</p>
      <div style={styles.meta}>
        <span>👀 {job.impressions} Impressions</span>
        <span>⏳ {job.timeLeft} left</span>
      </div>
      <div style={styles.tags}>
        {job.tags.map((tag, index) => (
          <span key={index} style={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px 0",
    cursor: "pointer",
    backgroundColor: "#fff"
  },
  logo: {
    width: "50px",
    height: "50px",
    borderRadius: "8px"
  },
  title: {
    margin: "8px 0",
    fontSize: "16px",
    fontWeight: "bold"
  },
  company: {
    fontSize: "14px",
    color: "#555"
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#777",
    margin: "8px 0"
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  },
  tag: {
    backgroundColor: "#e0e0e0",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px"
  }
};

export default JobCard;
