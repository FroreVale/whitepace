import Image from "next/image";
import dash from "@/public/work/dash.png";
import apple from "@/public/icons/apple-black-logo.svg"
import microsoft from "@/public/sponsors/Microsoft.png"
import slack from "@/public/sponsors/Slack.png"
import google from "@/public/sponsors/Google.png"

export default function Sponsors() {
  return (
    <section className="bg-background text-foreground ">
      <div className="px-4 py-25 max-w-370 mx-auto flex flex-col items-center gap-25">

        {/* Sponsors */}
        <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center lg:text-start w-fit">
          Our Sponsors
          <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 lg:left-0 h-10 w-63">
            {" "}
            <Image src={dash} alt="Dash" />{" "}
          </div>
        </h2>

        {/* List */}
        <div className="grid sm:grid-cols-2 gap-25 xl:grid-cols-4 justify-items-center">
            <Image src={apple} alt="apple logo" width={55} height={68}  />
            <Image src={microsoft} alt="microsoft logo" width={287} height={62}  />
            <Image src={slack} alt="slack logo" width={280} height={71}  />
            <Image src={google} alt="google logo" width={211} height={69}  />
        </div>
      </div>
    </section>
  );
}
