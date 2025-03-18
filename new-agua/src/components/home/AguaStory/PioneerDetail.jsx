import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import mentor1 from "/src/assets/portraitMentor1.png";
import mentor2 from "/src/assets/portraitMentor2.png";
import mentor3 from "/src/assets/portraitMentor3.png";

const PioneerDetail = ({ pioneer, onBack }) => {
  const [activeKey, setActiveKey] = useState(null);

  if (!pioneer) return null;

  return (
    <div className="container mt-1">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ⬅ Quay lại danh sách
      </button>
      <div className="card shadow-sm border-0">
        <div className="card-body">
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
  {/* Ảnh đè lên nền xanh */}
        <img 
        src={pioneer.image} 
        alt={pioneer.name} 
        style={{
            width: "150px",
            height: "200px",
            borderRadius: "10px",
            zIndex: 2,
            objectFit: "cover", // Để ảnh không bị méo
        }} 
        />


  {/* Nền xanh chứa thông tin */}
  <div
    style={{
      backgroundColor: "#e7f3ff",
      padding: "20px",
      borderRadius: "10px",
      flexGrow: 1,
      marginLeft: "-40px", // Kéo nền xanh vào sát ảnh
      display: "flex",
      alignItems: "center", // Căn giữa nội dung theo chiều dọc
      paddingLeft: "100px", // Đảm bảo chữ không bị sát mép ảnh
      marginTop: "60px", // Dịch nền xanh xuống dưới

    }}
  >
    <div>
      <h3 className="fw-bold">{pioneer.name}</h3>
      <p className="text-muted">{pioneer.role}</p>
    </div>
  </div>
</div>




          <h4 className="mt-4 fw-bold">Introduction & Background</h4>
          <p>{pioneer.background}</p>

          <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
            {pioneer.details.map((detail, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{detail.title}</Accordion.Header>
                <Accordion.Body>{detail.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PioneerDetail;
