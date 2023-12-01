import { useEffect, useState } from 'react';

export const useToggle = (value?: boolean) => {
  const [isOpen, setIsOpen] = useState(value);

  useEffect(() => {
    setIsOpen(value || false);
  }, [value]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
};
