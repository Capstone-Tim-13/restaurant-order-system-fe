export const Button = ({ type, className, children, isDisabled }) => (
  <button type={type} className={className} disabled={isDisabled}>
    {children}
  </button>
);
