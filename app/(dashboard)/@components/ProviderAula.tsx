"use client";

import { AulaProvider } from "@/context/AulaContext";
import { SideBarAula } from "./estructura/SideBarAula";
import { HeaderAula } from "./estructura/HeaderAula";
import { useEffect, useState } from "react";

export function ProviderAula({ children }: { children: React.ReactNode }) {
  const [ocultarSideBar, setOcultarSideBar] = useState<boolean>(false);
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AulaProvider>
      <div className="flex">
        <SideBarAula
          showMenu={menuShow}
          ocultarSideBar={ocultarSideBar}
          setOcultarSideBar={setOcultarSideBar}
          setShowMenu={setMenuShow}
        />
        <div
          className={`${
            ocultarSideBar
              ? "w-full lg:w-[calc(100%-80px)]"
              : "w-full lg:w-[calc(100%-256px)]"
          } bg-secondary-50  transition-all duration-500 ease-out`}
        >
          <HeaderAula
            scrolled={scrolled}
            setShowMenu={setMenuShow}
            showMenu={menuShow}
          />
          <div
            className={`w-full p-4 md:p-6 h-[calc(100dvh-90px)] overflow-y-auto ${
              scrolled ? "mt-20" : ""
            } scroll_layout`}
          >
            <div className="w-full bg-white-main p-1 sm:p-2 md:p-4 rounded-main">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AulaProvider>
  );
}
