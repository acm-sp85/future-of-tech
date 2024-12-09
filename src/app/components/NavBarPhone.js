import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const NavBarPhone = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuColor, setMenuColor] = useState("#F3E3C1");

  const menuClicked = () => {
    setIsOpen(!isOpen);

    setShowMenu(!showMenu);
    if (menuColor === "#CD320C") {
      setMenuColor("#F3E3C1");
    } else {
      setMenuColor("#CD320C");
    }
  };
  return (
    <div className="w-full">
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
      <div className="w-full">
        <HamburgerMenu
          className="top-0 z-50 m-[15px] ml-auto"
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
    </div>
  );
};

export default NavBarPhone;
