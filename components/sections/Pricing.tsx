"use client";

import Image from "next/image";
import dash from "@/public/work/dash.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CircleCheckBig } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      highlight: "border",
      ctaVariant: "outline",
    },
    {
      name: "Personal",
      price: "$11.2",
      description: "Keep home and family on track",
      highlight: "fill",
      ctaVariant: "fill",
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      highlight: "border",
      ctaVariant: "outline",
    },
  ];

  const features = [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks",
  ];

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

        {/* Mobile/Tablet: Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".pricing-pagination",
              clickable: true,
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="mySwiper"
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan.name}>
                <div
                  className={`rounded-xl p-5 ${
                    plan.highlight === "fill"
                      ? "bg-primary-1 text-background"
                      : "bg-background text-foreground border border-yellow-500"
                  }`}
                >
                  <div className="flex flex-col gap-6 mb-6">
                    <h3 className="font-semibold text-2xl">{plan.name}</h3>
                    <p className="text-4xl font-bold">{plan.price}</p>
                    <p>{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-6">
                    {features.map((feature) => (
                      <li key={feature}>
                        <div className="flex gap-5">
                          <CircleCheckBig color="gold" />
                          <p>{feature}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`flex items-center gap-2.5 rounded-lg px-10 py-4 w-fit ${
                      plan.ctaVariant === "fill"
                        ? "bg-primary-2 text-background"
                        : "border border-yellow-500"
                    }`}
                  >
                    <span>Get Started</span>{" "}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pricing-pagination swiper-pagination static!" />
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-5 ${
                plan.highlight === "fill"
                  ? "bg-primary-1 text-background"
                  : "bg-background text-foreground border border-yellow-500"
              }`}
            >
              <div className="flex flex-col gap-6 mb-6">
                <h3 className="font-semibold text-2xl">{plan.name}</h3>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p>{plan.description}</p>
              </div>
              <ul className="flex flex-col gap-3 mb-6">
                {features.map((feature) => (
                  <li key={feature}>
                    <div className="flex gap-5">
                      <CircleCheckBig color="gold" />
                      <p>{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className={`flex items-center gap-2.5 rounded-lg px-10 py-4 w-fit ${
                  plan.ctaVariant === "fill"
                    ? "bg-primary-2 text-background"
                    : "border border-yellow-500"
                }`}
              >
                <span>Get Started</span>{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
