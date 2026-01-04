import Navbar from "@/components/layout/Navbar";
import Extension from "@/components/sections/Extension";
import Hero from "@/components/sections/Hero";
import WorkMangement from "@/components/sections/WorkManagement";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkMangement />
        <Extension />
      </main>
    </>
  );
}
