"use client";
import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const navData = [
  { id: 1, name: "home", url: "/" },
  {
    id: 2,
    name: "destinations",
    cat: [
      { id: 1, name: "Jammu & Kashmir", url: "/destinations/jammu-kashmir" },
      { id: 2, name: "Uttarakhand", url: "/destinations/uttarakhand" },
      {
        id: 3,
        name: "Himachal Pradesh",
        url: "/destinations/himachal-pradesh",
      },
      { id: 4, name: "Goa", url: "/destinations/goa" },
      { id: 5, name: "Rajasthan", url: "/destinations/rajasthan" },
    ],
  },
  {
    id: 3,
    name: "activities",
    cat: [
      {
        id: 1,
        name: "Adventure and Trekking",
        url: "/activities/adventure-and-trekking",
      },
      {
        id: 2,
        name: "Safari and Natural Parks",
        url: "/activities/safari-and-natural-parks",
      },
      { id: 3, name: "Sea and Beaches", url: "/activities/sea-and-beaches" },
      {
        id: 4,
        name: "Mountains, Lakes and Rivers",
        url: "/activities/mountains-and-lakes-and-rivers",
      },
      {
        id: 5,
        name: "Art, History and Cultural Trips",
        url: "/activities/art-and-history-and-cultural-trips",
      },
      {
        id: 6,
        name: "Romance and Honeymoon",
        url: "/activities/romance-and-honeymoon",
      },
      { id: 7, name: "Weekend Escapes", url: "/activities/weekend-escapes" },
    ],
  },
  { id: 4, name: "blogs", url: `/blogs` },
  { id: 5, name: "about us", url: "/about" },
  { id: 6, name: "contact", url: "/contact" },
];

const Navbar = () => {
  const [showdest, setShowDest] = useState(false);
  const [showAct, setShowAct] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <Wrapper>
        {/*navbar and logo for medium screen start */}
        <div className="hidden md:flex justify-between p-5">
          <a href="tel:+91 7204728132">
            <FiPhoneCall className="inline-block" />
            <span className="ml-2 text-sm">Call us:</span>
            <span className="ml-1 text-md font-semibold text-[#44D7B6]">
              +91 7204728132
            </span>
          </a>
          <Image src="/smarttravel.png" width={200} height={50} alt="logo" />

          <a href="mailto:manumohan3223@gmail.com">
            <FiMail className="inline-block" />
            <span className="ml-2 text-sm">Mail us:</span>
            <span className="ml-1 text-md font-semibold text-[#44D7B6]">
              manumohan3223@gmail.com
            </span>
          </a>
        </div>

        <Menu
          navData={navData}
          setShowDest={setShowDest}
          setShowAct={setShowAct}
        />
        {/*navbar and logo for medium screen end */}

        {/*navbar and logo for small screen start */}

        {!mobileMenu ? (
          <div className="flex justify-between items-center md:hidden h-16">
            <Image src="/smarttravel.png" width={200} height={50} alt="logo" />
            <a href="tel:+917204728132">
              <FiPhoneCall className="inline-block" />
            </a>
            <a href="mailto:manumohan3223@gmail.com">
              <FiMail className="inline-block" />
            </a>
            <BiMenuAltRight
              className="text-[20px]"
              onClick={() => setMobileMenu(true)}
            />
          </div>
        ) : (
          <div className="md:hidden flex flex-col bottom-0 top-0 bg-white fixed z-[9999] w-full left-0 overflow-y-auto overflow-hidden">
            <div className="flex justify-between items-center px-5 h-16 bg-eucalyptus text-white">
              <div className="font-medium">Main Menu</div>
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            </div>

            <MobileMenu
              navData={navData}
              showdest={showdest}
              setShowDest={setShowDest}
              showAct={showAct}
              setShowAct={setShowAct}
              setMobileMenu={setMobileMenu}
            />
          </div>
        )}
        {/*navbar and logo for small screen end */}
      </Wrapper>
    </header>
  );
};

export default Navbar;
