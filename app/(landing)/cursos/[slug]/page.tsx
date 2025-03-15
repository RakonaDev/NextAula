/* eslint-disable @typescript-eslint/no-explicit-any */
import CardCurso from "../../../../components/public/curso/CardCurso";
import Banner from "../../../../components/public/Banner";
import { getServerSideProps } from "@/server/getServerSideProps";
import { ContentMain } from "../../../../components/public/estructura/ContentMain";
import { SeoCursos } from "@/layouts/seo/SeoCursos";
import { Global } from "@/helper/Global";

export async function generateMetadata({ params }: { params: any }) {
  const metadata = await SeoCursos({ params });
  return metadata;
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const dataCategorias = await getServerSideProps(`categoriasBuscar/${slug}`);
  return (
    <>
      <Banner
        imagen={`${Global.urlImages}${dataCategorias.categoria.url_imagen}`}
        titulo={dataCategorias.nombre}
      />
      <div className="w-full">
        <ContentMain className="py-20">
          <div className="w-full mb-10">
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-primary-main">
              {dataCategorias.categoria.nombre}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full">
              {dataCategorias.categoria.cursos?.map((curso: any) => {
                return (
                  <div className="" key={curso.id}>
                    <CardCurso
                      id={String(curso.id)}
                      horas={String(curso.horas)}
                      img={`${Global.urlImages}${curso.imagen}`}
                      precio={String(curso.precio)}
                      titulo={curso.nombre}
                    />
                  </div>
                );
              })}
              {/* curso.cursos.map((curso: any, index: number) => (
            <div className="gridCursos__main__item" key={index}>
              <CardCurso
                id={String(index)}
                horas={curso.horas}
                img={curso.img}
                precio={curso.precio}
                titulo={curso.titulo}
              />
            </div>
          )) */}
            </div>
          </div>
        </ContentMain>
      </div>
    </>
  );
}
