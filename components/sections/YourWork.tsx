import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import dash from "@/public/work/dash.png";

export default function YourWork() {
  return (
    <section className="bg-primary-1 text-background ">
      {/* Right Content */}
      <div className="px-4 py-25 max-w-370 mx-auto flex flex-col gap-15 flex-1 ">
        {/* Text Block */}
        <div className="flex flex-col gap-10 items-center">
          <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center  w-fit">
            Your work, everywhere you are
            <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 lg:left-0 h-10 w-63">
              {" "}
              <Image src={dash} alt="Dash" />{" "}
            </div>
          </h2>
          <p className="text-lg text-center ">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center ">
          <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
            <span>Try TaskKey</span>{" "}
            <Image src={rightArrow} width={10} height={10} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
