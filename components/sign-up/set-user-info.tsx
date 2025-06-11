"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { initial, UserInfo } from "@/lib/sign-up";
import { useState } from "react";
import CheckUserInfo from "./check-user-info";
import SignUpCalendar from "./sign-up-calendar";

const SetUserInfo = () => {
  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>(initial);
  const handleStep = (mode: "back" | "next") => {
    if (step > 3 || (step === 0 && mode === "back")) return;
    setStep((p) => (mode === "next" ? ++p : --p));
  };
  const RenderStepComponent = () => {
    switch (step) {
      case 0:
        return (
          <Input
            placeholder="당신의 이름 혹은 별명을 입력해주세요."
            value={userInfo.name}
            onChange={(e) =>
              setUserInfo((p) => ({ ...p, name: e.target.value }))
            }
          />
        );
      case 1:
        return (
          <SignUpCalendar
            value={userInfo.birthDate}
            onChange={(date) =>
              setUserInfo((prev) => ({ ...prev, birthDate: date }))
            }
            description="당신의 생일은 언제인가요?"
          />
        );
      case 2:
        return (
          <SignUpCalendar
            value={userInfo.startDate}
            onChange={(date) =>
              setUserInfo((prev) => ({ ...prev, startDate: date }))
            }
            description="당신과 상대가 사귀기 시작한 날짜를 입력해주세요."
          />
        );
      case 3:
        return <CheckUserInfo userInfo={userInfo} />;
    }
  };
  return (
    <div>
      {`${step + 1} 단계`}
      {RenderStepComponent()}
      <Button onClick={() => handleStep("back")} disabled={step === 0}>
        {"이전"}
      </Button>
      <Button onClick={() => handleStep("next")} disabled={step > 2}>
        {"다음"}
      </Button>
    </div>
  );
};
export default SetUserInfo;
