import Image from "next/image";

export default function DashboardStats({
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
