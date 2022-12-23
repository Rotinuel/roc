/* eslint-disable no-useless-computed-key */
import React, { useState } from "react";
import classNames from "classnames";
//import { BiHomeAlt, BiLogOut } from "react-icons/bi";
//import { TbUsers, TbSettings } from "react-icons/tb"
import { RxDoubleArrowLeft } from "react-icons/rx";

const menuItems = [
    {id: 1, label:"Home", link: "/"},
    {id: 2, label:"User",  link: "/user"},
    {id: 3, label:"Admin", link: "/admin"},
    {id: 4, label:"Home", link: "/"},
]

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setCollapsible] = useState(false);

  const sidebarClasses = classNames(
    "h-screen px- pt-8 pb-4 bg-light flex justify-between flex-col border-b",
    {
      ["w-60"]: !toggleCollapse,
      ["w-10"]: toggleCollapse,
    }
  );

  const rxDoubleArrowLeftClasses = classNames("p-4 rounded absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const getNavItemClasses = (menu) => {
    return classNames("flex items-center cursor-pointer hover:bg-light rounded w-full overflow-hidden whitespace")
  }

  const onMouseOver = () => {
    setCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={sidebarClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames(
                "mt-2 text-lg font-medium text-casablanca",
                { hidden: toggleCollapse }
              )}
            >
              logo
            </span>
          </div>
          {isCollapsible && (
            <button
              className={rxDoubleArrowLeftClasses}
              onClick={handleSidebarToggle}
            >
              <RxDoubleArrowLeft />
            </button>
          )}
        </div>
        <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
                return (
                    <div>
                        {menu.label}
                    </div>
                )
            })}
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
