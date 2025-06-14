import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ navData }) => {
  return (
    <ul className="hidden md:flex justify-center gap-8 uppercase text-sm tracking-wider border-y cursor-pointer">
      {navData.map((item) => (
        <React.Fragment key={item.id}>
          {item?.cat ? (
            <li className="group cursor-pointer flex items-center gap-2 relative transition ease-in-out hover:text-eucalyptus duration-300 py-5">
              {item.name}
              <BsChevronDown size={14} />
              <ul className="hidden bg-white absolute top-12 left-0 min-w-[250px] text-black tracking-wider p-5 shadow-2xl group-hover:block z-10">
                {item.cat.map((submenu) => (
                  <li
                    key={submenu.id}
                    className="h-12 flex items-center transition ease-in-out hover:text-eucalyptus duration-300 border-b"
                  >
                    <Link href={submenu.url}>{submenu.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="transition ease-in-out hover:text-eucalyptus duration-300 py-5">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
