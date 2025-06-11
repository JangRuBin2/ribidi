import { Alert, AlertDescription, AlertTitle } from "./alert";

const CustomAlert = ({
  title = "잘못된 요청입니다.",
  description,
}: {
  title?: string;
  description?: React.ReactNode;
}) => {
  return (
    <Alert variant="default">
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  );
};
export default CustomAlert;
