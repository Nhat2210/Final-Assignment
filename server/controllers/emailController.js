import transporter from "../config/nodemailer.js";

export const sendNewsletter = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Vui lòng nhập email" });

  try {
    await transporter.sendMail({
      from: '"Khách sạn Nhật Linh" anhnhat22102003@gmail.com',
      to: email,
      subject: "Cảm ơn bạn đã đăng ký Newsletter",
      html: `
        <h2>Xin chào!</h2>
        <p>Cảm ơn bạn đã đăng ký nhận bản tin của <strong>Khách sạn Nhật Linh</strong>.</p>
        <p>Bạn sẽ sớm nhận được các ưu đãi và cập nhật mới nhất.</p>
      `,
    });

    res.json({ message: "Đăng ký thành công, vui lòng kiểm tra email." });
  } catch (err) {
    console.error("❌ Lỗi gửi mail:", err);
    res.status(500).json({ message: "Gửi email thất bại" });
  }
};
