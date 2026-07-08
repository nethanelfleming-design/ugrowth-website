import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Difference } from "@/components/sections/Difference";
import { Process } from "@/components/sections/Process";
import { Impact } from "@/components/sections/Impact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { Studio } from "@/components/sections/Studio";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Work />
      <Services />
      <Difference />
      <Process />
      <Impact />
      <Testimonials />
      <Industries />
      <Studio />
      <Faq />
      <Cta />
    </>
  );
}
