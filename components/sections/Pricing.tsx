"use client";

import Image from "next/image";
import dash from "@/public/work/dash.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CircleCheckBig } from "lucide-react";

export default function Pricing() {
  return (
    <section className="bg-background text-foreground">
      <div className="px-4 py-20 max-w-370 mx-auto">
        {/* Text Content */}
        <div className="flex flex-col gap-6 justify-center items-center mb-15">
          <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center w-fit">
            Choose your plan
            <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 lg:left-0 h-10 w-63">
              {" "}
              <Image src={dash} alt="Dash" />{" "}
            </div>
          </h2>
          <p className="text-lg text-center lg:text-start">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>

        {/* Swiper */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="rounded-xl bg-background text-foreground p-5 border border-yellow-500">
              <div className="flex flex-col gap-6 mb-6">
                <h3 className="font-semibold text-2xl">Free</h3>
                <p className="text-4xl font-bold">$0</p>
                <p>Capture ideas and find them quickly</p>
              </div>
              <ul className="flex flex-col gap-3 mb-6">
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Sync unlimited devices</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>10 GB monthly uploads</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>200 MB max. note size</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Customize Home dashboard and access extra widgets</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Connect primary Google Calendar account</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>
                      Add due dates, reminders, and notifications to your tasks
                    </p>
                  </div>
                </li>
              </ul>
              <button className="flex items-center gap-2.5 rounded-lg px-10 py-4 border border-yellow-500 w-fit">
                <span>Get Started</span>{" "}
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl bg-primary-1 text-background p-5">
              <div className="flex flex-col gap-6 mb-6">
                <h3 className="font-semibold text-2xl">Personal</h3>
                <p className="text-4xl font-bold">$11.2</p>
                <p>Keep home and family on track</p>
              </div>
              <ul className="flex flex-col gap-3 mb-6">
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Sync unlimited devices</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>10 GB monthly uploads</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>200 MB max. note size</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Customize Home dashboard and access extra widgets</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Connect primary Google Calendar account</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>
                      Add due dates, reminders, and notifications to your tasks
                    </p>
                  </div>
                </li>
              </ul>
              <button className="flex items-center gap-2.5 bg-primary-2 rounded-lg px-10 py-4 text-background w-fit">
                <span>Get Started</span>{" "}
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-xl bg-background text-foreground p-5 border border-yellow-500">
              <div className="flex flex-col gap-6 mb-6">
                <h3 className="font-semibold text-2xl">Organization</h3>
                <p className="text-4xl font-bold">$49.99</p>
                <p>Capture ideas and find them quickly</p>
              </div>
              <ul className="flex flex-col gap-3 mb-6">
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Sync unlimited devices</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>10 GB monthly uploads</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>200 MB max. note size</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Customize Home dashboard and access extra widgets</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>Connect primary Google Calendar account</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-5">
                    <CircleCheckBig color="gold" />
                    <p>
                      Add due dates, reminders, and notifications to your tasks
                    </p>
                  </div>
                </li>
              </ul>
              <button className="flex items-center gap-2.5 rounded-lg px-10 py-4 border border-yellow-500 w-fit">
                <span>Get Started</span>{" "}
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
