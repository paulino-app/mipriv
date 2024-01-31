import Image from "next/image";

export default function Navbar({ mediaQuery, menuVisible, open }: any) {
  const menuButtonHandler = () => {
    if (mediaQuery) {
      return true;
    }

    return menuVisible ? false : true;
  };

  const openHandler = () => {
    open();
  };

  return (
    <div className="sticky top-0 z-10 h-14 w-full border-b border-priv-gray-light bg-priv-base">
      <div className="f mx-auto flex h-full w-[90%] justify-between lg:max-w-[1120px]">
        <div className="flex h-full w-1/5 items-center">
          <button
            onClick={openHandler}
            style={{
              display: menuButtonHandler() ? "flex" : "none",
            }}
          >
            <Image
              src={"/icons/menu.svg"}
              className="inline-block h-4 w-4 md:h-[20px] md:w-[20px]"
              alt="icon"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div className="h-full">
          <div className="flex h-full items-center gap-4">
            <NavbarItem image="/icons/navbar_home.svg" />
            <NavbarItem image="/icons/navbar_message.svg" />
            <NavbarItem image="/icons/navbar_heart.svg" />
            <NavbarItem image="/icons/navbar_dashboard.svg" />
            <NavbarItem image="/icons/navbar_user.svg" />
          </div>
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
