import Header from "@/components/global/HomeComponents/Header";
import Hero from "@/components/global/HomeComponents/Hero";
import ParticleBackground from "@/components/global/HomeComponents/Particles";



export default function Home() {
  return (
    <div className="md:px-8 lg:px-10 xl:px-20 ">
      <ParticleBackground>
      </ParticleBackground>
      <Header></Header>
      <Hero>


      </Hero>
    </div>
  );
}
