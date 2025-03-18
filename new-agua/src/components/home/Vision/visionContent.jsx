import React, { useState, useEffect } from "react";
import "./visionContent.css"; 
import steps from "./StepCard"; // ✅ Import từ file mới

const VisionContent = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 🔥 Chỉ chạy animation một lần
  }, []);

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-uppercase" data-aos="fade-up">
        Quy trình tuyển dụng Agua International Education
      </h2>
      <p className="fst-italic" data-aos="fade-up">
        Dựa trên 3 trụ cột chính: <strong>Hành vi – Tư duy – Tính cách</strong>
      </p>

      <h3 className="mt-4 fw-bold" data-aos="fade-up">
        Tóm tắt quy trình tuyển dụng
      </h3>

      {/* Danh sách các bước */}
      {selectedStep === null ? (
        <div className="row mt-4">
          {steps.map((step) => (
            <div key={step.id} className="col-md-4" data-aos="fade-up">
              <div
                className="p-4 shadow-sm rounded bg-light custom-hover"
                onClick={() => setSelectedStep(step.id)}
              >
                <h4 className="fw-bold text-center">{step.title}</h4>
                <p>{step.summary}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Hiển thị nội dung chi tiết của bước đã chọn
        <div className="step-details">
          <h4 className="fw-bold">{steps.find((s) => s.id === selectedStep).title}</h4>
          {steps.find((s) => s.id === selectedStep).details}

          <button className="btn btn-primary mt-3" onClick={() => setSelectedStep(null)}>
            Quay lại
          </button>
        </div>
      )}

      <p className="mt-4" data-aos="fade-up">
        Agua International Education tìm kiếm những ứng viên đam mê giáo dục, có tinh thần hỗ trợ và sáng tạo trong cách tiếp cận học tập.
      </p>
    </div>
  );
};

export default VisionContent;
