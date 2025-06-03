import { Link } from "react-router-dom";

const SideTab = () => {
  return (
    <div>
      <nav>
        <Link to="/">{"홈"}</Link>
        <Link to="/about">{"소개"}</Link>
      </nav>
    </div>
  );
};
export default SideTab;
