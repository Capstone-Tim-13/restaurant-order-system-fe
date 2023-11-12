export const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
  />
);
