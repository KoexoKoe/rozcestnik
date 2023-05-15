import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
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
      });
  };

  return (
    <div className="w-[100%] h-[1080px] bg-black">
      <div className="flex flex-col justify-center text-center mt-20 bg-blue-400">
        <form onSubmit={signUp}>
          <h1>Registruj se</h1>
          <input
            type="email"
            placeholder="Vlož svůj email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Vlož své heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Vytvořit účet</button>
          <div>
            <p className="mt-5">Již máš účet?</p>
            <Link to="/">
              <button className="">Přihlášení</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
