import brandLogo from "../../assets/brand-logo.svg";
import homeIcon from "../../assets/home-icon.svg";
import reportIcon from "../../assets/report-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import settingsIcon from "../../assets/settings.svg";
import hamburgerIcon from "../../assets/hamburger.svg";
const Icons = {
  brand: () => {
    return <img src={brandLogo} alt="brand logo" />;
  },
  homeIcon: () => {
    return <img src={homeIcon} alt="home icon" />;
  },
  reportIcon: () => {
    return <img src={reportIcon} alt="report icon" />;
  },
  profileIcon: () => {
    return <img src={profileIcon} alt="profile icon" />;
  },
  settingsIcon: () => {
    return <img src={settingsIcon} alt="settings icon" />;
  },
  hamburgerIcon: () => {
    return <img src={hamburgerIcon} alt="hamburger icon" />;
  },
};

export { Icons };
