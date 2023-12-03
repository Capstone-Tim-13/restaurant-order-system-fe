import { LoginForm } from "../components/organisms/LoginForm";
import { BG_LOGIN, LOGO_ALTARESTO } from "../assets";
import { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../store/actions/authAsync';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email tidak valid'),
    password: Yup.string().min(8, 'Kata sandi minimal 8 karakter'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      dispatch(loginAdmin({ email, password, rememberMe }));
      setErrors({}); 
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="relative min-h-screen flex font-poppins">
      <img
        src={BG_LOGIN}
        alt=""
        className="absolute w-full h-full object-cover hidden md:block"
      />
      <div className="relative ms-auto w-full md:w-[470px] min-h-screen justify-center items-center min-[320px]:p-2 md:p-8 md:rounded-l-[92px] bg-white md:shadow-2xl">
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
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
