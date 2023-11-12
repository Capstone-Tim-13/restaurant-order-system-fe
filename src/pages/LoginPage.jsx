import { LoginForm } from "../components/organisms/LoginForm";
import { BG_LOGIN, LOGO_ALTARESTO } from "../assets";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="relative h-screen items-center justify-center font-poppins">
      <img src={BG_LOGIN} alt="" className=" w-3/4 h-full object-cover" />
      <div className="absolute top-0 right-0 w-[470px] h-full flex-1 flex-col  justify-center items-center p-8 rounded-l-[92px] bg-white shadow-2xl">
        <div className="m-8">
          <img src={LOGO_ALTARESTO} alt="logo" className="w-[200px] h-[75px]" />
          <hr className="mt-4 border-t border-brown w-full" />
          <h1 className="text-[32px] font-bold text-brown my-10 text-center">
            Login
          </h1>
          <p className="text-brown mb-5">
            <span className="mb-1 block  text-[35px] font-semibold ">
              Halo!
            </span>
            <span className="font-normal text-sm">
              Masukan email dan password disini
            </span>
          </p>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
