import { Icons } from "../../constants/icons/icons";
import SideNavWrapper from "./Sidenavwrapper";

type TProp = {
  clickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const SideNav = ({ clickHandler }: TProp) => {
  return (
    <SideNavWrapper>
      <div className="side-container">
        <div className="brand">{Icons.brand()}</div>
        <div className="icons">{Icons.homeIcon()}</div>
        <div className="icons">{Icons.reportIcon()}</div>
        <div className="icons">{Icons.profileIcon()}</div>
        <div className="icons">{Icons.settingsIcon()}</div>
        <div className="hamburger icon-sm" onClick={(e) => clickHandler(e)}>
          {Icons.hamburgerIcon()}
        </div>
      </div>

      {/* TODO: remove IsClicked and make side nav slide out */}
    </SideNavWrapper>
  );
};

export default SideNav;
