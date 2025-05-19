"use client";

import SidebarHeader from "./Header";
import SidebarNavigation from "./Navigation";
import SidebarUser from "./user/Placeholder";

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
        />
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
      </aside>
    </>
  );
};

export default Sidebar;
