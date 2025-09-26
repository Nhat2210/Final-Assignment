import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { AppProvider } from "./context/AppContext.jsx";

const localization = {
  userButton: {
    action__manageAccount: "Quản lý tài khoản",
    action__signOut: "Đăng xuất",
    action__addAccount: "Thêm tài khoản",
  },
  userProfile: {
    navbar: {
      title: "Tài khoản",
      account: "Tài khoản",
      security: "Bảo mật",
    },
  },
};
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} localization={localization}>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
