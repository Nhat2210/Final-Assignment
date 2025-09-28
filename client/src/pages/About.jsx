// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="mt-20 max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Về Khách sạn Nhật Linh
      </h1>
      <p className="text-gray-600 mb-6 leading-relaxed text-justify">
        Khách sạn Nhật Linh nằm ở vị trí thuận tiện, kết hợp phong cách ấm áp Á
        - Âu, phục vụ cả khách nghỉ dưỡng lẫn doanh nhân. Chúng tôi cam kết mang
        đến trải nghiệm thoải mái và dịch vụ chu đáo để mỗi kỳ nghỉ hay chuyến
        công tác của bạn đều đáng nhớ.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <h2 className="font-semibold mb-1">Địa chỉ</h2>
          <p className="text-gray-500">
            123 Đường Trung Tâm, Quận 1, Thành phố
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Liên hệ</h2>
          <p className="text-gray-500">(+84) 9xx xxx xxx</p>
          <p className="text-gray-500">info@nhatlinhhotel.com</p>
        </div>
      </div>
    </div>
  );
}
