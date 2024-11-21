import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const NavBarPhone = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuColor, setMenuColor] = useState("red");

  const menuClicked = () => {
    setIsOpen(!isOpen);

    setShowMenu(!showMenu);
    if (menuColor === "red") {
      setMenuColor("white");
    } else {
      setMenuColor("red");
    }
  };
  return (
    <div className="flex">
      {showMenu && (
        <div className={"modal z-0"}>
          <ul>
            <li className="">
              <a className="h8-style" href="#ai">
                Artificial Intelligence
              </a>
            </li>
            <li className="">
              <a className="h8-style" href="#ar">
                AR & VR
              </a>
            </li>
            <li className="">
              <a className="h8-style" href="#block-chain">
                Block Chain
              </a>
            </li>
            <li className="">
              <a className="h8-style" href="#bio-tech">
                Bio-Tech
              </a>
            </li>
            <li className="">
              <a className="h8-style" href="#sustainable">
                Sustainable Tech
              </a>
            </li>
          </ul>
        </div>
      )}
      <HamburgerMenu
        className="right-0 top-0 z-50 m-[15px]"
        isOpen={isOpen}
        menuClicked={menuClicked}
        width={28}
        height={25}
        strokeWidth={1.5}
        rotate={0}
        color={menuColor}
        borderRadius={0}
        animationDuration={0.5}
      />
    </div>

    // <div className="flex w-full items-center justify-center">
    //   <nav className="sticky top-0 z-50 flex w-full flex-col items-center xl:hidden">
    //

    //   </nav>
    // </div>
  );
};

export default NavBarPhone;
