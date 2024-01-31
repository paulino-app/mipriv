import Image from "next/image";

export default function DashboardEarningsResume() {
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