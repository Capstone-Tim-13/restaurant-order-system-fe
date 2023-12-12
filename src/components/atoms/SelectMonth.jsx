import { MantineProvider } from '@mantine/core';
import { DatesProvider, MonthPickerInput } from '@mantine/dates';
import { SlCalender } from 'react-icons/sl';

export default function SelectMonth({ dateFilter, setDateFilter }) {
  return (
    <MantineProvider theme={themeSettings}>
      <DatesProvider
        settings={{ locale: 'id', firstDayOfWeek: 0, weekendDays: [0] }}>
        <MonthPickerInput
          icon={<SlCalender size="1.1rem" stroke={1.5} />}
          variant="unstyled"
          placeholder="Pick month"
          value={dateFilter}
          minDate={new Date(2023, 11, 0)}
          maxDate={new Date()}
          onChange={setDateFilter}
          className="bg-white p-3 rounded-xl w-max h-max shadow-lg font-poppins font-medium whitespace-nowrap"
        />
      </DatesProvider>
    </MantineProvider>
  );
}

const themeSettings = {
  colors: {
    brown: [
      '#faf1ef',
      '#eee2de',
      '#e0bfb8',
      '#d39c8e',
      '#c87e6b',
      '#c26a54',
      '#783525',
      '#a8503a',
      '#974632',
      '#853b29',
    ],
  },
  primaryColor: 'brown',
};
