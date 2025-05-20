"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import { IconLayoutSidebarLeftExpand } from "@tabler/icons-react";

export default function DashboardHome() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(!isMobile);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[#ffffff]">
      <Sidebar
        isMobile={isMobile}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex flex-col flex-grow">
        {isMobile && (
          <header className="h-8 flex items-center px-6 mt-4">
            <button
              onClick={toggleSidebar}
              className="mr-4 text-gray-600 focus:outline-none"
            >
              <IconLayoutSidebarLeftExpand />
            </button>
          </header>
        )}

        <Content>
          <div className="bg-white rounded-lg shadow pt-3 px-6 pb-3 md:p-6">
            <h2 className="text-lg font-medium mb-4">
              Bienvenido al Sistema de Presupuesto Anual
            </h2>
            <Link href="/" className="text-blue-600 hover:underline">
              Cerrar sesión
            </Link>
          </div>
        </Content>
      </div>
    </div>
  );
}
