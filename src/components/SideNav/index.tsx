import { Icons } from "../../constants/icons/icons";
import SideNavWrapper from "./Sidenavwrapper";

type TProp = {
  clickHandler: () => void;
};

const SideNav = ({ clickHandler }: TProp) => {
  return (
    <SideNavWrapper>
      <div className="container">
        <div className="brand">{Icons.brand()}</div>
        <div className="icons">{Icons.homeIcon()}</div>
        <div className="icons">{Icons.reportIcon()}</div>
        <div className="icons">{Icons.profileIcon()}</div>
        <div className="icons">{Icons.settingsIcon()}</div>
        <div className="hamburger icon-sm" onClick={() => clickHandler()}>
          {Icons.hamburgerIcon()}
        </div>
      </div>

      {/* TODO: remove IsClicked and make side nav slide out */}
    </SideNavWrapper>
  );
};

export default SideNav;
