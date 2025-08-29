const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto rounded-3xl px-6 py-16 md:py-20 lg:py-24 my-8 md:my-12 lg:my-16 bg-gray-900 text-white border border-white/20 shadow-2xl">
      <div className="flex flex-col justify-center items-center text-center max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Nhận Ưu Đãi Độc Quyền
        </h1>
        <div className="w-16 h-1 bg-white/30 rounded-full mt-4 mb-6"></div>
        <p className="text-base md:text-lg text-gray-500/90 leading-relaxed max-w-2xl">
          Đăng ký nhận bản tin để là người đầu tiên khám phá các cập nhật mới,
          ưu đãi hấp dẫn và cảm hứng du lịch.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-8 md:mt-10 w-full max-w-md sm:max-w-lg">
        <input
          type="email"
          className="flex-1 bg-white/10 px-5 py-4 border-2 border-white/20 rounded-xl outline-none focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all duration-200 text-white placeholder:text-gray-400 shadow-sm"
          placeholder="Nhập email của bạn"
        />
        <button className="flex items-center justify-center gap-2 group bg-black hover:bg-gray-800 px-6 md:px-8 py-4 rounded-xl text-white font-medium active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
          Đăng ký
          <svg
            className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>

      <div className="mt-8 md:mt-10 text-center">
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
          Bằng việc đăng ký, bạn đồng ý với{" "}
          <span className="text-gray-400 hover:text-white cursor-pointer underline decoration-gray-600 hover:decoration-white transition-colors">
            Chính sách Bảo mật
          </span>{" "}
          và cho phép chúng tôi gửi thông tin cập nhật.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
