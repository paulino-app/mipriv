import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-14 w-full border-b border-priv-gray-light">
      <div className="mx-auto w-[90%] lg:w-[1120px] h-full flex justify-end">
        <div className="flex h-full items-center gap-4">
          <NavbarItem image="/icons/navbar_home.svg" />
          <NavbarItem image="/icons/navbar_message.svg" />
          <NavbarItem image="/icons/navbar_heart.svg" />
          <NavbarItem image="/icons/navbar_dashboard.svg" />
          <NavbarItem image="/icons/navbar_user.svg" />
        </div>
      </div>
    </div>
  );
}

function NavbarItem({ image }: any) {
  return (
    <>
      <Image
        src={image}
        className="mr-3 inline-block h-4 w-4 md:mr-4 md:h-[20px] md:w-[20px]"
        alt="icon"
        width={32}
        height={32}
      />
    </>
  );
}
