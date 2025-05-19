"use client";

import { useState } from "react";
import LoginForm from "./components/login/login-form/LoginForm";
import LoginImage from "./components/login/login-image/LoginImage";
import ResetPassword from "./components/login/reset-password/ResetPassword";
import LoginHeader from "./components/login/login-header/LoginHeader";
import LoginFooter from "./components/login/login-footer/LoginFooter";

export default function Home() {
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleResetPasswordClick = () => {
    setShowResetPassword(true);
  };

  const handleCancelReset = () => {
    setShowResetPassword(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e1e5ea] p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#F5F7F9] rounded-xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8 flex flex-col h-[600px]">
          <LoginHeader />

          <div className="flex-grow flex flex-col justify-center">
            <div className="h-[320px] flex items-start justify-center">
              {showResetPassword ? (
                <ResetPassword onCancel={handleCancelReset} />
              ) : (
                <LoginForm onResetPasswordClick={handleResetPasswordClick} />
              )}
            </div>
          </div>

          <LoginFooter />
        </div>

        <div className="hidden md:block md:w-1/2">
          <LoginImage />
        </div>
      </div>
    </div>
  );
}
