import { Icons } from "../../constants/icons/icons";
import TopNavWrapper from "./Topnavwrapper";

const TopNav = () => {
  return (
    <TopNavWrapper>
      <div className="top-container">
        <div className="icons">{Icons.NotificationIcon()}</div>
        <div className="icons">{Icons.topProfileIcon()}</div>
        <div className="profile-circle">
          {/* TODO: Change dummy image later wiring up Google Auth */}
          <img
            src="https://i.pinimg.com/564x/bd/2d/e3/bd2de31b091dc6f8c93a6bc5d5209ddb.jpg"
            alt="dummy-img"
          />
        </div>
      </div>
    </TopNavWrapper>
  );
};

export default TopNav;
