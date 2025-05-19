"use client";

import { useState } from "react";
import LoginForm from "./components/login/LoginForm";
import LoginImage from "./components/login/LoginImage";
import ResetPassword from "./components/login/ResetPassword";
import LoginHeader from "./components/login/LoginHeader";
import LoginFooter from "./components/login/LoginFooter";

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
            <div className="h-[320px] flex items-start pt-2 justify-center relative">
              <div
                className={`absolute w-full transition-opacity duration-300 ease-in-out ${
                  showResetPassword
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <LoginForm onResetPasswordClick={handleResetPasswordClick} />
              </div>
              <div
                className={`absolute w-full transition-opacity duration-300 ease-in-out ${
                  showResetPassword
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <ResetPassword onCancel={handleCancelReset} />
              </div>
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
