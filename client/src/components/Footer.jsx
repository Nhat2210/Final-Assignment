import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

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
      icons: [Instagram, Facebook, Youtube, Youtube], // TripAdvisor uses Youtube icon as placeholder
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 py-8 border-b border-gray-200">
        <div className="flex-1 max-w-md">
          <div className="mb-4">
            <img
              className="w-36 md:w-32 h-auto"
              src="/nh-t-linh-hotel-elegant-logo.png"
              alt="Nhật Linh Hotel Logo"
            />
          </div>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Nhật Linh Hotel - Trải nghiệm lưu trú đẳng cấp với dịch vụ hoàn hảo.
            Chúng tôi mang đến cho bạn những kỳ nghỉ tuyệt vời nhất tại các địa
            điểm du lịch hàng đầu Việt Nam.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
              <span>Ngõ 20 Mỹ Đình Nam Từ Liêm Hà Nội</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <a
                href="tel:0378342817"
                className="hover:text-gray-700 transition-colors"
              >
                0378342817
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <a
                href="mailto:nhatcaodev@gmail.com"
                className="hover:text-gray-700 transition-colors"
              >
                nhatcaodev@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-auto md:flex-1 gap-6 md:gap-8">
          {linkSections.map((section, index) => (
            <div key={index} className="min-w-[140px]">
              <h3 className="font-semibold text-base text-gray-900 mb-3 pb-2 border-b border-gray-100">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => {
                  const Icon = section.icons?.[i];
                  return (
                    <li key={i}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 group"
                      >
                        {Icon && (
                          <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        )}
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {link}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 text-center">
        <p className="text-sm text-gray-500">
          Bản quyền © 2025{" "}
          <a
            href="#"
            className="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
          >
            Nhật Linh Hotel
          </a>
          . Tất cả quyền được bảo lưu.
        </p>
      </div>
    </div>
  );
};

export default Footer;
