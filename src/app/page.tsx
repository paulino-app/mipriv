"use client";
import { useEffect, useRef, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useMediaQuery } from "@/services/mediaQuery";
import Sidenav from "@/components/ui/sidenav";
import Home from "@/components/dashboard/home";
import Navbar from "@/components/navbar";

function useForceUpdate() {
  const [, setToggle] = useState(false);
  return () => setToggle((toggle) => !toggle);
}

export default function App() {
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const compactMenuVisible = useRef<boolean>(false);

  const forceUpdate = useForceUpdate();

  const [area, setArea] = useState<string>("");
  const [section, setSection] = useState<string>("");

  const matches = useMediaQuery(1500);

  const capitalize = (text: string) => {
    if (!text) {
      return "";
    }
    return (
      text.charAt(0).toUpperCase() +
      text.substring(1, text.length).replace("-", " ")
    );
  };

  const open = () => {
    if (matches) {
      compactMenuVisible.current = true;

      forceUpdate();
    } else {
      setMenuVisible(true);
    }
  };

  const close = () => {
    if (matches) {
      compactMenuVisible.current = false;
      forceUpdate();
    } else {
      setMenuVisible(false);
    }
  };

  const showMenu = (mode: string = "normal") => {
    if (!matches) {
      compactMenuVisible.current = false;
      return menuVisible;
    }

    if (compactMenuVisible.current && mode == "self") {
      return true;
    }

    return false;
  };

  return (
    <>
      <main className="main">
        {/* first */}
        <div
          style={{
            width: "256px",
            display: showMenu("self") ? "block" : "none",
            float: "left",
          }}
        >
          <Sidenav
            showMenu={matches}
            menuMode={menuVisible}
            mediaQuery={matches}
            close={close}
          />
        </div>

        {/* second */}
        <div
          style={{
            width: showMenu() ? "calc(100% - 256px)" : "100%",
            float: "left",
          }}
        >
          <div className="w-full h-screen overflow-scroll">
            <Navbar />
            <Home />
          </div>
        </div>
      </main>
    </>
  );
}
