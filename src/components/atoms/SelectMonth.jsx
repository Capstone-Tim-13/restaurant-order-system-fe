import { DatesProvider, MonthPickerInput } from '@mantine/dates';
import { SlCalender } from 'react-icons/sl';

export default function SelectMonth() {
  return (
    <DatesProvider
      settings={{ locale: 'id', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput
        icon={<SlCalender size="1.1rem" stroke={1.5} />}
        variant="unstyled"
        placeholder="Pick month"
        value={new Date()}
        maxDate={new Date()}
        className="bg-white p-3 rounded-xl w-max h-max shadow-lg font-poppins font-medium whitespace-nowrap"
      />
    </DatesProvider>
  );
}
