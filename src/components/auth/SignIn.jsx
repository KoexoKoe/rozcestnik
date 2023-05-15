import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        navigate("/");
        alert("Úspěšně přihlášeno");
      })
      .catch((error) => {
        console.log(error);
        alert("Špatné údaje");
      });
  };

  return (
    <div className="w-full h-full bg-blue-900">
      <div className="justify-center text-center mt-20 bg-blue-400">
        <form onSubmit={signIn}>
          <h1>Přihlášení</h1>
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
          <button type="submit">Přihlásit se</button>
          <div>
            <Link to="/register">
              <button className="mt-5">Vytvořit účet</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
