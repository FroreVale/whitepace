import logo from "@/public/icons/whitepace-logo.svg";
import Image from "next/image";
import menu from "@/public/icons/Btn.svg";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import downArrow from "@/public/icons/down-arrow-white.svg";

const navLinks = ["Products", "Solutions", "Resources", "Pricing"];

export default function Navbar() {
  return (
    <header className="bg-primary-1 " >
      <div className="flex justify-between items-center p-4 max-w-370 mx-auto">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={25.96} height={20.35} />{" "}
          <span className="font-bold text-xl text-background">whitepace</span>
        </div>

        <div className="flex items-center gap-6">

            <nav className="hidden xl:block text-background">
                <ul className="flex items-center gap-8">
                    {navLinks.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span>{item}</span>
                            <Image src={downArrow} width={29} height={24} alt="Down Arrow" />
                        </li>
                    ))}
                </ul>
            </nav>

          <button className="hidden lg:block bg-secondary-1 rounded-lg px-10 py-4 text-primary-1">
            Login
          </button>
          <button className="hidden lg:flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background">
            <span>Try Whitepace free</span>{" "}
            <Image src={rightArrow} width={10} height={10} alt="Right Arrow" />
          </button>
          <Image src={menu} width={42} height={24} alt="Menu Button" className="xl:hidden" />
        </div>
      </div>
    </header>
  );
}
