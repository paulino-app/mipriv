"use client";
import Image from "next/image";
import { useState } from "react";

export default function DashboardEarnings() {
  const [image, setImage] = useState("/images/curve_blue_7_days.svg");
  const [period, setPeriod] = useState("7 Days");
  const [periodOptions, setPeriodOptions] = useState([
    "14 Days",
    "Month",
    "Annually",
  ]);

  const handleOptions = (option: string) => {
    const periods = ["7 Days", "14 Days", "Month", "Annually"];
    setPeriod(option);
    setPeriodOptions(periods.filter((period) => period !== option));

    setImage('/images/curve_blue_year.svg');
  };

  return (
    <div className="relative col-span-12 h-64 animate-fade-move rounded-xl bg-priv-container sm:h-80 md:col-span-9">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Earnings
      </div>

      <button className="group absolute right-8 top-8 font-josefin text-sm text-priv-gray md:text-base">
        {period}
        <Image
          className="-mt-[1px] inline-block h-4 w-4 pl-[6px] md:-mt-[2px] md:h-[18px] md:w-[18px] md:pl-2 "
          src={"/icons/dropdown_arrow_gray.svg"}
          alt="icon"
          width={24}
          height={24}
        />
        <div className="h-18 absolute z-10 hidden w-[125%] flex-wrap rounded-[6px] bg-[#33314F] py-2 group-hover:flex">
          {periodOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptions(option)}
              className="cursor-pointer px-4 py-2 font-josefin text-sm text-white"
            >
              {option}
            </div>
          ))}
        </div>
      </button>

      <div className="bg-yellow-200/00 absolute bottom-2 w-full md:bottom-4">
        <div className="flex h-56 px-6 md:mt-5 md:h-52 md:px-8">
          {/* all */}
          <div className="w-full">
            <div className="relative h-44 md:h-44 ">
              <div className="absolute bottom-0 h-full w-full">
                <Image
                  src={image}
                  className="absolute bottom-0 w-full"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="absolute -bottom-[28px] flex w-full">
                  <div className="w-[6%]"></div>
                  <div className="flex w-[94%]">
                    <DashboardStatsDay day="Monday" />
                    <DashboardStatsDay day="Tuesday" />
                    <DashboardStatsDay day="Wednesday" />
                    <DashboardStatsDay day="Thursday" />
                    <DashboardStatsDay day="Friday" />
                    <DashboardStatsDay day="Saturday" />
                    <DashboardStatsDay day="Sunday" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardStatsDay({ day }: { day: string }) {
  return (
    <div className="w-[14.28571428571429%] text-center font-josefin text-xs font-thin text-priv-gray md:text-center md:text-sm">
      {day.substring(0, 3)}
      <span className="hidden md:inline">{day.substring(3, day.length)}</span>
    </div>
  );
}
