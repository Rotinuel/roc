import React from "react";
import Navbar from "./Navbar";
import classNames from "classnames"

const Layout = () => {
  const containerClasses = classNames(
    "h-screen flex flex-row justify-start"
  )

  const wrapperClasses = classNames(
    "bg-white flex-1 p-4 text-white"
  )
  return (
    <div className={containerClasses}>
      <Navbar />
      <div className={wrapperClasses}>clusters</div>
    </div>
  );
};

export default Layout;
