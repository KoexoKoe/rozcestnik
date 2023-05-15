import React, { useEffect, useState } from "react";
import logo_img from "../assets/Rozcestník_ICON_transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out!");
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();
  const navigateToMap = () => {
    navigate("/mapa");
  };

  return (
    <header
      id="home"
      className="w-[100%] h-screen flex flex-col  items-center text-center bg-gradient-to-t from-[#c2fdf1] to-[#9dffe6]"
    >
      <div className="text-xl text-green-700">
        {authUser ? (
          <>
            <p>{`Přihlášen jako: ${authUser.email}`}</p>
            <button
              className="border-[15px] m-2 border-[rgb(37,192,176)] bg-[rgb(37,192,176)]  drop-shadow-2xl hover:scale-105 duration-100 text-black"
              onClick={userSignOut}
            >
              Odhlásit se
            </button>
            <div>
              <button
                onClick={navigateToMap}
                className="border-[15px] m-2 border-[rgb(37,192,176)] bg-[rgb(37,192,176)]  drop-shadow-2xl hover:scale-105 duration-100 text-black"
              >
                MAPA
              </button>
            </div>
          </>
        ) : (
          <div className="justify-center mt-[100px]">
            <Link
              to="/login"
              className="border-[25px] border-[rgb(37,192,176)] bg-[rgb(37,192,176)]  drop-shadow-2xl hover:scale-125 duration-100"
              id="ÚČET"
            >
              ÚČET
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mt-5" id="ROZCESTNÍK">
          ROZCESTNÍK
        </h1>
        <img alt="Main_Logo" src={logo_img} />
      </div>
    </header>
  );
};

export default Header;
