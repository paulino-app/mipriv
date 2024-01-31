import Image from "next/image";

export default function Subscriptions() {
  return (
    <div className="relative col-span-12 h-[366px] rounded-xl bg-priv-container md:col-span-4 md:h-[424px]">
      <div className="pl-6 pt-6 font-josefin text-xl text-white md:pl-8 md:pt-8 md:text-2xl">
        Subscriptions
      </div>

      <div className="relative mt-8 px-6 md:mt-12 md:px-7">
        <div className="relative h-60 w-full ">
          <Image
            src={"/images/subscriptions.svg"}
            layout="fill"
            objectFit="contain"
            alt="Your Image Description"
          />
        </div>
      </div>
    </div>
  );
}
