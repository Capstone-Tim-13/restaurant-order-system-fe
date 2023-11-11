import { FormField } from "../molecules/FormField";
import { SwitchField } from "../molecules/SwitchField";
import { Button } from "../atoms/Button";

export const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  handleSubmit,
}) => (
  <form className=" w-11/12" onSubmit={handleSubmit}>
    <FormField
      type="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-3 py-2 mb-3 placeholder-gray-300 border-2 border-brown rounded-full focus:outline-none placeholder:text-sm"
      placeholder="alamat email kamu"
      label="Email"
    />
    <FormField
      type="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-3 py-2 mb-3 placeholder-gray-300 border-2 border-brown rounded-full focus:outline-none placeholder:text-sm"
      placeholder="password kamu"
      label="Password"
    />
    <SwitchField
      label="Ingat Saya"
      checked={rememberMe}
      onChange={setRememberMe}
    />
    <Button
      type="submit"
      className="w-full py-2 mt-12 text-white bg-brown rounded-full "
    >
      Masuk
    </Button>
  </form>
);
