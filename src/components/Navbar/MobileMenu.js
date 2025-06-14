import React from "react";
import Link from "next/link";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

// className="w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0"

const MobileMenu = ({
  navData,
  showdest,
  setShowDest,
  showAct,
  setShowAct,
  setMobileMenu,
}) => {
  return (
    <ul className="border-t text-black capitalize text-sm font-semibold px-5">
      {navData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.cat ? (
              item.name === "destinations" ? (
                <li
                  className="cursor-pointer py-4 border-b flex flex-col relative"
                  onClick={() => setShowDest(!showdest)}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {!showdest ? (
                      <BsChevronRight size={14} />
                    ) : (
                      <BsChevronDown size={14} />
                    )}
                  </div>
                  {showdest && (
                    <ul className="mt-4 -mb-4 transition ease-in-out duration-500">
                      {item.cat.map((submenu) => {
                        return (
                          <Link
                            key={submenu.id}
                            href={submenu.url}
                            onClick={() => {
                              setShowDest(false);
                              setMobileMenu(false);
                            }}
                          >
                            <li className="py-4 px-5 flex justify-between border-b">
                              {submenu.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  className="cursor-pointer py-4 border-b flex flex-col relative"
                  onClick={() => setShowAct(!showAct)}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {!showAct ? (
                      <BsChevronRight size={14} />
                    ) : (
                      <BsChevronDown size={14} />
                    )}
                  </div>
                  {showAct && (
                    <ul className="mt-4 -mb-4">
                      {item.cat.map((submenu) => {
                        return (
                          <Link
                            key={submenu.id}
                            href={submenu.url}
                            onClick={() => {
                              setShowAct(false);
                              setMobileMenu(false);
                            }}
                          >
                            <li className="py-4 px-5 flex justify-between border-b">
                              {submenu.name} tours
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              )
            ) : (
              <li className="py-4 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
