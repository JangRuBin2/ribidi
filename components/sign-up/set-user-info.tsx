"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SetUserInfo = () => {
  const [step, setStep] = useState(0);
  const handleStep = () => {
    if (step < 2) setStep((p) => ++p);
  };

  const RenderStepComponent = () => {
    switch (step) {
      case 0:
        return <Input placeholder="이름을 입력해주세요." />;
      case 1:
        return <Calendar />;
    }
  };
  return (
    <div>
      <RenderStepComponent />
      <Button onClick={handleStep}>{"확인"}</Button>
    </div>
  );
};
export default SetUserInfo;
