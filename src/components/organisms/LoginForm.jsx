import { useSelector } from 'react-redux';
import { FormField } from '../molecules/FormField';
import { SwitchField } from '../molecules/SwitchField';
import { Button } from '../atoms/Button';
import cn from '../../utils/cn';

export const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  handleSubmit,
  errors,
}) => {
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <form className=" w-11/12" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 mb-3 placeholder-gray-300 border-2 border-brown rounded-full focus:outline-none placeholder:text-sm focus:border-brown focus:ring-1 focus:ring-brown"
        placeholder="alamat email kamu"
        label="Email"
      />{' '}
      {errors.email && (
        <p className="mb-2 text-red-600 text-sm">{errors.email}</p>
      )}
      <FormField
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 mb-3 placeholder-gray-300 border-2 border-brown rounded-full focus:outline-none placeholder:text-sm focus:border-brown focus:ring-1 focus:ring-brown"
        placeholder="password kamu"
        label="Password"
      />
      {errors.password && (
        <p className="mb-2 text-red-600 text-sm">{errors.password}</p>
      )}
      <SwitchField
        label="Ingat Saya"
        checked={rememberMe}
        onChange={()=> setRememberMe(!rememberMe)}
      />
      <Button
        isDisabled={isLoading}
        type="submit"
        className={cn(
          'w-full py-2 mt-12 text-white bg-brown rounded-full hover:bg-[#61291b]',
          {
            'bg-gray-500 hover:bg-gray-500 cursor-wait': isLoading,
          }
        )}>
        Masuk {isLoading && '...'}
      </Button>
    </form>
  );
};
