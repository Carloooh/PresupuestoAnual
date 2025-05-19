import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <main
      className="flex-grow p-6 overflow-auto"
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="container mx-auto">{children}</div>
    </main>
  );
};

export default Content;
