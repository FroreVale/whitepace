import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import apps from "@/public/apps/Apps.png"

export default function Apps() {
  return (
    <section className="bg-primary-1 bg-[url('/apps/Element-1.png')] sm:bg-[url('/apps/Element-2.png')] lg:bg-[url('/apps/Element-3.png')] xl:bg-[url('/apps/Element-4.png')] 2xl:bg-[url('/apps/Element-5.png')] bg-center bg-cover">
      <div className="px-4 py-20 lg:py-35 lg:px-8 max-w-370 mx-auto ">
        <div className="flex flex-col-reverse gap-25 lg:flex-row lg:gap-20 items-center">
          <div className="flex flex-col lg:flex-1 gap-15 items-center lg:items-start">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-center font-bold text-4xl md:text-[54px] lg:text-start text-background">
                Work with Your Favorite Apps Using whitepace
              </h1>
              <p className="text-center text-lg text-background lg:text-start">
                Whitepace teams up with your favorite software. Integrate with
                over 1000+ apps with Zapier to have all the tools you need for
                your project success.
              </p>
            </div>
            <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
              <span>Read more</span>{" "}
              <Image
                src={rightArrow}
                width={10}
                height={10}
                alt="Right Arrow"
              />
            </button>
          </div>

          <div className="lg:flex-1 flex justify-center">
            <Image
              src={apps}
              alt="Apps"
              className="max-w-137.75 object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
