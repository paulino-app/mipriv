import Image from "next/image";
import Row from "../ui/row";

export default function DashboardTopProducts({ data }: { data: any[] }) {
  return (
    <div className="relative col-span-12 h-[366px] rounded-xl bg-priv-container md:col-span-5 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Recent Purchases
      </div>

      <div className="mt-7 flex flex-col px-6 md:mt-9 md:px-8">
        {/* Row */}
        <div className="mb-px flex">
          {/* Column */}
          <Row width="50%" align={"left"}>
            Item
          </Row>
          <Row width="25%" align={"center"}>
            Views
          </Row>
          <Row width="25%" align={"center"}>
            Sales
          </Row>
        </div>

        {/* Row */}
        {data.map((row: any, index: number) => (
          <div
            key={index}
            className={`border-priv-gray-light flex h-16 items-center justify-center md:h-[86px] ${index != data.length - 1 ? "border-b" : "border-0"}`}
          >
            <Row width="50%" align={"left"}>
              <Image
                src={row.image}
                className="mr-3 inline-block h-10 w-10 md:mr-4 md:h-14 md:w-14"
                alt="icon"
                width={32}
                height={32}
              />
              {row.item}
            </Row>
            <Row active={true} number={true} width="25%" align={"center"}>
              {row.views}
            </Row>
            <Row active={true} number={true} width="25%" align={"center"}>
              {row.sales}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}
