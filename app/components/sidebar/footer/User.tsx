"use client";

import { useState, useRef, useEffect } from "react";
import { IconLogout2 } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react";
import { IconChevronUp } from "@tabler/icons-react";

const SidebarUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Datos de ejemplo del usuario
  const user = {
    name: "Young Alaska",
    email: "alskayng@gmail.com",
    area: "Finanzas",
    direccion: "Dirección de Administración",
    role: "Administrador",
  };

  // Obtener iniciales para el avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el dropdown cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-4 pt-3" ref={dropdownRef}>
      <div className="w-full flex justify-center mb-3">
        <div className="w-[90%] h-px bg-[#e1e3e5]"></div>
      </div>
      <div
        className="bg-white rounded-lg shadow-sm mx-auto w-[90%] overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "300px" : "60px" }}
      >
        <div
          className="p-3 cursor-pointer flex items-center"
          onClick={toggleDropdown}
        >
          <div className="relative">
            {/* Avatar con iniciales */}
            <div className="w-8 h-8 rounded-full bg-[#f5f7f9] flex items-center justify-center text-[#0a5768] font-medium text-sm">
              {getInitials(user.name)}
            </div>
          </div>

          <div className="ml-3 flex-grow">
            <div className="text-sm font-medium text-gray-700">{user.name}</div>
            <div className="text-xs font-medium text-gray-700">{user.role}</div>
          </div>

          {isOpen ? (
            <IconChevronUp viewBox="20 20" className="text-[#2A737D]" />
          ) : (
            <IconChevronDown viewBox="20 20" className="text-[#2A737D]" />
          )}
        </div>

        {/* Contenido expandible */}
        <div className="px-3 pb-3 border-t border-gray-100">
          <div className="pt-3">
            <div className="text-xs text-gray-500 mb-1">Área</div>
            <div className="text-sm font-medium text-[#025964]">
              {user.area}
            </div>

            <div className="text-xs text-gray-500 mt-2 mb-1">Dirección</div>
            <div className="text-sm font-medium text-[#025964]">
              {user.direccion}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="/perfil"
              className="flex items-center px-3 py-2 text-sm text-[#0a5768] bg-[#f5f7f9] hover:bg-[#e1e3e5] rounded-md transition-colors duration-200"
            >
              <IconUser size={18} className="mr-2" />
              <span className="ml-1">Ver perfil</span>
            </a>
            <a
              href="/logout"
              className="flex items-center px-3 py-2 text-sm text-white bg-[#2a737d] hover:bg-[#1e5359] rounded-md transition-colors duration-200"
            >
              <IconLogout2 size={18} className="mr-2" />
              <span className="ml-1">Cerrar sesión</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarUser;
