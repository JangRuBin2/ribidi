import { UserInfo } from "@/lib/sign-up";
import { Dispatch, SetStateAction } from "react";
import { Calendar } from "../ui/calendar";

const SignUpCalendar = ({
  userInfo,
  setUserInfo,
  description,
}: {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  description?: string;
}) => {
  return (
    <label htmlFor="">
      {description}
      <Calendar
        mode="single"
        selected={userInfo.birthDate}
        onSelect={(date) => {
          setUserInfo((p) => ({ ...p, birthDate: date }));
        }}
        captionLayout="dropdown"
      />
    </label>
  );
};
export default SignUpCalendar;
