import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import project from "@/public/work/project.svg";
import circle from "@/public/work/circle.png";
import dash from "@/public/work/dash.png";

export default function WorkMangement() {
  return (
    <section className="bg-background text-foreground">
      <div className="px-4 py-20 max-w-370 mx-auto flex flex-col gap-25">
        {/* Project Management */}
        <div className="flex flex-col gap-15 lg:flex-row">

          {/* Right Content */}
          <div className=" flex flex-col gap-15 flex-1 lg:justify-center">
            {/* Text Block */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center lg:text-start w-fit">
                Project Management
                <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 lg:left-0 h-10 w-63">
                  {" "}
                  <Image src={dash} alt="Dash" />{" "}
                </div>
              </h2>
              <p className="text-lg text-center lg:text-start">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
                <span>Get started</span>{" "}
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
              src={project}
              alt="Project"
              className="w-full object-contain aspect-286/177"
            />
          </div>
        </div>

        {/* Work Together */}
        <div className="flex flex-col lg:flex-row-reverse gap-15">
          {/* Right Content */}
          <div className=" flex flex-col justify-center gap-15 lg:flex-1">
            {/* Text Block */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center w-fit">
                Work Together
                <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 h-10 w-63">
                  {" "}
                  <Image src={dash} alt="Dash" />{" "}
                </div>
              </h2>
              <p className="text-lg text-center lg:text-start">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
                <span>Try it now</span>{" "}
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
          <div className="sm:max-w-113 mx-auto lg:max-w-none lg:flex-1">
            <Image
              src={circle}
              alt="Circle"
              className="w-full object-contain aspect-710/661"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
