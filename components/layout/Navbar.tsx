import logo from "@/public/icons/whitepace-logo.svg"
import Image from "next/image";
import menu from "@/public/icons/Btn.svg"

export default function Navbar() {
  return (
    <header className="bg-primary-1">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={25.96} height={20.35} /> <span className="font-bold text-xl text-background">whitepace</span>
        </div>

        <Image src={menu} width={42} height={24} alt="Menu Button" />

      </div>
    </header>
  );
}
