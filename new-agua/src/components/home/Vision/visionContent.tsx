
'use client'
import React, { useState, useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./visionContent.css";
import steps from "./StepCard";

interface Step {
  id: number;
  title: string;
  summary: string;
  details: ReactNode;
}

const VisionContent: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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

      {selectedStep === null ? (
        <div className="row mt-4">
          {steps.map((step: Step) => (
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
        <div className="step-details">
          {steps.map((step: Step) =>
            step.id === selectedStep ? (
              <div key={step.id}>
                <h4 className="fw-bold">{step.title}</h4>
                {step.details}
                <button className="btn btn-primary mt-3" onClick={() => setSelectedStep(null)}>
                  Quay lại
                </button>
              </div>
            ) : null
          )}
        </div>
      )}

      <p className="mt-4" data-aos="fade-up">
        Agua International Education tìm kiếm những ứng viên đam mê giáo dục, có tinh thần hỗ trợ và sáng tạo trong cách tiếp cận học tập.
      </p>
    </div>
  );
};

export default VisionContent;