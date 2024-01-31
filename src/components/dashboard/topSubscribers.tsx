import Image from "next/image";
import Row from "../ui/row";

export default function DashboardTopSubs({ data }: { data: any[] }) {
  return (
    <div className="relative col-span-12 h-[366px] animate-fade-move rounded-xl bg-priv-container md:col-span-6 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Top Subs
      </div>

      <div className="mt-7 flex flex-col px-6 md:mt-9 md:px-8">
        {/* Row */}
        <div className="mb-px flex">
          {/* Column */}
          <Row width="55%">Name</Row>
          <Row width="22.5%" align={"center"}>
            Purchases
          </Row>
          <Row width="22.5%" align={"right"}>
            Total
          </Row>
        </div>

        {/* Row */}
        {data.map((row: any, index: number) => (
          <div
            key={index}
            className={`flex h-14 items-center justify-center border-priv-gray-light md:h-16 ${index != data.length - 1 ? "border-b" : "border-0"}`}
          >
            <Row width="55%" align={"left"}>
              <Image
                src={row.image}
                className="mr-3 inline-block h-8 w-8 md:mr-4 md:h-10 md:w-10"
                alt="icon"
                width={32}
                height={32}
              />
              {row.name}{" "}
              <span className="inline sm:hidden lg:inline">{row.surname}</span>
            </Row>
            <Row active={true} number={true} width="22.5%" align={"center"}>
              {row.purchases}
            </Row>
            <Row highlight={true} number={true} width="22.5%" align={"left"}>
              <div className="flex w-full justify-end">
                <div className="w-18">$ {row.total.toFixed(2)}</div>
              </div>
            </Row>
          </div>
        ))}
        <div className="mt-[2px] flex w-full justify-end">
          <div className="font-josefin text-sm font-light text-priv-gray md:text-base">
            View all fans
            <Image
              src="/icons/arrow.svg"
              className="-mt-[1px] ml-2  inline-block h-2 w-2 md:h-[10px] md:w-[10px]"
              alt="icon"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
