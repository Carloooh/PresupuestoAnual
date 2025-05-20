"use client";

import SidebarHeader from "./Header";
import SidebarNavigation from "./Navigation";
import SidebarUser from "./footer/User";
import SidebarFooter from "./footer/Footer";
import { IconLayoutSidebarRightExpand } from "@tabler/icons-react";

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isMobile, isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      {/* Overlay para dispositivos móviles */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-20 bg-[#222424] transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSidebar}
        >
          <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer">
            <IconLayoutSidebarRightExpand size={24} className="text-white" />
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${isMobile ? "fixed inset-y-0 left-0 z-30" : "relative"} 
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
          w-64 bg-[#f5f7f9] border-gray-200 
          transition-all duration-500 ease-in-out
          flex flex-col h-full shadow-lg
        `}
      >
        <SidebarHeader />
        <div className="flex-grow overflow-y-auto">
          <SidebarNavigation />
        </div>
        <SidebarUser />
        <SidebarFooter />
      </aside>
    </>
  );
};

export default Sidebar;
