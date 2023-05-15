import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        navigate("/login");
        alert("Účet úspěšně vytvořen! Můžeš se přihlásit.");
      })
      .catch((error) => {
        console.log(error);
        alert("Nezadal jsi všechny potřebné údaje");
      });
  };

  return (
    <div>
      <div className="w-screen screen-full justify-center text-center bg-blue-400">
        <form
          className="w-screen h-screen flex flex-col justify-center items-center text-center border-[4px] border-blue-500"
          onSubmit={signUp}
        >
          <h1>REGISTRACE</h1>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-2 border-black border-[2px] text-center "
          ></input>
          <input
            type="password"
            placeholder="heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-2 border-black border-[2px] text-center "
          ></input>
          <button
            className="border-[15px] m-2 text-1xl border-blue-500 bg-blue-500 drop-shadow-sm"
            type="submit"
          >
            Založit účet
          </button>
          <div>
            <p className="mt-5">Již jsi zaregistrovaný?</p>
            <Link to="/login">
              <button className="border-[15px] m-2 text-1xl border-blue-500 bg-blue-500 drop-shadow-sm text-black">
                Přihlášení
              </button>
            </Link>
          </div>
          <button
            onClick={navigateToHome}
            className="mt-[100px] justify-center items-center border-[15px] border-[rgb(37,192,176)] bg-[rgb(37,192,176)]  drop-shadow-2xl hover:scale-105 duration-100"
          >
            DOMŮ
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
