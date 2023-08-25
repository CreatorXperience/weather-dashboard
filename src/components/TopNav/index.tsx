import { styled } from "styled-components";
import { Icons } from "../../constants/icons/icons";

const TopNav = () => {
  return (
    <TopNavWrapper>
      <div className="container">
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

const TopNavWrapper = styled.div`
  width: 100%;

  .container {
    width: 100%;
    height: 10vh;
    border: 1px solid red;
    display: flex;
    justify-content: end;
    padding: 12px;

    .icons {
      margin: 12px;
      padding: 5px;
    }

    .profile-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      margin: 12px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .container {
      padding: 2px;
      .icons {
        margin: 5px;
        padding: 5px;
      }
      .profile-circle {
        margin: 0;
      }
    }
  }
`;
