import Image from "next/image";
import rightArrow from "@/public/icons/btn-right-arrow.svg";
import project from "@/public/work/project.svg";
import circle from "@/public/work/circle.png"


export default function WorkMangement() {
  return (
    <section className="bg-background text-foreground">
      <div className="px-4 py-20 max-w-370 mx-auto flex flex-col gap-25">
        {/* Project Management */}
        <div className="flex flex-col gap-15">
          {/* Right Content */}
          <div className=" flex flex-col gap-15">
            {/* Text Block */}
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-4xl text-center">
                Project Management
              </h2>
              <p className="text-lg text-center">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center">
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
          <div className="">
            <Image
              src={project}
              alt="Project"
              className="w-full object-contain aspect-286/177"
            />
          </div>
        </div>

        {/* Work Together */}
        <div className="flex flex-col gap-15">
          {/* Right Content */}
          <div className=" flex flex-col gap-15">
            {/* Text Block */}
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-4xl text-center">Work Together</h2>
              <p className="text-lg text-center">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center">
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
          <div className="">
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
