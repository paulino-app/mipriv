import Image from "next/image";
import Row from "../ui/row";

export default function DashboardPopularPosts({ data }: { data: any[] }) {
  return (
    <div className="relative col-span-12 h-[366px] rounded-xl bg-priv-container md:col-span-5 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Popular posts
      </div>

      <div className="mt-7 flex flex-col px-6 md:mt-9 md:px-8">
        {/* Row */}
        <div className="mb-px flex">
          {/* Column */}
          <Row width="20%" align={"left"}>
            Rank
          </Row>
          <Row width="40%" align={"left"}>
            Title
          </Row>
          <Row width="40%" align={"center"}>
            Interactions
          </Row>
        </div>

        {/* Row */}
        {data.map((row: any, index: number) => (
          <div
            key={index}
            className={`border-priv-gray-light flex h-14 items-center justify-center md:h-16 ${index != data.length - 1 ? "border-b" : "border-0"}`}
          >
            <Row width="20%" align={"left"}>
              {row.rank}
            </Row>
            <Row width="40%" align={"left"}>
              {row.title}
            </Row>
            <Row active={true} number={true} width="40%" align={"center"}>
              {row.interactions}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}
