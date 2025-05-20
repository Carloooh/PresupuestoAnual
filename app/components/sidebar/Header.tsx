import Image from "next/image";

const SidebarHeader = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex items-center justify-center mb-4">
        <Image
          src="/logo-escudo.png"
          alt="Logo"
          width={34}
          height={34}
          className="mr-2"
        />
        <h1 className="text-[#0a5768] font-semibold text-xl pb-1">
          Presupuesto Anual
        </h1>
      </div>
      <div className="w-6/7 h-px bg-[#e1e3e5]"></div>
    </div>
  );
};

export default SidebarHeader;
