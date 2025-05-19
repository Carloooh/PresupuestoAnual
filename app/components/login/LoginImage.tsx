import Image from "next/image";

const LoginImage = () => {
  return (
    <div
      className="relative h-full w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/arbol.jpg')",
        backgroundPosition: "center",
        backgroundSize: "auto",
      }}
    ></div>
  );
};

export default LoginImage;
