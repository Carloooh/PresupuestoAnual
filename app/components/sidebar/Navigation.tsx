import Link from "next/link";
import { useState } from "react";
import { IconCategory } from "@tabler/icons-react";
import { IconBuildings } from "@tabler/icons-react";
import { IconGraph } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconKeyframes } from "@tabler/icons-react";

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
    <div className="pt-1">
      {/* Elemento Dashboard */}
      <Link href="/dashboard" className="block">
        <div className="flex items-center px-4 pb-3 text-[#0a5768] hover:bg-white rounded-lg mx-2">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <IconGraph />
          </div>
          <span className="text-md md:text-lg">Dashboard</span>
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
              <IconBuildings />
            </div>
            <span className="text-md md:text-lg">Direcciones</span>
          </div>
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
              <IconKeyframes />
            </div>
            <span className="text-md md:text-lg">Áreas de Gestión</span>
          </div>
        </div>
      </div>

      {/* Elemento Unidades */}
      <Link href="/unidades" className="block">
        <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-[#0a5768] rounded-lg mx-2">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <IconCategory />
          </div>
          <span className="text-md md:text-lg">Unidades</span>
        </div>
      </Link>

      {/* Elemento Usuarios */}
      <Link href="/usuarios" className="block">
        <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-[#0a5768] rounded-lg mx-2">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <IconUsersGroup />
          </div>
          <span className="text-md md:text-lg">Usuarios</span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarNavigation;
