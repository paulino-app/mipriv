"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-[90%] lg:w-[1120px]">
        <div className="pb-7 pt-9">
          <div className="font-josefin text-2xl text-white">
            Good Afternoon Sofia 👋
          </div>
          <div className="font-josefin text-base text-priv-gray">
            Welcome to your new creator studio.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <DashboardStats
            color="#2A3057"
            icon="/icons/eye_blue.svg"
            title="Visitors"
            value="152"
            active={true}
            k={true}
          />

          <DashboardStats
            color="#4B3F3A"
            icon="/icons/user_yellow.svg"
            title="Subscribers"
            value="1.5"
            active={true}
            k={true}
          />

          <DashboardStats
            color="#213F4A"
            icon="/icons/post_green.svg"
            title="Posts"
            value="168"
          />

          <DashboardStats
            color="#36375B"
            icon="/icons/heart_purple.svg"
            title="Tips"
            value="52"
          />

          <DashboardEarnings />
          <DashboardEarningsResume />
          <DashboardSalesLocations />
        </div>

        <div className="p-96"></div>
      </div>
    </>
  );
}

function DashboardSalesLocationsItem({
  color,
  location,
}: {
  color: string;
  location: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-[6px] w-[6px] rounded-full md:h-2 md:w-2"
        style={{ backgroundColor: color }}
      ></div>
      <div className="font-josefin text-sm font-light text-white md:text-base">
        {location}
      </div>
    </div>
  );
}

function DashboardSalesLocations() {
  return (
    <div className="relative col-span-12 h-[366px] rounded-xl bg-priv-container md:col-span-6 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Sales Locations
      </div>

      <div className="relative mt-8 px-6 md:mt-12 md:px-7">
        <div className="relative h-52 w-full">
          <Image
            src={"/images/sales_map.svg"}
            layout="fill"
            objectFit="contain"
            alt="Your Image Description"
          />
        </div>
      </div>

      <div className="absolute bottom-[16px] md:bottom-[22px]">
        <div className="flex gap-4 px-6 md:px-8">
          <DashboardSalesLocationsItem
            color="#FFFFFF"
            location="Popular, Colombia"
          />
          <DashboardSalesLocationsItem color="#4F6EDF" location="America" />
          <DashboardSalesLocationsItem color="#8E91F4" location="Europe" />
        </div>
      </div>
    </div>
  );
}

/**
function DashboardSalesLocations() {
  return (
    <div className="col-span-12 h-[296px] rounded-xl bg-priv-container md:col-span-6 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Earnings
      </div>
    </div>
  );
}
 */

// 80
function DashboardEarningsResume() {
  return (
    <div className="relative col-span-12 h-64 rounded-xl bg-priv-blue md:col-span-3 md:h-80">
      <div className="flex h-full items-center justify-center p-8 md:justify-start">
        {/* center */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-6">
          {/* item */}
          <DashboardEarningsResumeItem
            title="Monthly Earnings"
            value="$ 19,262.50"
          />
          <DashboardEarningsResumeItem title="Avg. Earnings" value="$ 12.52" />
          <DashboardEarningsResumeItem title="Tips" value="$ 872.30" />
        </div>
      </div>

      <Image
        src={"/icons/stats_blue.svg"}
        className="absolute bottom-0 right-8 h-24 w-24"
        alt="icon"
        width={96}
        height={96}
      />
    </div>
  );
}

function DashboardEarningsResumeItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="col-span-1">
      <div className="font-josefin text-sm text-white md:text-base">
        {title}
      </div>
      <div className="mt-1 font-jost text-2xl text-white">{value}</div>
    </div>
  );
}

// 60
function DashboardEarnings() {
  return (
    <div className="relative col-span-12 h-64 rounded-xl bg-priv-container sm:h-80 md:col-span-9">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Earnings
      </div>

      <div className="absolute right-8 top-8 font-josefin text-sm text-priv-gray md:text-base">
        7 Days
        {/* icon */}
        <Image
          className="-mt-[1px] inline-block h-4 w-4 pl-[6px] md:-mt-[2px] md:h-[18px] md:w-[18px] md:pl-2"
          src={"/icons/dropdown_arrow_gray.svg"}
          alt="icon"
          width={24}
          height={24}
        />
      </div>

      <div className="bg-yellow-200/00 absolute bottom-2 w-full md:bottom-4">
        <div className="flex h-56 px-6 md:mt-5 md:h-52 md:px-8">
          {/* all */}
          <div className="w-full">
            <div className="relative h-44 md:h-44">
              <div className="absolute bottom-0 h-full w-full">
                <Image
                  src={"/images/curve_blue.svg"}
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

function DashboardStats({
  color,
  icon,
  title,
  value,
  active,
  k,
}: {
  color: string;
  icon: string;
  title: string;
  value: string;
  active?: boolean;
  k?: boolean;
}) {
  return (
    <div className="col-span-6 md:col-span-3">
      <div className="flex h-24 w-full items-center rounded-xl bg-priv-container md:h-28">
        <div className="ml-5 flex h-12 md:h-14">
          {/* logo */}
          <div className="w-12 md:w-14">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 md:h-14 md:w-14"
              style={{ backgroundColor: color }}
            >
              <Image
                src={icon}
                className="h-5 w-5 md:h-6 md:w-6"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          {/* data */}
          <div className="w-40 pl-3 md:pl-4">
            <div className="font-josefin text-sm text-priv-gray md:text-base">
              {title}
            </div>
            <div className="font-jost text-2xl text-white md:text-3xl">
              {value}
              {k && (
                <span className="pl-0.5 font-josefin text-xl text-white md:pl-1 md:text-2xl">
                  k
                </span>
              )}
              {active && (
                <Image
                  src={"/icons/stats_up_green.svg"}
                  className="inline-block h-6 w-6 pl-2 md:h-8 md:w-8 md:pl-3"
                  alt="icon"
                  width={24}
                  height={24}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
