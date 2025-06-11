import { Calendar } from "../ui/calendar";

const SignUpCalendar = ({
  value,
  onChange,
  description,
}: {
  value?: Date;
  onChange: (date?: Date) => void;
  description?: string;
}) => {
  return (
    <label htmlFor="">
      {description}
      <Calendar
        mode="single"
        selected={value}
        onSelect={onChange}
        captionLayout="dropdown"
      />
    </label>
  );
};
export default SignUpCalendar;
