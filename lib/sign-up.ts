export type UserInfo = {
  name: string;
  birthDate?: Date;
  startDate?: Date;
  loveGoal: string;
};
export const initial: UserInfo = {
  name: "",
  birthDate: new Date(),
  startDate: undefined,
  loveGoal: "",
};
