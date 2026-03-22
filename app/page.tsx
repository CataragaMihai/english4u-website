import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Model from "@/components/Model";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Model />
        <Impact />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}
