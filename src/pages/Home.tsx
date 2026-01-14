// Home page
import { Navbar } from "../components/common/Navbar";
import { AboutSection } from "../components/home/AboutSection";
import { ComoTrabajamos } from "../components/home/ComoTrabajamos";
import { ContactoResumen } from "../components/common/ContactoResumen";
import { HeroCTA } from "../components/home/HeroCTA";
import { OpinionesPreview } from "../components/common/OpinionesPreview";
import { PreviewIA } from "../components/home/PreviewIA";
import { PreviewServicios } from "../components/home/PreviewServicios";
import { useSEO } from "../hooks/useSEO";

export const Home = () => {
  useSEO({
    title: "Inicio",
    description:
      "ENC Reformas ofrece servicios profesionales de pintura, carpintería y reparaciones. Reformas integrales con garantía y acabados de calidad. Solicita tu presupuesto gratuito.",
    keywords: "reformas, pintura profesional, carpintería, reparaciones, presupuesto gratuito",
    url: "/",
    image: "/images/servicios/pintura/cover.png",
  });

  return (
    <>
      <HeroCTA />
      <AboutSection />
      <PreviewServicios />
      <ComoTrabajamos />
      <PreviewIA />
      <OpinionesPreview />
      <ContactoResumen />

      <Navbar/>
      {/* el resto de secciones: AboutSection, PreviewServicios, etc. */}
    </>
  );
};
