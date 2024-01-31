"use client";
import Image from "next/image";

function Sidenav(props: any) {
  const handleClose = () => {
    props.close();
  };

  const items = [
    {
      name: "Dashboard",
      icon: "/icons/home.svg",
      active: true,
    },
    {
      name: "Subscribers",
      icon: "/icons/subscribers.svg",
    },
    {
      name: "Content",
      icon: "/icons/content.svg",
    },
    {
      name: "Messages",
      icon: "/icons/messages.svg",
    },
    {
      name: "Payments",
      icon: "/icons/payments.svg",
    },
    {
      name: "Payouts",
      icon: "/icons/payouts.svg",
    },
  ];

  return (
    <>
      <div
        className="absolute z-10 h-full w-full bg-black/20"
        style={{
          display: props.showMenu ? "block" : "none",
        }}
      />

      <div
        className="bg-priv-dark-blue relative z-20 h-screen w-64"
        style={{
          position: props.showMenu ? "absolute" : "static",
        }}
      >
        <div className="flex w-64 justify-end">
          <div
            className="mr-4 mt-4 flex h-6 w-6 cursor-pointer items-center justify-center"
            onClick={handleClose}
          >
            <div className="relative h-5 w-5">
              <Image
                src="/icons/close_white.svg"
                alt="icon"
                fill={true}
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>

        {/* logo */}
        <div className="mb-3 h-20 w-full select-none">
          <div className="relative m-auto h-full w-[40%]">
            <Image src="/images/logo.svg" alt="logo" fill={true} priority />
          </div>
        </div>

        <div className="px-12">
          {items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`relative flex h-14 items-center ${item?.active && ""}`}
              >
                {item?.active && (
                  <div className="absolute -left-[24px] top-[6px] h-11 w-[208px] rounded-[8px] bg-priv-container"></div>
                )}
                <Image
                  src={item.icon}
                  className="z-10 mr-3 inline-block h-4 w-4 md:mr-4 md:h-4 md:w-4"
                  alt="icon"
                  width={32}
                  height={32}
                />
                <div
                  className={`z-10 mt-1 font-josefin text-xl text-priv-gray ${item?.active && "text-white"}`}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidenav;
