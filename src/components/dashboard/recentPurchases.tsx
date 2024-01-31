import Row from "../ui/row";

export default function DashboardRecentPurchases({ data }: { data: any[] }) {
  return (
    <div className="relative col-span-12 h-[366px] rounded-xl bg-priv-container md:col-span-7 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Recent Purchases
      </div>

      <div className="mt-7 flex flex-col px-6 md:mt-9 md:px-8">
        {/* Row */}
        <div className="mb-px flex">
          {/* Column */}
          <Row width="25%">Name</Row>
          <Row width="25%" align={"center"}>
            Price
          </Row>
          <Row width="26.5%" align={"left"}>
            Customer
          </Row>
          <Row width="18%" align={"left"}>
            Status
          </Row>
        </div>

        {/* Row */}
        {data.map((row: any, index: number) => (
          <div
            key={index}
            className={`border-priv-gray-light flex h-14 items-center justify-center md:h-16 ${index != data.length - 1 ? "border-b" : "border-0"}`}
          >
            <Row width="25%" align={"left"}>
              {row.name}
            </Row>
            <Row active={true} number={true} width="25%" align={"center"}>
              {row.price}
            </Row>
            <Row number={true} width="26.5%" align={"left"}>
              {row.customer}
            </Row>
            <Row number={true} width="17.5%" align={"left"}>
              {row.status == "complete" ? (
                <div className="w-24 rounded-sm border border-priv-green py-px text-center text-priv-green">
                  Complete
                </div>
              ) : (
                <div className="w-24 rounded-sm border border-priv-yellow py-px text-center text-priv-yellow">
                  Pending
                </div>
              )}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}
