import SideTab from "../side-tab";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <SideTab />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
