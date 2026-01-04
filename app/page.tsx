import Navbar from "@/components/layout/Navbar";
import Customise from "@/components/sections/Customise";
import Extension from "@/components/sections/Extension";
import Hero from "@/components/sections/Hero";
import WorkMangement from "@/components/sections/WorkManagement";
import Pricing from "@/components/sections/Pricing";
import YourWork from "@/components/sections/YourWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkMangement />
        <Extension />
        <Customise />
        <Pricing />
        <YourWork />
      </main>
    </>
  );
}
