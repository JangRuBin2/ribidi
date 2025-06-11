export type UserInfo = {
  name: string;
  birthDate?: Date;
  startDate?: Date;
};
export const initial: UserInfo = {
  name: "",
  birthDate: new Date(),
  startDate: undefined,
};
