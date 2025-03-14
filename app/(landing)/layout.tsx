import { FooterLayout } from "@/layouts/FooterLayout";
import { HeaderLayout } from "@/layouts/HeaderLayout";
import Carrito from "../../components/public/utils/Carrito";
import React, { ReactNode } from "react";

/*
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})
*/
/*
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <HeaderLayout />
      <Carrito />
      {children}
      <FooterLayout />
    </>
  );
}
