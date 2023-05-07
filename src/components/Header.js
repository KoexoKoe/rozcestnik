import React from "react";
import logo_img from "../assets/Rozcestník_ICON_transparent.png";

const Header = () => {
  return (
    <header className="w-screen h-[1080px] flex flex-col justify-between items-center text-center bg-gradient-to-t from-[#c2fdf1] to-[#9dffe6]">
      <div className="justify-center">
        <button
          className="border-[25px] border-[rgb(37,192,176)] bg-[rgb(37,192,176)]  drop-shadow-2xl hover:scale-125 duration-100"
          id="ÚČET"
        >
          ÚČET
        </button>
      </div>
      <div>
        <h1 id="ROZCESTNÍK">ROZCESTNÍK</h1>
      </div>
      <div>
        <img src={logo_img} />
      </div>
    </header>
  );
};

export default Header;
