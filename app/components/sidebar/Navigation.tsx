import Link from "next/link";
import { useState } from "react";

const SidebarNavigation = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };

  return (
    <div className="pt-2">
      {/* Elemento Dashboard */}
      <Link href="/dashboard" className="block">
        <div className="flex items-center px-4 py-3 text-[#0a5768] hover:bg-white rounded-lg mx-2">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="font-medium">Dashboard</span>
        </div>
      </Link>

      {/* Elemento Usuarios */}
      <Link href="/usuarios" className="block">
        <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-[#0a5768] rounded-lg mx-2">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <span className="font-medium">Usuarios</span>
        </div>
      </Link>

      {/* Elemento Direcciones */}
      <div className="block">
        <div
          className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-white hover:text-[#0a5768] rounded-lg mx-2 cursor-pointer"
          onClick={() => toggleItem("direcciones")}
        >
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium">Direcciones</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-200 ${
              expandedItems.includes("direcciones")
                ? "transform rotate-180"
                : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Subelementos de Direcciones */}
        <div
          className={`pl-12 ${
            expandedItems.includes("direcciones") ? "block" : "hidden"
          }`}
        >
          <Link
            href="/direcciones/lista"
            className="block py-2 text-gray-500 hover:text-[#0a5768]"
          >
            Lista de Direcciones
          </Link>
          <Link
            href="/direcciones/nueva"
            className="block py-2 text-gray-500 hover:text-[#0a5768]"
          >
            Nueva Dirección
          </Link>
        </div>
      </div>

      {/* Elemento Áreas de Gestión */}
      <div className="block">
        <div
          className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-white hover:text-[#0a5768] rounded-lg mx-2 cursor-pointer"
          onClick={() => toggleItem("areas")}
        >
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <span className="font-medium">Áreas de Gestión</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-200 ${
              expandedItems.includes("areas") ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Subelementos de Áreas */}
        <div
          className={`pl-12 ${
            expandedItems.includes("areas") ? "block" : "hidden"
          }`}
        >
          <Link
            href="/areas/lista"
            className="block py-2 text-gray-500 hover:text-[#0a5768]"
          >
            Lista de Áreas
          </Link>
          <Link
            href="/areas/nueva"
            className="block py-2 text-gray-500 hover:text-[#0a5768]"
          >
            Nueva Área
          </Link>
        </div>
      </div>

      {/* Elemento Unidades */}
      <Link href="/unidades" className="block">
        <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-[#0a5768] rounded-lg mx-2">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <span className="font-medium">Unidades</span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarNavigation;
