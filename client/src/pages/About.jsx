import React from "react";

// Định nghĩa các hằng số màu tùy chỉnh để dễ quản lý
const COLORS = {
  "primary-blue": "#60A5FA", // Tương đương blue-400
  "royal-gold": "#D4AF37", // Màu tùy chỉnh từ ví dụ trước
  "royal-navy": "#0F172A", // Màu tùy chỉnh từ ví dụ trước
  "royal-blue": "#1E3A8A", // Màu tùy chỉnh từ ví dụ trước
};

// Định nghĩa CSS class tùy chỉnh (dùng inline style để tái tạo hiệu ứng hero và animation)
const customStyles = {
  // Tái tạo .hero-bg
  heroBgStyle: {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  // Tái tạo .fade-in animation
  fadeIn: {
    animation: "fadeIn 0.8s ease-in",
    // Cần định nghĩa @keyframes fadeIn trong file CSS toàn cục nếu muốn hiệu ứng hoạt động
  },
  // Tái tạo .service-card:hover (sử dụng Tailwind utility `hover:scale-100` và `transition-all` cho hiệu ứng tương tự)
  serviceCard: {
    transition: "all 0.3s ease",
  },
};

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center text-white relative"
        style={customStyles.heroBgStyle} // Sử dụng inline style cho background phức tạp
      >
        <div className="text-center max-w-5xl px-6" style={customStyles.fadeIn}>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-blue-400"
            style={{ color: COLORS["primary-blue"] }}
          >
            KHÁCH SẠN NHẬT LINH
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8">
            Khách sạn đẳng cấp & Dịch vụ đặt phòng uy tín
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            {[
              { count: "15+", label: "Năm kinh nghiệm" },
              { count: "500+", label: "Khách sạn đối tác" },
              { count: "50K+", label: "Khách hàng tin tưởng" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="text-3xl font-bold mr-2"
                  style={{ color: COLORS["primary-blue"] }}
                >
                  {item.count}
                </span>
                <span className="text-lg">{item.label}</span>
              </div>
            ))}
          </div>
          <div
            className="w-32 h-1 mx-auto"
            style={{ backgroundColor: COLORS["primary-blue"] }}
          ></div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Giới thiệu tổng quan */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Chúng Tôi Là Ai?
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS["primary-blue"] }}
            ></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Với hơn 15 năm kinh nghiệm trong ngành khách sạn, chúng tôi không
              chỉ sở hữu khách sạn 5 saomà còn là đối tác tin cậy trong việc đặt
              phòng tại hàng trăm khách sạn uy tín
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: COLORS["primary-blue"] }}
                  >
                    <span className="text-2xl text-white">🏨</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      Khách Sạn Riêng
                    </h3>
                    <p className="text-gray-600">
                      Khách sạn 5 sao đẳng cấp quốc tế
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Khách sạn Hoàng Gia với 200 phòng nghỉ cao cấp, đầy đủ tiện
                  nghi hiện đại, dịch vụ chăm sóc khách hàng tận tâm và vị trí
                  đắc địa tại trung tâm thành phố.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl text-white">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      Dịch Vụ Đặt Phòng
                    </h3>
                    <p className="text-gray-600">Mạng lưới đối tác rộng khắp</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Với mạng lưới hơn **500 khách sạn đối tác** từ 3-5 sao, chúng
                  tôi cam kết mang đến cho khách hàng những lựa chọn tốt nhất
                  với giá cả cạnh tranh nhất.
                </p>
              </div>
            </div>

            {/* Image Block */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Khách sạn"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div
                className="absolute -top-6 -right-6 w-32 h-32 opacity-20 rounded-full"
                style={{ backgroundColor: COLORS["primary-blue"] }}
              ></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-black opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Dịch vụ chính */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS["primary-blue"] }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Khách sạn riêng */}
            <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-8 shadow-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: COLORS["primary-blue"] }}
                >
                  <span className="text-3xl">👑</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Khách Sạn Hoàng Gia</h3>
                <p className="text-gray-300">Trải nghiệm đẳng cấp 5 sao</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "200 phòng nghỉ cao cấp",
                  "Spa & Fitness center",
                  "Nhà hàng Michelin",
                  "Hồ bơi vô cực",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span
                      className="mr-2"
                      style={{ color: COLORS["primary-blue"] }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                style={{ backgroundColor: COLORS["primary-blue"] }}
              >
                Đặt Phòng Ngay
              </button>
            </div>

            {/* Card 2: Đặt phòng khách sạn khác */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🏨</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Đặt Phòng Đối Tác
                </h3>
                <p className="text-gray-600">500+ khách sạn uy tín</p>
              </div>
              <ul className="space-y-3 mb-6 text-gray-700">
                {[
                  "Khách sạn 3-5 sao",
                  "Giá tốt nhất thị trường",
                  "Hỗ trợ 24/7",
                  "Đảm bảo chất lượng",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span
                      className="mr-2"
                      style={{ color: COLORS["primary-blue"] }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full border-2 border-black text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all">
                Tìm Khách Sạn
              </button>
            </div>

            {/* Card 3: Dịch vụ tư vấn */}
            <div
              className="bg-gradient-to-br text-white rounded-2xl p-8 shadow-lg hover:translate-y-[-5px] transition-all duration-300"
              style={{
                background: `linear-gradient(to bottom right, ${COLORS["primary-blue"]}, #3b82f6)`, // primary-blue to blue-500 (gần đúng)
              }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Tư Vấn Chuyên Nghiệp
                </h3>
                <p className="text-blue-100">Kinh nghiệm 15+ năm</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Tư vấn miễn phí",
                  "Lựa chọn phù hợp",
                  "So sánh giá cả",
                  "Hỗ trợ đặt phòng",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-white py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                style={{ color: COLORS["primary-blue"] }}
              >
                Liên Hệ Tư Vấn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Tại sao chọn chúng tôi */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS["primary-blue"] }}
            ></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              15 năm kinh nghiệm đã tạo nên uy tín và sự tin cậy từ hàng chục
              nghìn khách hàng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Features */}
            {[
              {
                icon: "🏆",
                title: "Uy Tín Lâu Năm",
                desc: "15+ năm hoạt động trong ngành, được khách hàng và đối tác tin tưởng",
              },
              {
                icon: "💰",
                title: "Giá Tốt Nhất",
                desc: "Cam kết giá tốt nhất thị trường với chính sách hoàn tiền nếu tìm được giá rẻ hơn",
              },
              {
                icon: "🤝",
                title: "Đối Tác Uy Tín",
                desc: "Mạng lưới 500+ khách sạn đối tác từ 3-5 sao, đảm bảo chất lượng dịch vụ",
              },
              {
                icon: "📞",
                title: "Hỗ Trợ 24/7",
                desc: "Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: COLORS["primary-blue"] }}
                >
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Khách sạn đối tác nổi bật (Đã thêm màu Royal Gold/Navy từ ví dụ trước) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: COLORS["royal-navy"] }}
            >
              Đối Tác Nổi Bật
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
            <p className="text-xl text-gray-600">
              Một số khách sạn uy tín trong mạng lưới đối tác của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner Cards */}
            {[
              {
                img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                name: "Grand Hotel Saigon",
                stars: 5,
                desc: "Khách sạn 5 sao sang trọng tại trung tâm TP.HCM",
                price: "2.500.000₫",
              },
              {
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                name: "Ocean View Resort",
                stars: 5,
                desc: "Resort biển cao cấp với view đại dương tuyệt đẹp",
                price: "3.200.000₫",
              },
              {
                img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                name: "Mountain Lodge",
                stars: 4,
                desc: "Khách sạn núi với không khí trong lành",
                price: "1.800.000₫",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: COLORS["royal-navy"] }}
                    >
                      {partner.name}
                    </h3>
                    <div style={{ color: COLORS["royal-gold"] }}>
                      {"⭐".repeat(partner.stars)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{partner.desc}</p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: COLORS["royal-gold"] }}
                    >
                      {partner.price}
                    </span>
                    <span className="text-sm text-gray-500">/đêm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              style={{ backgroundColor: COLORS["royal-blue"] }}
            >
              Xem Tất Cả Đối Tác
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Quy trình đặt phòng */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: COLORS["royal-navy"] }}
            >
              Quy Trình Đặt Phòng
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
            <p className="text-xl text-gray-600">
              Đặt phòng dễ dàng chỉ với 4 bước đơn giản
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Steps */}
            {[
              {
                num: 1,
                title: "Liên Hệ Tư Vấn",
                desc: "Gọi hotline hoặc chat online để được tư vấn miễn phí về các lựa chọn phù hợp",
                color: COLORS["royal-gold"],
              },
              {
                num: 2,
                title: "Chọn Khách Sạn",
                desc: "Lựa chọn khách sạn phù hợp với nhu cầu và ngân sách từ danh sách đề xuất",
                color: COLORS["royal-blue"],
              },
              {
                num: 3,
                title: "Xác Nhận Đặt Phòng",
                desc: "Cung cấp thông tin và thanh toán để hoàn tất việc đặt phòng",
                color: COLORS["royal-gold"],
              },
              {
                num: 4,
                title: "Nhận Xác Nhận",
                desc: "Nhận voucher và thông tin chi tiết qua email trong vòng 30 phút",
                color: COLORS["royal-blue"],
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: COLORS["royal-navy"] }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: COLORS["royal-navy"] }}
            >
              Khách Hàng Nói Gì
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            {[
              {
                img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                name: "Chị Minh Anh",
                quote:
                  '"Đã sử dụng dịch vụ của Hoàng Gia Hotel nhiều lần. Giá cả hợp lý, dịch vụ tư vấn tận tâm và luôn tìm được khách sạn ưng ý."',
                stars: 5,
              },
              {
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                name: "Anh Đức Minh",
                quote:
                  '"Công ty tôi thường xuyên đặt phòng cho khách VIP qua Hoàng Gia. Chất lượng dịch vụ luôn đảm bảo, không bao giờ thất vọng."',
                stars: 5,
              },
              {
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                name: "Chị Thu Hương",
                quote:
                  '"Từ khi biết Hoàng Gia Hotel, tôi không còn phải lo lắng về việc tìm khách sạn khi đi du lịch. Họ luôn có giải pháp tốt nhất."',
                stars: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.img}
                    alt="Khách hàng"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4
                      className="font-bold"
                      style={{ color: COLORS["royal-navy"] }}
                    >
                      {testimonial.name}
                    </h4>
                    <div style={{ color: COLORS["royal-gold"] }}>
                      {"⭐".repeat(testimonial.stars)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* CTA Section */}
      <section
        className="py-20 px-6 text-white"
        style={{ backgroundColor: COLORS["royal-navy"] }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn Sàng Đặt Phòng?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận ưu đãi
            đặc biệt
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Details */}
            {[
              {
                icon: "📞",
                title: "Hotline 24/7",
                detail: "1900 1234",
                detailStyle: {
                  color: COLORS["royal-gold"],
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                },
              },
              {
                icon: "💬",
                title: "Chat Online",
                detail: "Tư vấn trực tiếp",
                detailStyle: { color: "rgb(209 213 219)" },
              },
              {
                icon: "📧",
                title: "Email",
                detail: "booking@hoanggia.com",
                detailStyle: { color: "rgb(209 213 219)" },
              },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: COLORS["royal-gold"] }}
                >
                  <span className="text-2xl">{contact.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p style={contact.detailStyle}>{contact.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              className="px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105"
              style={{
                backgroundColor: COLORS["royal-gold"],
                color: COLORS["royal-navy"],
              }}
            >
              Đặt Phòng Ngay
            </button>
            <button
              className="border-2 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:bg-royal-gold hover:text-royal-navy"
              style={{
                borderColor: COLORS["royal-gold"],
                color: COLORS["royal-gold"],
              }}
            >
              Tư Vấn Miễn Phí
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: COLORS["royal-gold"] }}
              >
                KHÁCH SẠN HOÀNG GIA
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                15+ năm kinh nghiệm trong ngành khách sạn,mang đến dịch vụ đặt
                phòng uy tín và chất lượng.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  style={{ color: COLORS["royal-gold"] }}
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  style={{ color: COLORS["royal-gold"] }}
                >
                  Zalo
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  style={{ color: COLORS["royal-gold"] }}
                >
                  Instagram
                </a>
              </div>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Dịch Vụ</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Khách sạn riêng",
                  "Đặt phòng đối tác",
                  "Tư vấn du lịch",
                  "Tour trọn gói",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-royal-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Chính sách đặt phòng",
                  "Chính sách hủy phòng",
                  "Câu hỏi thường gặp",
                  "Liên hệ",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-royal-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 123 Đường Lê Lợi, Q1, TP.HCM</li>
                <li>📞 Hotline: 1900 1234</li>
                <li>📧 booking@hoanggia.com</li>
                <li>🕒 Hỗ trợ 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 Khách sạn Hoàng Gia. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
