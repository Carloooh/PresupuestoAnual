import Image from "next/image";

const SidebarFooter = () => {
  return (
    <div className="px-4 py-3">
      <div className="w-[90%] h-px bg-[#e1e3e5] mb-3"></div>
      <div className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Escudo Municipal"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="text-xs text-gray-600">Municipalidad El Quisco</span>
      </div>
    </div>
  );
};

export default SidebarFooter;
