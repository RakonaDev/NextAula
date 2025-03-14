/* eslint-disable @next/next/no-img-element */
"use client";
import {
  BsChevronRight,
  BsEnvelope,
  BsFacebook,
  BsPhoneFill,
  BsYoutube,
} from "react-icons/bs";
import { logo_white } from "../../shared/images";
import { BiSolidMapPin } from "react-icons/bi";
import { JSX } from "react";
import Link from "next/link";
import { ContentMain } from "./ContentMain";

export const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="px-8 bg-primary-main text-white-main lg:px-20">
        <ContentMain className="pt-20">
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="text-center">
              <img
                src={logo_white.src}
                alt="CENCAPP Logo"
                className="mx-auto w-[100px]"
              />
              <p className="mt-4 text-sm lg:text-base">
                Convertimos ideas en realidades, construyendo un mañana sólido,
                un proyecto a la vez
              </p>
              <div className="flex justify-center mt-4">
                <a
                  title="facebook:CENCAPP"
                  href="https://www.facebook.com/profile.php?id=100083328371374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <BsFacebook className="text-2xl" />
                </a>
                <a
                  href="https://www.youtube.com/@cencapp"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <BsYoutube className="text-2xl" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="mb-4 text-xl font-semibold text-center uppercase lg:text-2xl lg:text-left">
                Capacitaciones
              </h5>
              <ul className="text-sm lg:text-base">
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">Estructuras</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">
                    Infraestructura en edificaciones
                  </Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">
                    Infraestructura en obras viales
                  </Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">
                    Infraestructura de obras de saneamiento
                  </Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">BIM</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">Construcción</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">Geotecnia</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">Topografía y fotogametría</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-xl font-semibold text-center uppercase lg:text-2xl lg:text-left">
                Enlaces
              </h5>
              <ul className="text-sm lg:text-base">
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/nosotros">Nosotros</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/capacitaciones">Capacitaciones</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/inscripcion">Inscripción</Link>
                </li>
                <li>
                  <BsChevronRight className="inline-block mr-2" />
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-xl font-semibold text-center uppercase lg:text-2xl lg:text-left">
                Contáctanos
              </h5>
              <ul className="text-sm lg:text-base">
                <li>
                  <BiSolidMapPin className="inline-block mr-2" />
                  <Link href="#">Psje. Matiza Rimachi Cuadra 3</Link>
                </li>
                <li>
                  <BsPhoneFill className="inline-block mr-2" />
                  <a href="tel:+519730044253">(+51) 973 044 253</a>
                </li>
                <li>
                  <BsEnvelope className="inline-block mr-2" />
                  <a href="mailto:ventas@cencapperu.com">
                    ventas@cencapperu.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-6 border-t border-gray-600">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-2 text-sm md:mb-0">
                © 2025 <span>CENCAPP.</span> Todos los derechos reservados
              </div>
              <div className="flex items-center text-sm">
                Design by:{" "}
                <a href="https://logosperu.com.pe/" className="ml-2">
                  <img src={'/assets/images/logo/lp.png'} alt="Logos Perú" width={20} />
                </a>
              </div>
            </div>
          </div>
        </ContentMain>
      </footer>
    </>
  );
};
