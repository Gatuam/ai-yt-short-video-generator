
import Header from "../components/global/homeComponent/Header";
import Hero from "../components/global/homeComponent/Hero";

export default function Home() {
  return (
    <div className="md:px-8 lg:px-10 xl:px-20">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}
