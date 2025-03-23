import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import './pioneerList.css'

interface Detail {
  title: string;
  content: string;
}

interface Pioneer {
  id: number;
  name: string;
  role: string;
  image: string;
  background: string;
  details: Detail[];
}

interface PioneerListProps {
  onSelect: (pioneer: Pioneer) => void;
}

const pioneers: Pioneer[] = [
  {
    id: 1,
    name: "Ms. Ashley Hoang",
    role: "Mentor",
    image: "/assets/portraitMentor1.png",
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
    image: "/assets/portraitMentor2.png",
    background: "Another inspiring story...",
    details: []
  },
  {
    id: 3,
    name: "Ms. Tuong Van Le",
    role: "Mentor",
    image: "/assets/portraitMentor3.png",
    background: "Another inspiring story...",
    details: []
  }
];

const PioneerList: React.FC<PioneerListProps> = ({ onSelect }) => {
  return (
    <div className="container">
      <h2
        style={{
        marginBottom: '50px',
        }}
      className="text-uppercase fw-bold text-warning">NHỮNG NGƯỜI TIÊN PHONG</h2>
      <div className="row mt-4">
        {pioneers.map((pioneer) => (
          <div key={pioneer.id} className="col-md-4 ">
            <div 
                      className="pioneer-card shadow-sm border-0"
                      onClick={() => onSelect(pioneer)}
                    >
                      <div className="card-body text-center">
                        <div style={{ marginBottom: "20px" }}>
                          <img 
                            src={pioneer.image} 
                            alt={pioneer.name} 
                            style={{ width: "150px", borderRadius: "10px", position: "relative", zIndex: 10 }} 
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