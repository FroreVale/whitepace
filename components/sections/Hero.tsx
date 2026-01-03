import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import businessIllustration from "@/public/business-1.svg";

export default function Hero() {
  return (
    <section className="bg-primary-1 bg-[url('/element-1.png')] sm:bg-[url('/element-2.png')] lg:bg-[url('/element-3.png')] bg-center bg-cover">
      <div className="px-4 py-20 lg:py-35 lg:px-8 max-w-370 mx-auto ">
        <div className="flex flex-col gap-25 lg:flex-row lg:gap-20 items-center">

          <div className="flex flex-col lg:flex-1 gap-15 items-center lg:items-start">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-center font-bold text-4xl md:text-[54px] lg:text-start text-background">
                Get More Done with whitepace
              </h1>
              <p className="text-center text-lg text-background lg:text-start">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
              <span>Try TaskKey free</span>{" "}
              <Image
                src={rightArrow}
                width={10}
                height={10}
                alt="Right Arrow"
              />
            </button>
          </div>

          <div className="lg:flex-1">
            <Image
              src={businessIllustration}
              alt="Business Meeting Illustration"
              className="max-w-137.75 object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
