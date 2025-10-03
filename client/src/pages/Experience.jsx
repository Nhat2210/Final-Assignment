import React from "react";

// Định nghĩa các hằng số màu tùy chỉnh để dễ dàng bảo trì trong Tailwind/Inline Style
// (Trong ứng dụng thực tế, bạn nên cấu hình chúng trong tailwind.config.js)
const COLORS = {
  "royal-gold": "#D4AF37",
  "royal-blue": "#1E3A8A",
  "royal-navy": "#0F172A",
};

// Định nghĩa CSS class tùy chỉnh (dùng inline style để tái tạo hiệu ứng hero và parallax)
const customStyles = {
  // Tái tạo .hero-bg và .parallax, chuyển phần background-image/linear-gradient thành inline style
  heroBgStyle: {
    background: `linear-gradient(rgba(30, 58, 138, 0.3), rgba(15, 23, 42, 0.5)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  parallaxBgStyle: {
    background: `linear-gradient(${COLORS["royal-blue"]}E6, ${COLORS["royal-navy"]}E6), url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`, // Thêm opacity vào màu
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  // Tái tạo .story-card
  storyCardStyle: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  // Tái tạo animation fade-in (cần thêm vào file CSS toàn cục nếu muốn dùng class,
  // nhưng ở đây ta sẽ dùng style inline đơn giản hơn hoặc bỏ qua nếu không cần thiết)
};

const RoyalHotelExperience = () => {
  // Lược bỏ logic JS phức tạp để giữ component đơn giản, chỉ tập trung vào UI

  return (
    <div className="bg-white">
      {/* Trong dự án thực tế, bạn nên tạo các Sub-Component như HeroSection, StorySection, etc.
        để tái sử dụng và quản lý code tốt hơn.
      */}

      {/* Hero - Immersive Experience */}
      <section
        className="min-h-screen flex items-center justify-center text-white relative"
        style={customStyles.heroBgStyle} // Sử dụng inline style cho background phức tạp
      >
        <div
          className="text-center max-w-4xl px-6"
          style={{ animation: "fadeIn 1s ease-in" }}
        >
          {/* fade-in CSS đã được chuyển thành inline style hoặc cần định nghĩa trong global CSS */}
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Hành Trình Khám Phá
            <br />
            <span style={{ color: COLORS["royal-gold"] }} className="font-bold">
              Những Trải Nghiệm Đặc Biệt
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-200 leading-relaxed">
            Mỗi khoảnh khắc tại đây là một câu chuyện riêng, mỗi trải nghiệm là
            một kỷ niệm khó quên
          </p>
          <div
            className="w-32 h-0.5 mx-auto"
            style={{ backgroundColor: COLORS["royal-gold"] }}
          ></div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Cảm Nhận Đầu Tiên */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ color: COLORS["royal-navy"] }}
            >
              Cảm Nhận Đầu Tiên
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-12"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
</div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Card 1 */}
              <div
                className="p-8 rounded-2xl shadow-lg"
                style={customStyles.storyCardStyle}
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: COLORS["royal-navy"] }}
                >
                  Bước Chân Vào Không Gian Hoàng Gia
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Khi bạn bước qua cánh cửa chính, ánh sáng ấm áp từ những chiếc
                 đèn chùm pha lê sẽ chào đón bạn. Mùi hương hoa nhài thoang
                  thoảng, tiếng nhạc piano nhẹ nhàng và nụ cười chân thành của
                  đội ngũ lễ tân tạo nên ấn tượng đầu tiên khó quên.
                </p>
              </div>
              {/* Card 2 */}
              <div
                className="p-8 rounded-2xl shadow-lg"
                style={customStyles.storyCardStyle}
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: COLORS["royal-navy"] }}
                >
                  Cảm Giác Được Chăm Sóc
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Từ ly welcome drink mát lạnh đến việc hỗ trợ hành lý, mọi chi
                 tiết đều được chăm chút tỉ mỉ. Bạn sẽ cảm nhận được sự quan
                  tâm chân thành, không chỉ là dịch vụ mà còn là sự ấm áp của
                  con người.
                </p>
              </div>
            </div>

            {/* Image Block */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sảnh đón khách"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div
                className="absolute -top-6 -left-6 w-24 h-24 opacity-20 rounded-full"
                style={{ backgroundColor: COLORS["royal-gold"] }}
              ></div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rounded-full"
                style={{ backgroundColor: COLORS["royal-blue"] }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Trải Nghiệm Phòng Nghỉ */}
      <section
        className="py-24 px-6 text-white"
        style={customStyles.parallaxBgStyle} // Sử dụng inline style cho parallax background
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Không Gian Riêng Tư Của Bạn
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-12"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mỗi phòng nghỉ là một thế giới riêng, nơi bạn có thể thư giãn hoàn
              toàn và tận hưởng những khoảnh khắc yên bình
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Trải nghiệm Card (Đã thêm hover effect với Tailwind) */}
            {[
              {
                icon: "🛏️",
                title: "Sự Ấm Cúng",
                desc: "Thức dậy với ánh nang nhẹ nhàng qua khung cửa sổ lớn, nhìn ra thành phố tấp nập. Giường êm ái, ga trải giường cotton cao cấp mang lại giấc ngủ sâu và thư giãn.",
                features: [
                  "Cảm giác như ở nhà nhưng sang trọng hơn",
                  "View thành phố lung linh về đêm",
                ],
              },
              {
                icon: "🌅",
                title: "Khoảnh Khắc Hoàng Hôn",
                desc: "Ngồi trên ban công riêng với ly rượu vang, ngắm hoàng hôn dần buông xuống thành phố. Bồn tắm Jacuzzi ấm áp sau một ngày dài khám phá.",
                features: [
                  "Ban công riêng với view panorama",
                  "Jacuzzi thư giãn với tinh dầu thảo mộc",
                ],
              },
              {
                icon: "👑",
                title: "Đẳng Cấp Hoàng Gia",
                desc: "Không gian rộng rãi như một căn hộ cao cấp. Butler riêng phục vụ 24/7, từ việc chuẩn bị bữa sáng đến sắp xếp lịch trình cá nhân.",
                features: [
                  "Butler cá nhân chăm sóc tận tình",
                  "Không gian sống đẳng cấp quý tộc",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 h-full hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: COLORS["royal-gold"] }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="space-y-3 text-sm text-gray-400">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <span
                          style={{ color: COLORS["royal-gold"] }}
                          className="mr-2"
                        >
                          ✨
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Hành Trình Thư Giãn */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ color: COLORS["royal-navy"] }}
            >
              Hành Trình Thư Giãn
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-12"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
          </div>

          {/* Spa Experience */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Spa experience"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3
                  className="text-3xl font-semibold"
                  style={{ color: COLORS["royal-navy"] }}
                >
                  Thiền Định Tại Royal Spa
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bước vào không gian spa như lạc vào một thế giới khác. Âm
                  thanh của nước chảy,mùi hương tinh dầu thư giãn và đôi bàn
                  tay khéo léo của chuyên gia massage sẽ đưa bạn vào trạng thái
                  thiền định sâu lắng.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 italic">
                    "90 phút massage đá nóng khiến tôi cảm thấy như được tái
                    sinh. Căng thẳng tan biến, tâm hồn thanh thản."
                  </p>
                  <div
                    className="text-right mt-3 font-semibold"
                    style={{ color: COLORS["royal-gold"] }}
                  >
                    - Khách hàng VIP
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pool Experience */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3
                  className="text-3xl font-semibold"
                  style={{ color: COLORS["royal-navy"] }}
                >
                  Bơi Lội Giữa Mây Trời
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hồ bơi vô cực trên tầng thượng mang đến cảm giác như đang bơi
                 giữa mây trời. Buổi sáng sớm với tia nắng đầu tiên, hay buổi
                  tối với ánh đèn thành phố lung linh - mỗi thời điểm đều có vẻ
                  đẹp riêng.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 italic">
                    "Bơi lội lúc hoàng hôn với cocktail bên cạnh, nhìn thành phố
                   từ trên cao - đây chính là định nghĩa của luxury."
                  </p>
                  <div
                    className="text-right mt-3 font-semibold"
                    style={{ color: COLORS["royal-gold"] }}
                  >
                    - Travel Blogger
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pool experience"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Fitness Experience */}
          <div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fitness experience"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3
                  className="text-3xl font-semibold"
                  style={{ color: COLORS["royal-navy"] }}
                >
                  Năng Lượng Tích Cực
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Phòng gym với trang thiết bị hiện đại và view thành phố tuyệt
                  đẹp. Lớp yoga buổi sáng trên sân thượng với ánh nắng ấm áp,
                 hay session cardio với nhạc sôi động - mỗi bài tập đều trở
                  thành trải nghiệm thú vị.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 italic">
                    "Tập yoga lúc bình minh trên sân thượng, cảm giác bình yên
                    và tràn đầy năng lượng cho cả ngày."
                  </p>
                  <div
                    className="text-right mt-3 font-semibold"
                    style={{ color: COLORS["royal-gold"] }}
                  >
                    - Fitness Enthusiast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Trải Nghiệm Ẩm Thực */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ color: COLORS["royal-navy"] }}
            >
              Hành Trình Vị Giác
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-12"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mỗi bữa ăn là một câu chuyện, mỗi món ăn là một tác phẩm nghệ
              thuật
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Dining Cards (Sử dụng storyCardStyle) */}
            {[
              {
                icon: "🌅",
                title: "Bữa Sáng Hoàng Gia",
                desc: "Thức dậy với mùi hương bánh mì Pháp nướng tươi, cà phê Arabica thơm lừng. Buffet sáng không chỉ là bữa ăn mà còn là trải nghiệm văn hóa ẩm thực đa quốc gia.",
                quote: '"Phở Hà Nội đúng vị, bánh croissant như ở Paris"',
              },
              {
                icon: "🍽️",
                title: "Tiệc Tùng Đẳng Cấp",
                desc: "Bữa tối tại Le Royal Restaurant như một show diễn nghệ thuật. Từ cách bày trí món ăn đến dịch vụ phục vụ, mọi thứ đều hoàn hảo đến từng chi tiết.",
                quote:
                  '"Wagyu beef tan chảy trong miệng, wine pairing tuyệt vời"',
              },
              {
                icon: "🛎️",
                title: "Riêng Tư & Ấm Cúng",
                desc: "Room service không chỉ là giao đồ ăn. Bàn được trang trí như nhà hàng cao cấp, nến thơm, hoa tươi - bữa ăn riêng tư trở thành kỷ niệm lãng mạn.",
                quote:
                  '"Bữa tối candlelight trên ban công, view thành phố tuyệt đẹp"',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-lg"
                style={customStyles.storyCardStyle}
              >
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: COLORS["royal-navy"] }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="text-sm text-gray-600 italic">{item.quote}</div>
              </div>
            ))}
          </div>

          {/* Chef's Story */}
          <div
            className="rounded-2xl p-12 text-white"
            style={{ backgroundColor: COLORS["royal-navy"] }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light mb-6">
                  Câu Chuyện Từ Bếp Trưởng
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  "Mỗi món ăn tôi tạo ra đều chứa đựng một câu chuyện. Từ việc
                  tuyển chọn nguyên liệu tươi ngon nhất đến cách trình bày nghệ
                  thuật, tôi muốn thực khách không chỉ ăn mà còn cảm nhận được
                  tình yêu và đam mê trong từng hương vị."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Chef"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div
                      className="font-semibold"
                      style={{ color: COLORS["royal-gold"] }}
                    >
                      Chef Michel Dubois
                    </div>
                    <div className="text-sm text-gray-400">
                      Michelin Star Chef
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Chef cooking"
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Những Khoảnh Khắc Đặc Biệt */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ color: COLORS["royal-navy"] }}
            >
              Những Khoảnh Khắc Đặc Biệt
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-12"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gallery Cards (Sử dụng group-hover effect) */}
            {[
              {
                img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                title: "Yoga Bình Minh",
                time: "6:00 AM mỗi ngày",
              },
              {
                img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                title: "Cocktail Hoàng Hôn",
                time: "Sky Bar 18:00",
              },
              {
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                title: "Bữa Tối Riêng Tư",
                time: "Chef's Table",
              },
              {
                img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                title: "Liệu Pháp Đặc Biệt",
                time: "Couple Spa",
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Cảm Nhận Khách Hàng */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ color: COLORS["royal-navy"] }}
            >
              Cảm Nhận Chân Thực
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-12"
              style={{ backgroundColor: COLORS["royal-gold"] }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div
              className="rounded-2xl p-10 shadow-lg"
              style={customStyles.storyCardStyle}
            >
              <div className="flex items-center mb-8">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Guest"
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <h4
                    className="text-xl font-semibold"
                    style={{ color: COLORS["royal-navy"] }}
                  >
                    Chị Minh Anh
                  </h4>
                  <p className="text-gray-600">Doanh nhân, Hà Nội</p>
                  <div
                    className="text-lg"
                    style={{ color: COLORS["royal-gold"] }}
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                "Tôi đã ở rất nhiều khách sạn 5 sao, nhưng trải nghiệm tại đây
                thực sự khác biệt. Không chỉ là dịch vụ hoàn hảo, mà còn là cảm
                giác được quan tâm chân thành. Từ ly welcome drink đến việc nhớ
                tên tôi, mọi chi tiết đều khiến tôi cảm thấy đặc biệt."
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                "Buổi massage tại spa là trải nghiệm tuyệt vời nhất. Tôi đã ngủ
                thiếp đi và thức dậy với cảm giác như được tái sinh. Chắc chắn
                sẽ quay lại!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div
              className="rounded-2xl p-10 shadow-lg"
              style={customStyles.storyCardStyle}
            >
              <div className="flex items-center mb-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Guest"
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <h4
                    className="text-xl font-semibold"
                    style={{ color: COLORS["royal-navy"] }}
                  >
                    Anh Đức Minh
                  </h4>
                  <p className="text-gray-600">Kiến trúc sư, TP.HCM</p>
                  <div
                    className="text-lg"
                    style={{ color: COLORS["royal-gold"] }}
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                "Là một người yêu thích kiến trúc, tôi bị ấn tượng mạnh bởi
                thiết kế của khách sạn.Nhưng điều khiến tôi nhớ mãi là trải
                nghiệm bơi lội lúc hoàng hôn trên hồ bơi vô cực.Cảm giác như
                đang bay lơ lửng giữa trời và đất."
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                "Bữa tối tại Le Royal Restaurant không chỉ là ăn uống mà còn là
                một show nghệ thuật.Mỗi món ăn đều được trình bày như tác phẩm
                điêu khắc."
              </p>
            </div>
          </div>

          {/* Experience highlights */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "98%", label: "Khách hàng hài lòng" },
              { stat: "4.9/5", label: "Đánh giá trung bình" },
              { stat: "85%", label: "Khách quay lại" },
              { stat: "24/7", label: "Chăm sóc tận tâm" },
            ].map((item, index) => (
              <div key={index}>
                <div
                  className="text-4xl font-light mb-2"
                  style={{ color: COLORS["royal-gold"] }}
                >
                  {item.stat}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Kết Thúc Hành Trình */}
      <section
        className="py-24 px-6 text-white"
        style={{ backgroundColor: COLORS["royal-navy"] }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Hành Trình Của Bạn Bắt Đầu Từ Đây
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-12"
            style={{ backgroundColor: COLORS["royal-gold"] }}
          ></div>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed">
            Mỗi trải nghiệm tại Khách sạn Hoàng Gia đều được thiết kế để tạo nên
            những kỷ niệm khó quên. Hãy để chúng tôi viết nên câu chuyện riêng
            của bạn.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Features/CTA points */}
            {[
              {
                icon: "📞",
                title: "Tư Vấn Cá Nhân",
                desc: "Đội ngũ concierge sẵn sàng tư vấn trải nghiệm phù hợp nhất",
              },
              {
                icon: "🎯",
                title: "Trải Nghiệm Độc Quyền",
                desc: "Các gói trải nghiệm được thiết kế riêng theo sở thích",
              },
              {
                icon: "💎",
                title: "Kỷ Niệm Vĩnh Cửu",
                desc: "Những trải nghiệm sẽ trở thành kỷ niệm đẹp suốt đời",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: COLORS["royal-gold"] }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              className="px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: COLORS["royal-gold"],
                color: COLORS["royal-navy"],
              }}
            >
              Khám Phá Trải Nghiệm
            </button>
            <button
              className="border-2 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-royal-gold hover:text-royal-navy"
              style={{
                borderColor: COLORS["royal-gold"],
                color: COLORS["royal-gold"],
              }}
            >
              Liên Hệ Tư Vấn
            </button>
          </div>
        </div>
      </section>

      {/* ------------------- */}

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3
                className="text-2xl font-light mb-4"
                style={{ color: COLORS["royal-gold"] }}
              >
                KHÁCH SẠN HOÀNG GIA
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nơi mỗi khoảnh khắc đều trở thành kỷ niệm đẹp, mỗi trải nghiệm
                đều mang dấu ấn cá nhân riêng biệt.
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
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  style={{ color: COLORS["royal-gold"] }}
                >
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Trải Nghiệm</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Spa & Wellness",
                  "Fine Dining",
                  "Pool & Fitness",
                  "Events & Meetings",
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
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Đường Lê Lợi, Q1, TP.HCM</li>
                <li>+84 28 3822 5555</li>
                <li>experience@hotelhoanggia.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 Khách sạn Hoàng Gia. Mọi trải nghiệm đều được bảo vệ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoyalHotelExperience;
