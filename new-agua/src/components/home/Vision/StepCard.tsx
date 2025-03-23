import { ReactNode } from "react";

interface Step {
  id: number;
  title: string;
  summary: string;
  details: ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Bước 1:",
    summary:
      "Đánh giá hành vi – Phỏng vấn cá nhân để hiểu phong cách làm việc & thái độ ứng viên.",
    details: (
      <>
        <p>
          <strong>Mục tiêu:</strong> Xác định cách ứng viên phản ứng trong môi trường làm việc, động lực
          làm việc và khả năng tương tác với học sinh, đồng nghiệp.
        </p>
        <p>
          <strong>Phương pháp đánh giá:</strong>
        </p>
        <ul>
          <li>Phỏng vấn cá nhân (1:1) với HR & Quản lý trực tiếp</li>
          <li>Tập trung vào kinh nghiệm thực tế & phong cách làm việc</li>
        </ul>
        <p>
          <strong>Câu hỏi và tình huống:</strong>
        </p>
        <ul>
          <li>
            Gặp một học sinh chưa chăm chỉ, chưa rèn luyện được tính tự giác và thường xuyên trì trệ trong học
            tập, bạn sẽ làm gì?
          </li>
          <li>Đặt ứng viên vào tình huống gặp phụ huynh cùng con đến gặp buổi đầu tiên để tư vấn.</li>
          <li>Nhu cầu của phụ huynh và học sinh đâu là cái quan trọng hơn?</li>
        </ul>
        <p>
          <strong>Tiêu chí đánh giá:</strong>
        </p>
        <ul>
          <li>Kỹ năng giao tiếp & lắng nghe</li>
          <li>Khả năng làm việc nhóm</li>
          <li>Cách xử lý tình huống & giải quyết vấn đề</li>
          <li>Sự chủ động & cam kết với công việc</li>
        </ul>
        <p>Ứng viên đạt tiêu chí sẽ được mời vào vòng tiếp theo.</p>
      </>
    ),
  },
  {
    id: 2,
    title: "Bước 2:",
    summary: "Đánh giá tư duy – Giao bài tập thực tế để kiểm tra khả năng lập kế hoạch & sáng tạo.",
    details: (
      <>
        <p>
          <strong>Mục tiêu:</strong> Kiểm tra khả năng tư duy logic, sáng tạo và lập kế hoạch.
        </p>
        <p>
          <strong>Phương pháp đánh giá:</strong>
        </p>
        <ul>
          <li>Giao bài tập thực tế liên quan đến công việc</li>
          <li>Yêu cầu thuyết trình giải pháp</li>
        </ul>
        <p>
          <strong>Tiêu chí đánh giá:</strong>
        </p>
        <ul>
          <li>Khả năng lập kế hoạch</li>
          <li>Tư duy logic</li>
          <li>Sáng tạo trong giải quyết vấn đề</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Bước 3:",
    summary: "Đánh giá tư duy – Giao bài tập thực tế để kiểm tra khả năng lập kế hoạch & sáng tạo.",
    details: (
      <>
        <p>
          <strong>Mục tiêu:</strong> Kiểm tra khả năng tư duy logic, sáng tạo và lập kế hoạch.
        </p>
        <p>
          <strong>Phương pháp đánh giá:</strong>
        </p>
        <ul>
          <li>Giao bài tập thực tế liên quan đến công việc</li>
          <li>Yêu cầu thuyết trình giải pháp</li>
        </ul>
        <p>
          <strong>Tiêu chí đánh giá:</strong>
        </p>
        <ul>
          <li>Khả năng lập kế hoạch</li>
          <li>Tư duy logic</li>
          <li>Sáng tạo trong giải quyết vấn đề</li>
        </ul>
      </>
    ),
  },
];

export default steps;
