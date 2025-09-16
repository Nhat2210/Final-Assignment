// import User from "../models/User.js";
// import { Webhook } from "svix";

// const clerkWebhooks = async (req, res) => {
//   try {
//     // create a Svix instance with clerk webhook secret
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//     const headers = {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     };
//     // verify the webhook
//     await whook.verify(JSON.stringify(req.body), headers);

//     //getting data from request body
//     const { data, type } = req.body;

//     const userData = {
//       _id: data.id,
//       email: data.email_addresses[0].email_address,
//       username: data.first_name + " " + data.last_name,
//       image: data.image_url,
//     };
//     // Switch case for different event types
//     switch (type) {
//       case "user.created":
//         await User.create(userData);
//         break;
//       case "user.updated":
//         await User.findByIdAndUpdate(userData._id, userData);
//         break;
//       case "user.deleted":
//         await User.findByIdAndDelete(userData._id);
//         break;
//       default:
//         break;
//     }
//     res.json({ success: true, message: "Webhook received" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default clerkWebhooks;

// controllers/clerkWebhooks.js
const clerkWebhooks = (req, res) => {
  console.log("WEBHOOK CHẠY RỒI!");
  res.json({ message: "OK" });
};

export default clerkWebhooks;
