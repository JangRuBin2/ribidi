"use client";
import { UserInfo } from "@/lib/sign-up";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CustomAlert from "../ui/custom-alert";
const USERINFO_LABEL: { [key in keyof UserInfo]: string } = {
  name: "이름",
  birthDate: "생일",
  startDate: "사귀기 시작한 날짜",
};
const CheckUserInfo = ({ userInfo }: { userInfo: UserInfo }) => {
  const router = useRouter();
  const [alertText, setAlertText] = useState<string[]>([]);

  const checkUserInfo = useCallback(() => {
    const missing: string[] = [];
    (
      Object.entries(userInfo) as [keyof UserInfo, UserInfo[keyof UserInfo]][]
    ).forEach(([key, value]) => {
      if (!value) {
        missing.push(`${USERINFO_LABEL[key]}를 입력해주세요.`);
      }
    });
    setAlertText(missing);
  }, [userInfo]);

  useEffect(() => {
    checkUserInfo();
  }, [checkUserInfo]);

  useEffect(() => {
    if (alertText.length === 0) {
      router.push("/next");
    }
  }, [alertText, router]);

  return (
    <>
      {Array.isArray(alertText) && alertText.length > 0 && (
        <CustomAlert
          title="입력값을 확인해주세요."
          description={
            <ul className="list-disc list-inside space-y-1 text-sm">
              {alertText.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      )}
    </>
  );
};
export default CheckUserInfo;
