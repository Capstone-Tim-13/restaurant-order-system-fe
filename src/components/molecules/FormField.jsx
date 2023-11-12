import { Input } from "../atoms/Input";

export const FormField = ({ label, ...inputProps }) => (
  <div>
    <label htmlFor={inputProps.name} className="block font-medium text-primary">
      {label}
    </label>
    <Input {...inputProps} />
  </div>
);
