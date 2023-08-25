import brandLogo from "../../assets/brand-logo.svg";
import homeIcon from "../../assets/home-icon.svg";
import reportIcon from "../../assets/report-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import settingsIcon from "../../assets/settings.svg";
import hamburgerIcon from "../../assets/hamburger.svg";
import notificationIcon from "../../assets/notification.svg";
import topProfileIcon from "../../assets/top-profile.svg";
import cloudy from "../../assets/cloudy.svg";
import cloudySunny from "../../assets/cloudysunny.svg";
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
  NotificationIcon: () => {
    return <img src={notificationIcon} alt="notification icon" />;
  },
  topProfileIcon: () => {
    return <img src={topProfileIcon} alt="top profile icon" />;
  },
  cloudyIcon: () => {
    return <img src={cloudy} alt="cloudy icon" width="50px" />;
  },
  cloudySunnyIcon: () => {
    return <img src={cloudySunny} alt="cloudy sunny icon" />;
  },
};

export { Icons };
