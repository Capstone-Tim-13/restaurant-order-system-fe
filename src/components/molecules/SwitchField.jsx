import { MantineProvider, Switch } from "@mantine/core";

const themeSettings = {
  colors: {
    brown: [
      "#faf1ef",
      "#eee2de",
      "#e0bfb8",
      "#d39c8e",
      "#c87e6b",
      "#c26a54",
      "#783525",
      "#a8503a",
      "#974632",
      "#853b29",
    ],
  },
  primaryColor: "brown",
};

export const SwitchField = ({ label, onChange }) => (
  <MantineProvider theme={themeSettings}>
    <Switch label={label} onChange={onChange} />
  </MantineProvider>
);
