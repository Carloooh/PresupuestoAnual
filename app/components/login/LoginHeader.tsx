import Image from "next/image";

const LoginHeader = () => {
  return (
    <div className="flex flex-col items-center justify-around mb-8">
      <div className="flex flex-row items-center text-start">
        <div className="mb-2">
          <Image
            src="/logo-escudo.png"
            alt="Escudo Municipal"
            width={50}
            height={50}
          />
        </div>
        <h1 className="text-xl lg:text-2xl font-semibold text-[#025964] pl-2 lg:pl-3">
          Municipalidad El Quisco
        </h1>
      </div>
      <h2 className="text-xl font-semibold text-[#393b3d] mt-10">
        Gestor de Presupuesto Anual
      </h2>
    </div>
  );
};

export default LoginHeader;
