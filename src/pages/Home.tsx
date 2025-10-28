// Home page
import { Navbar } from "../components/common/Navbar";
import { AboutSection } from "../components/home/AboutSection";
import { ComoTrabajamos } from "../components/home/ComoTrabajamos";
import { ContactoResumen } from "../components/common/ContactoResumen";
import { HeroCTA } from "../components/home/HeroCTA";
import { OpinionesPreview } from "../components/common/OpinionesPreview";
import { PreviewIA } from "../components/home/PreviewIA";
import { PreviewServicios } from "../components/home/PreviewServicios";

export const Home = () => {
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
