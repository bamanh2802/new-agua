import React from "react";
import mentor1 from "/src/assets/portraitMentor1.png";
import mentor2 from "/src/assets/portraitMentor2.png";
import mentor3 from "/src/assets/portraitMentor3.png";

const pioneers = [
  {
    id: 1,
    name: "Ms. Ashley Hoang",
    role: "Mentor",
    image: mentor1, // Đường dẫn ảnh nếu có
    background: `At 16, my 10-year vision was anything but working towards my Ph.D. in physics...`,
    details: [
      { title: "Connection to Vietnam & Teaching Philosophy", content: "Content for this section..." },
      { title: "What I Offer", content: "Details about offerings..." },
      { title: "Target Audience", content: "Who I help..." },
      { title: "Qualifications & Experience", content: "My experiences..." },
      { title: "How to Work Together", content: "Ways to collaborate..." }
    ]
  },
  {
    id: 2,
    name: "Ms. Xuan Rachel Nguyen",
    role: "Mentor",
    image: mentor2,
    background: "Another inspiring story...",
    details: []
  },
  {
    id: 3,
    name: "Ms. Tuong Van Le",
    role: "Mentor",
    image: mentor3,
    background: "Another inspiring story...",
    details: []
  }
];

const PioneerList = ({ onSelect }) => {
  return (
    <div className="container">
      <h2 className="text-uppercase fw-bold text-warning">NHỮNG NGƯỜI TIÊN PHONG</h2>
      <div className="row mt-4">
        {pioneers.map((pioneer) => (
          <div key={pioneer.id} className="col-md-4">
            <div
              className="card shadow-sm border-0"
              onClick={() => onSelect(pioneer)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body text-center bg-light">
              <div key={pioneer.id} style={{ marginBottom: "20px" }}>
                <img 
                    src={pioneer.image} 
                    alt={pioneer.name} 
                    style={{ width: "150px", borderRadius: "10px" }} 
                />
               </div>

                <h5 className="fw-bold">{pioneer.name}</h5>
                <p className="text-muted">{pioneer.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PioneerList;
