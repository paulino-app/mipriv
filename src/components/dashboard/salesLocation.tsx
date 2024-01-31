import Image from "next/image";

export default function DashboardSalesLocations() {
  return (
    <div className="animate-fade-move relative col-span-12 h-[366px] rounded-xl bg-priv-container md:col-span-6 md:h-[424px]">
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
