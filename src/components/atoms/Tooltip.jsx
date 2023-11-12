import { Tooltip as MantineTooltip } from '@mantine/core';

export default function Tooltip({ title, children }) {
  return (
    <MantineTooltip
      label={title}
      transitionProps={{ transition: 'pop', duration: 300 }}
      withArrow
      arrowSize={6}>
      <div>{children}</div>
    </MantineTooltip>
  );
}
