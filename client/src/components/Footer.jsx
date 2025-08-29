import React from "react";

const Footer = () => {
  const linkSections = [
    {
      title: "Liên Kết Nhanh",
      links: [
        "Trang Chủ",
        "Phòng & Suites",
        "Ưu Đãi Đặc Biệt",
        "Dịch Vụ",
        "Về Chúng Tôi",
      ],
    },
    {
      title: "Hỗ Trợ Khách Hàng",
      links: [
        "Chính Sách Đặt Phòng",
        "Chính Sách Hủy & Hoàn Tiền",
        "Phương Thức Thanh Toán",
        "Kiểm Tra Đặt Phòng",
        "Liên Hệ Hỗ Trợ",
      ],
    },
    {
      title: "Theo Dõi Chúng Tôi",
      links: ["Instagram", "Facebook", "TripAdvisor", "YouTube"],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img className="w-34 md:w-32" src="" alt="Nhật Linh Hotel Logo" />
          <p className="max-w-[410px] mt-6">
            Nhật Linh Hotel - Trải nghiệm lưu trú đẳng cấp với dịch vụ hoàn hảo.
            Chúng tôi mang đến cho bạn những kỳ nghỉ tuyệt vời nhất tại các địa
            điểm du lịch hàng đầu Việt Nam.
          </p>
          <div className="mt-4 text-sm">
            <p className="mb-1">Ngõ 20 Mỹ Đình Nam Từ Liêm Hà Nội</p>
            <p className="mb-1">Hotline: 0378342817</p>
            <p>nhatcaodev@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Bản quyền © 2025{" "}
        <a href="#" className="hover:underline">
          Nhật Linh Hotel
        </a>
        . Tất cả quyền được bảo lưu.
      </p>
    </div>
  );
};

export default Footer;
