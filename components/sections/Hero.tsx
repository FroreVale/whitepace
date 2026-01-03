import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import businessIllustration from "@/public/business-1.svg";

export default function Hero() {
  return (
    <section className="bg-primary-1 bg-[url('/element.png')] bg-center bg-cover">

      <div className="px-4 py-20 max-w-370 mx-auto ">

        <div className="flex flex-col gap-25 items-center">

          <div className="flex flex-col gap-15 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-center font-bold text-4xl md:text-[54px] text-background">
                Get More Done with whitepace
              </h1>
              <p className="text-center text-lg text-background">
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

          <Image
            src={businessIllustration}
            alt="Business Meeting Illustration"
          />
        </div>

      </div>

    </section>
  );
}
