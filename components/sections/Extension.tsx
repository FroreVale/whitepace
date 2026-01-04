import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import dash from "@/public/work/dash.png";
import app from "@/public/extension/app.svg";


export default function Extension() {
    return(
        <section className="bg-primary-1 text-background ">

        {/* Project Management */}
        <div className="px-4 py-20 max-w-370 mx-auto flex flex-col gap-15 lg:flex-row">

          {/* Right Content */}
          <div className=" flex flex-col gap-15 flex-1 lg:justify-center">
            {/* Text Block */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center lg:text-start w-fit">
                Use as Extension
                <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 lg:left-0 h-10 w-63">
                  {" "}
                  <Image src={dash} alt="Dash" />{" "}
                </div>
              </h2>
              <p className="text-lg text-center lg:text-start">
               Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
                <span>Let&apos;s go</span>{" "}
                <Image
                  src={rightArrow}
                  width={10}
                  height={10}
                  alt="Right Arrow"
                />
              </button>
            </div>
          </div>

          {/* Left Content */}
          <div className="flex-1">
            <Image
              src={app}
              alt="App "
              className="w-full object-contain aspect-286/177"
            />
          </div>


      </div>
    </section>
    );
}