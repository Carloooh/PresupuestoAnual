import type { Metadata } from "next";
import "./globals.css";
import ToasterClient from "@/app/components/ToasterClient";

export const metadata: Metadata = {
  title: "Presupuesto Anual | El Quisco",
  description:
    "Página para la gestión de presupuestos anuales de la comuna El Quisco, incluyendo gestión interna y programas de todas las direcciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToasterClient />
      </body>
    </html>
  );
}
